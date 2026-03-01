import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";

const dummyGames = [
  {
    title: "Elden Ring",
    coverArtUrl: "https://images.unsplash.com/photo-1650394344440-5a8286eb7924?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 245,
    platform: "PC",
    completionPercent: 100,
    personalRating: 10,
    moodTag: "grind",
    memory: "The satisfaction of finally beating Malenia after 50 tries was unmatched.",
    isFavorite: true,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    coverArtUrl: "https://images.unsplash.com/photo-1605898960710-918999339391?q=80&w=2071&auto=format&fit=crop",
    hoursPlayed: 180,
    platform: "PS5",
    completionPercent: 85,
    personalRating: 9,
    moodTag: "emotional",
    memory: "Strolling through Toussaint at sunset is a core gaming memory.",
    isFavorite: true,
  },
  {
    title: "Stardew Valley",
    coverArtUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 120,
    platform: "Nintendo Switch",
    completionPercent: 40,
    personalRating: 8,
    moodTag: "chill",
    memory: "Finally automated my farm with iridium sprinklers.",
    isFavorite: false,
  },
  {
    title: "Sekiro: Shadows Die Twice",
    coverArtUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 65,
    platform: "PC",
    completionPercent: 100,
    personalRating: 10,
    moodTag: "rage",
    memory: "Hesitation is defeat.",
    isFavorite: false,
  },
  {
    title: "Cyberpunk 2077",
    coverArtUrl: "https://images.unsplash.com/photo-1614027164847-1b28006889bd?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 95,
    platform: "PC",
    completionPercent: 60,
    personalRating: 8,
    moodTag: "emotional",
    memory: "Night City really comes alive when you just stop and look around.",
    isFavorite: false,
  },
  {
    title: "Hades",
    coverArtUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    hoursPlayed: 45,
    platform: "Nintendo Switch",
    completionPercent: 90,
    personalRating: 9,
    moodTag: "grind",
    memory: "The dialogue between Zag and Hades is so well written.",
    isFavorite: false,
  },
];

export default function GamerProfilePage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 space-y-12">
      <HeroSection
        displayName={username}
        tagline="Elite Gamer | Streamer | Pro Competitor"
        avatarUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
        coverImageUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
        theme="cyberpunk"
      />

      <StatsGrid
        totalGames={dummyGames.length}
        totalHours={750}
        completedGames={dummyGames.filter(g => g.completionPercent === 100).length}
        favoriteGenre="FPS / RPG"
        yearsGaming={12}
        platforms={["PC", "PS5", "Nintendo Switch"]}
      />

      <GamesSection games={dummyGames} />
    </main>
  );
}
