import HeroSection from "@/components/profile/HeroSection";

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
      
      <div className="max-w-4xl mx-auto py-12 text-center text-zinc-500">
        <p className="text-xl">Additional profile content will go here.</p>
      </div>
    </main>
  );
}
