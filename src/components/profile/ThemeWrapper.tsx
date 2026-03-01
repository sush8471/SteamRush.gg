"use client";

import React, { ReactNode } from 'react';

interface ThemeWrapperProps {
  theme: string;
  children: ReactNode;
}

/**
 * ThemeWrapper component to apply theme-specific styles based on a theme prop.
 * Themes and their accent colors:
 * - cyberpunk: cyan/teal accents, Orbitron-style feel
 * - gothic: red accents, dark moody feel
 * - retro: green accents, pixel/classic feel
 * - neon: pink/magenta accents, vibrant glow feel
 * - minimal: white/gray accents, clean modern feel
 */
export default function ThemeWrapper({ theme, children }: ThemeWrapperProps) {
  const getThemeVars = (themeName: string) => {
    switch (themeName.toLowerCase()) {
      case 'cyberpunk':
        return {
          '--accent-primary': '#22d3ee', // cyan-400
          '--accent-secondary': '#0ea5e9', // sky-500
          '--accent-glow': 'rgba(34, 211, 238, 0.5)',
          '--bg-surface': 'rgba(8, 47, 73, 0.3)', // sky-950/30
          '--border-accent': 'rgba(34, 211, 238, 0.2)',
          '--text-accent': '#22d3ee',
        };
      case 'gothic':
        return {
          '--accent-primary': '#ef4444', // red-500
          '--accent-secondary': '#7f1d1d', // red-950
          '--accent-glow': 'rgba(239, 68, 68, 0.3)',
          '--bg-surface': 'rgba(69, 10, 10, 0.2)', // red-950/20
          '--border-accent': 'rgba(239, 68, 68, 0.2)',
          '--text-accent': '#f87171', // red-400
        };
      case 'retro':
        return {
          '--accent-primary': '#22c55e', // green-500
          '--accent-secondary': '#166534', // green-800
          '--accent-glow': 'rgba(34, 197, 94, 0.4)',
          '--bg-surface': 'rgba(20, 83, 45, 0.1)', // green-950/10
          '--border-accent': 'rgba(34, 197, 94, 0.2)',
          '--text-accent': '#4ade80', // green-400
        };
      case 'neon':
        return {
          '--accent-primary': '#f472b6', // pink-400
          '--accent-secondary': '#a21caf', // fuchsia-700
          '--accent-glow': 'rgba(244, 114, 182, 0.6)',
          '--bg-surface': 'rgba(74, 4, 78, 0.2)', // fuchsia-950/20
          '--border-accent': 'rgba(244, 114, 182, 0.2)',
          '--text-accent': '#fb7185', // rose-400
        };
      case 'minimal':
      default:
        return {
          '--accent-primary': '#ffffff', // white
          '--accent-secondary': '#52525b', // zinc-600
          '--accent-glow': 'rgba(255, 255, 255, 0.15)',
          '--bg-surface': 'rgba(39, 39, 42, 0.4)', // zinc-800/40
          '--border-accent': 'rgba(255, 255, 255, 0.1)',
          '--text-accent': '#ffffff',
        };
    }
  };

  return (
    <div 
      className={`theme-root transition-all duration-500 min-h-screen bg-black text-white`} 
      style={getThemeVars(theme) as React.CSSProperties}
      data-theme={theme}
    >
      <style jsx global>{`
        /* Support for using these variables in Tailwind */
        .bg-accent { background-color: var(--accent-primary); }
        .text-accent { color: var(--accent-primary); }
        .border-accent { border-color: var(--accent-primary); }
        .shadow-accent { box-shadow: 0 0 20px var(--accent-glow); }
        
        /* Specific theme feel adjustments */
        [data-theme='cyberpunk'] {
          letter-spacing: 0.05em;
        }
        [data-theme='retro'] {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        [data-theme='gothic'] {
          text-shadow: 0 0 10px var(--accent-glow);
        }
      `}</style>
      {children}
    </div>
  );
}
