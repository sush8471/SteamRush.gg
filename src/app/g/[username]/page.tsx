import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";
import Timeline from "@/components/profile/Timeline";
import HallOfFame from "@/components/profile/HallOfFame";
import GamerPersonality from "@/components/profile/GamerPersonality";
import ProfileFooter from "@/components/profile/ProfileFooter";
import ThemeWrapper from "@/components/profile/ThemeWrapper";

const dummyGames = [
  {
    title: "Elden Ring",
    coverArtUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    hoursPlayed: 245,
    platform: "PC",
    completionPercent: 100,
    personalRating: 10,
    moodTag: "grind" as const,
    memory: "The first time I defeated Malenia after 50+ attempts was pure euphoria.",
    isFavorite: true,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    coverArtUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 320,
    platform: "PS5",
    completionPercent: 95,
    personalRating: 10,
    moodTag: "emotional" as const,
    memory: "Watching the sunrise in Kaer Morhen is a moment I'll never forget.",
    isFavorite: true,
  },
  {
    title: "Stardew Valley",
    coverArtUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 180,
    platform: "Nintendo Switch",
    completionPercent: 60,
    personalRating: 8,
    moodTag: "chill" as const,
    memory: "Spent an entire rainy Sunday just fishing and listening to the soundtrack.",
    isFavorite: false,
  },
  {
    title: "Sekiro: Shadows Die Twice",
    coverArtUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    hoursPlayed: 85,
    platform: "PC",
    completionPercent: 40,
    personalRating: 9,
    moodTag: "rage" as const,
    memory: "The combat system clicked for me at Genichiro, and it's been a dance since then.",
    isFavorite: false,
  }
];

const dummyTimeline = [
  {
    year: "2012",
    title: "The Beginning",
    description: "Picked up a controller for the first time and started my journey in Skyrim.",
    eventType: "milestone" as const
  },
  {
    year: "2015",
    title: "First Competition",
    description: "Entered a local CS:GO tournament and learned the true meaning of pressure.",
    eventType: "achievement" as const
  },
  {
    year: "2018",
    title: "The Slump",
    description: "Burned out after trying to go pro. Took a long break to find the fun again.",
    eventType: "struggle" as const
  },
  {
    year: "2021",
    title: "Soulslike Awakening",
    description: "Beat Dark Souls 1-3 back-to-back. Discovered a new love for challenge.",
    eventType: "milestone" as const
  },
  {
    year: "2024",
    title: "SteamRush Legend",
    description: "Reached 100% completion on Elden Ring and shared my journey here.",
    eventType: "achievement" as const
  }
];

const dummyAchievements = [
  {
    title: "God Slain",
    game: "Elden Ring",
    difficulty: "legendary" as const,
    description: "Defeated every main boss including all secret demigods in a single playthrough."
  },
  {
    title: "No-Hit Run",
    game: "Sekiro",
    difficulty: "nightmare" as const,
    description: "Successfully completed the entire game without taking a single direct hit from an enemy."
  },
  {
    title: "The Ultimate Farmer",
    game: "Stardew Valley",
    difficulty: "hardcore" as const,
    description: "Reached Year 10 and achieved maximum friendship with every single townsperson."
  }
];

export default async function GamerProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
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
