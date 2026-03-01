import Image from "next/image";

interface HeroSectionProps {
  displayName: string;
  tagline: string;
  avatarUrl: string;
  coverImageUrl: string;
  theme: string;
}

export default function HeroSection({
  displayName,
  tagline,
  avatarUrl,
  coverImageUrl,
  theme,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-white/10 group">
      {/* Animated Gradient Border Overlay */}
      <div className="absolute inset-0 z-0 p-[1px] rounded-xl overflow-hidden">
        <div className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_40%,var(--accent-primary)_50%,#000_60%,#000_100%)] opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="absolute inset-[1px] z-10 bg-black rounded-[calc(0.75rem-1px)] overflow-hidden">
        {/* Cover Image */}
        <div className="relative w-full h-full">
          <Image
            src={coverImageUrl}
            alt="Cover"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-12">
          {/* Avatar Container */}
          <div className="relative mb-6">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/30 to-[var(--accent-secondary)]/10 blur-md animate-pulse" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[var(--accent-primary)]/20 overflow-hidden shadow-[0_0_20px_var(--accent-glow)]">
              <Image
                src={avatarUrl}
                alt={displayName}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-[0_2px_10px_var(--accent-glow)]">
              {displayName}
            </h1>
            <p className="text-gray-400 italic text-lg md:text-xl font-medium tracking-wide">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
