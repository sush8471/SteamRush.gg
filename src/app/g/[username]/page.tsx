import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";
import Timeline, { TimelineEvent } from "@/components/profile/Timeline";
import HallOfFame from "@/components/profile/HallOfFame";
import GamerPersonality from "@/components/profile/GamerPersonality";

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

const dummyTimeline: TimelineEvent[] = [
  {
    year: 2012,
    title: "The First PC Build",
    description: "Built my first dedicated gaming rig with a GTX 660. The journey officially began.",
    eventType: "milestone",
  },
  {
    year: 2015,
    title: "Rank 1 in League",
    description: "Hit Diamond I after 500+ games in a single season. The grind was real.",
    eventType: "achievement",
  },
  {
    year: 2017,
    title: "The Great PC Crash",
    description: "Motherboard fried during a tournament. Lost two weeks of practice and almost quit.",
    eventType: "struggle",
  },
  {
    year: 2019,
    title: "Souls-like Awakening",
    description: "Beat Dark Souls 3 for the first time. Realized my love for challenging, high-stakes combat.",
    eventType: "achievement",
  },
  {
    year: 2022,
    title: "Full 100% Elden Ring",
    description: "Clocked 200+ hours to get the Platinum trophy. Every secret discovered.",
    eventType: "milestone",
  },
  {
    year: 2024,
    title: "Going Pro",
    description: "Joined an official competitive roster. Turning the passion into a career.",
    eventType: "achievement",
  },
];

const dummyAchievements: any[] = [
  {
    title: "The Godslayer",
    game: "Elden Ring",
    difficulty: "legendary",
    description: "Defeated Malenia, Blade of Miquella, using only a level 1 Wretch with no armor.",
  },
  {
    title: "Grandmaster of the Rift",
    game: "League of Legends",
    difficulty: "hardcore",
    description: "Maintained a 65% win rate over 200 games while playing from a high-latency region.",
  },
  {
    title: "Speed Demon",
    game: "Sekiro: Shadows Die Twice",
    difficulty: "nightmare",
    description: "Completed a Shura ending speedrun in under 45 minutes on a live stream.",
  },
  {
    title: "Pacifist Master",
    game: "The Witcher 3",
    difficulty: "hardcore",
    description: "Finished the main story questline without taking a single point of unnecessary damage.",
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

      <GamerPersonality 
        gamerType="The Completionist"
        description="Driven by the allure of 100% trophies and hidden achievements, this gamer leaves no stone unturned. Every secret is a challenge, and every side quest is a mandatory mission."
      />

      <HallOfFame achievements={dummyAchievements} />

      <GamesSection games={dummyGames} />

      <Timeline events={dummyTimeline} />
    </main>
  );
}
