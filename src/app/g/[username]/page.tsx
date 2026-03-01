import HeroSection from "@/components/profile/HeroSection";
import StatsGrid from "@/components/profile/StatsGrid";
import GamesSection from "@/components/profile/GamesSection";
import Timeline, { TimelineEvent } from "@/components/profile/Timeline";

const dummyGames = [
  // ... existing code
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

      <Timeline events={dummyTimeline} />
    </main>
  );
}

