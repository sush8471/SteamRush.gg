import Image from "next/image";
import { Star, Trophy, Clock, Monitor, Heart } from "lucide-react";

interface GameCardProps {
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

const moodTagColors: Record<string, string> = {
  grind: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  chill: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  rage: "bg-red-500/20 text-red-400 border-red-500/30",
  emotional: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function GameCard({
  title,
  coverArtUrl,
  hoursPlayed,
  platform,
  completionPercent,
  personalRating,
  moodTag,
  memory,
  isFavorite,
}: GameCardProps) {
  const moodColorClass = moodTagColors[moodTag.toLowerCase()] || "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";

  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
      {/* Cover Art */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={coverArtUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        
        {/* Favorite Badge */}
        {isFavorite && (
          <div className="absolute top-3 right-3 p-2 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/30">
            <Heart className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
        )}

        {/* Mood Tag */}
        <div className={`absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-medium border backdrop-blur-md ${moodColorClass}`}>
          {moodTag.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {hoursPlayed} hrs
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-3 h-3" />
              {platform}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1 uppercase tracking-wider font-semibold">
              <Trophy className="w-3 h-3 text-yellow-500" />
              Completion
            </span>
            <span>{completionPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>

        {/* Rating & Memory */}
        <div className="pt-2 border-t border-white/5 space-y-3">
          <div className="flex items-center gap-1">
            {[...Array(10)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < personalRating ? "text-yellow-500 fill-yellow-500" : "text-zinc-700"
                }`}
              />
            ))}
            <span className="ml-2 text-xs font-bold text-zinc-300">{personalRating}/10</span>
          </div>
          
          <p className="text-xs text-zinc-400 italic leading-relaxed">
            &ldquo;{memory}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
