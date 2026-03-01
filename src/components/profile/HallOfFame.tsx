import React from 'react';

interface Achievement {
  title: string;
  game: string;
  difficulty: 'legendary' | 'hardcore' | 'nightmare';
  description: string;
}

interface HallOfFameProps {
  achievements: Achievement[];
}

const HallOfFame: React.FC<HallOfFameProps> = ({ achievements }) => {
  const getDifficultyStyles = (difficulty: Achievement['difficulty']) => {
    switch (difficulty) {
      case 'legendary':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'hardcore':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'nightmare':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
          Hall of Fame <span className="inline-block animate-bounce">🏆</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group relative bg-black border border-yellow-500/20 rounded-xl p-6 transition-all duration-300 hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl">
               <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500/10 rotate-45 transform translate-x-4 -translate-y-4 border border-yellow-500/30"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 tracking-tight group-hover:text-yellow-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {achievement.game}
                  </p>
                </div>
                <span className={`px-3 py-1 text-[10px] uppercase font-black tracking-tighter border rounded-full ${getDifficultyStyles(achievement.difficulty)}`}>
                  {achievement.difficulty}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{achievement.description}"
              </p>

              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-yellow-500/30 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HallOfFame;
