import React from 'react';
import { Gamepad2, Clock, Trophy, Hash, Calendar, Layers, LucideIcon } from 'lucide-react';

interface StatsGridProps {
  totalGames: number;
  totalHours: number;
  completedGames: number;
  favoriteGenre: string;
  yearsGaming: number;
  platforms: string[];
}

const StatCard = ({ icon: Icon, label, value, colorClass = "text-cyan-400" }: { icon: LucideIcon, label: string, value: string | number, colorClass?: string }) => (
  <div className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10">
    {/* Hover Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    
    <div className="relative flex items-center gap-4">
      <div className={`p-3 rounded-lg bg-white/5 ${colorClass}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{label}</p>
        <h3 className={`text-3xl font-bold mt-1 tracking-tight ${colorClass}`}>{value}</h3>
      </div>
    </div>
  </div>
);

const StatsGrid: React.FC<StatsGridProps> = ({
  totalGames,
  totalHours,
  completedGames,
  favoriteGenre,
  yearsGaming,
  platforms,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 py-12">
      <StatCard 
        icon={Gamepad2} 
        label="Total Games" 
        value={totalGames.toLocaleString()} 
        colorClass="text-cyan-400"
      />
      <StatCard 
        icon={Clock} 
        label="Hours Played" 
        value={totalHours.toLocaleString()} 
        colorClass="text-blue-400"
      />
      <StatCard 
        icon={Trophy} 
        label="Completed" 
        value={completedGames.toLocaleString()} 
        colorClass="text-cyan-300"
      />
      <StatCard 
        icon={Hash} 
        label="Fav Genre" 
        value={favoriteGenre} 
        colorClass="text-blue-300"
      />
      <StatCard 
        icon={Calendar} 
        label="Years Gaming" 
        value={`${yearsGaming}+`} 
        colorClass="text-cyan-400"
      />
      
      {/* Platforms Card */}
      <div className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        
        <div className="relative flex flex-col gap-3 h-full justify-center">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-blue-400">
              <Layers size={24} />
            </div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Platforms</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {platforms.map((platform) => (
              <span 
                key={platform}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
