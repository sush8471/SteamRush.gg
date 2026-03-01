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

const StatCard = ({ icon: Icon, label, value }: { icon: LucideIcon, label: string, value: string | number }) => (
  <div className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-[var(--accent-primary)]/50 hover:bg-white/10">
    {/* Hover Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    
    <div className="relative flex items-center gap-4">
      <div className={`p-3 rounded-lg bg-white/5 text-[var(--accent-primary)] transition-colors duration-1000`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{label}</p>
        <h3 className={`text-3xl font-bold mt-1 tracking-tight text-[var(--accent-primary)] transition-colors duration-1000`}>{value}</h3>
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
      />
      <StatCard 
        icon={Clock} 
        label="Hours Played" 
        value={totalHours.toLocaleString()} 
      />
      <StatCard 
        icon={Trophy} 
        label="Completed" 
        value={completedGames.toLocaleString()} 
      />
      <StatCard 
        icon={Hash} 
        label="Fav Genre" 
        value={favoriteGenre} 
      />
      <StatCard 
        icon={Calendar} 
        label="Years Gaming" 
        value={`${yearsGaming}+`} 
      />
      
      {/* Platforms Card */}
      <div className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-[var(--accent-primary)]/50 hover:bg-white/10">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        
        <div className="relative flex flex-col gap-3 h-full justify-center">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-[var(--accent-primary)] transition-colors duration-1000">
              <Layers size={24} />
            </div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Platforms</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {platforms.map((platform) => (
              <span 
                key={platform}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[var(--accent-primary)]/10 border border-[var(--border-accent)] text-[var(--accent-primary)] transition-all duration-1000"
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
