import GameCard from "./GameCard";

interface Game {
  title: string;
  coverArtUrl: string;
  hoursPlayed: number;
  platform: string;
  completionPercent: number;
  personalRating: number;
  moodTag: string;
  memory: string;
  isFavorite: boolean;
}

interface GamesSectionProps {
  games: Game[];
}

export default function GamesSection({ games }: GamesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
          Game Collection
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {games.map((game, index) => (
          <GameCard key={`${game.title}-${index}`} {...game} />
        ))}
      </div>
    </section>
  );
}
