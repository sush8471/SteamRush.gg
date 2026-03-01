import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";
import Timeline, { TimelineEvent } from "@/components/profile/Timeline";
import HallOfFame from "@/components/profile/HallOfFame";
import GamerPersonality from "@/components/profile/GamerPersonality";
import ProfileFooter from "@/components/profile/ProfileFooter";
import ThemeWrapper from "@/components/profile/ThemeWrapper";

// ... (rest of imports and data)

export default function GamerProfilePage({ params }: { params: { username: string } }) {
  const { username } = params;
  const theme = "cyberpunk"; // This could come from the user's data in the future

  return (
    <ThemeWrapper theme={theme}>
      <main className="p-4 md:p-8 space-y-12">
        <HeroSection
          displayName={username}
          tagline="Elite Gamer | Streamer | Pro Competitor"
          avatarUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
          coverImageUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
          theme={theme}
        />

        <StatsGrid
          totalGames={dummyGames.length}
          totalHours={750}
          completedGames={dummyGames.filter(g => g.completionPercent === 100).length}
          favoriteGenre="FPS / RPG"
          yearsGaming={12}
          platforms={["PC", "PS5", "Nintendo Switch"]}
        />

        <GamerPersonality 
          gamerType="The Completionist"
          description="Driven by the allure of 100% trophies and hidden achievements, this gamer leaves no stone unturned. Every secret is a challenge, and every side quest is a mandatory mission."
        />

        <HallOfFame achievements={dummyAchievements} />

        <GamesSection games={dummyGames} />

        <Timeline events={dummyTimeline} />

        <ProfileFooter />
      </main>
    </ThemeWrapper>
  );
}
