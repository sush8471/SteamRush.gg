"use client";

import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden animate-[fade-in_0.5s_ease-out_forwards]">
      {/* Background Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      
      {/* Loader Container */}
      <div className="relative z-10 flex flex-col items-center animate-[slide-up_0.8s_ease-out_forwards]">
        {/* Gaming-style Loader */}
        <div className="relative w-24 h-24 mb-8">
          {/* Inner Spinning Ring */}
          <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          
          {/* Outer Pulsing Ring */}
          <div className="absolute -inset-2 border-2 border-white/10 rounded-full animate-pulse" />
          
          {/* Center Logo/Icon (Subtle) */}
          <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
            <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45 animate-bounce shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </div>
        </div>

        {/* Text with Typing Effect */}
        <div className="flex flex-col items-center">
          <h2 className="text-white font-mono text-xl tracking-widest uppercase mb-2">
            Loading Profile{dots}
          </h2>
          <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-[loading-bar_2s_ease-in-out_infinite]" />
          </div>
          <p className="mt-4 text-white/40 text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
            Establishing Connection...
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
