import React from 'react';

interface GamerPersonalityProps {
  gamerType: string;
  description: string;
}

const GamerPersonality: React.FC<GamerPersonalityProps> = ({ gamerType, description }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-primary)]/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)] bg-[var(--bg-surface)] border border-[var(--border-accent)] rounded-full backdrop-blur-sm animate-pulse transition-all duration-1000">
          Gamer DNA
        </div>

        <div className="relative inline-block group mb-8">
          {/* Animated Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--accent-primary)]/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />
          
          <div className="relative px-8 py-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Corner Decorative Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-primary)]/50 rounded-tl-lg transition-colors duration-1000" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent-primary)]/50 rounded-tr-lg transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent-primary)]/50 rounded-bl-lg transition-colors duration-1000" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-primary)]/50 rounded-br-lg transition-colors duration-1000" />

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[var(--accent-primary)] mb-6 drop-shadow-[0_0_15px_var(--accent-glow)] transition-all duration-1000">
              {gamerType}
            </h2>
            
            <p className="max-w-xl mx-auto text-lg text-gray-400 leading-relaxed font-medium italic">
              "{description}"
            </p>
          </div>
        </div>

        {/* Decorative scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    </section>
  );
};

export default GamerPersonality;
