import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";
import Timeline from "@/components/profile/Timeline";
import HallOfFame from "@/components/profile/HallOfFame";
import GamerPersonality from "@/components/profile/GamerPersonality";
import ProfileFooter from "@/components/profile/ProfileFooter";
import ThemeWrapper from "@/components/profile/ThemeWrapper";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
  const { username } = await params;
  
  const { data: client } = await supabase
    .from("clients")
    .select("display_name, tagline")
    .eq("username", username)
    .single();

  if (!client) {
    return {
      title: "Profile Not Found | SteamRush.gg",
    };
  }

  return {
    title: `${client.display_name} | SteamRush.gg`,
    description: client.tagline,
    openGraph: {
      title: `${client.display_name}'s Gaming Journey`,
      description: client.tagline,
      type: "website",
    },
  };
}

export default async function GamerProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;

  // Fetch client data
  const { data: client, error: clientError } = await supabase
    .from("clients")
    .select("*")
    .eq("username", username)
    .single();

  if (clientError || !client || !client.is_published) {
    notFound();
  }

  // Fetch related data in parallel
  const [
    { data: stats },
    { data: games },
    { data: timeline },
    { data: achievements },
    { data: personality }
  ] = await Promise.all([
    supabase.from("stats").select("*").eq("client_id", client.id).single(),
    supabase.from("games").select("*").eq("client_id", client.id).order("sort_order", { ascending: true }),
    supabase.from("timeline").select("*").eq("client_id", client.id).order("sort_order", { ascending: true }),
    supabase.from("hall_of_fame").select("*").eq("client_id", client.id),
    supabase.from("personality").select("*").eq("client_id", client.id).single()
  ]);

  const theme = (client.theme || "cyberpunk") as any;

    return (
      <ThemeWrapper theme={theme}>
        <main className="p-4 md:p-8 space-y-12 animate-[fade-in_0.8s_ease-out_forwards]">
          <HeroSection

          displayName={client.display_name}
          tagline={client.tagline}
          avatarUrl={client.avatar_url}
          coverImageUrl={client.cover_image_url}
          theme={theme}
        />

        {stats && (
          <StatsGrid
            totalGames={stats.total_games}
            totalHours={stats.total_hours}
            completedGames={stats.completed_games}
            favoriteGenre={stats.favorite_genre}
            yearsGaming={stats.years_gaming}
            platforms={stats.platforms || []}
          />
        )}

        {personality && (
          <GamerPersonality 
            gamerType={personality.gamer_type}
            description={personality.description}
          />
        )}

        {achievements && achievements.length > 0 && (
          <HallOfFame achievements={achievements as any} />
        )}

        {games && games.length > 0 && (
          <GamesSection 
            games={games.map(g => ({
              title: g.title,
              coverArtUrl: g.cover_art_url,
              hoursPlayed: g.hours_played,
              platform: g.platform,
              completionPercent: g.completion_percent,
              personalRating: g.personal_rating,
              moodTag: g.mood_tag,
              memory: g.memory,
              isFavorite: g.is_favorite
            }))} 
          />
        )}

        {timeline && timeline.length > 0 && (
          <Timeline 
            events={timeline.map(e => ({
              year: e.year,
              title: e.title,
              description: e.description,
              eventType: e.event_type as any
            }))} 
          />
        )}

        <ProfileFooter />
      </main>
    </ThemeWrapper>
  );
}
