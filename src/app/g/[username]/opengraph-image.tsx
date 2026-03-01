import { ImageResponse } from 'next/og';
import { supabase } from '@/lib/supabase';

export const runtime = 'edge';

export default async function Image({ params }: { params: { username: string } }) {
  const { username } = params;

  const { data: client } = await supabase
    .from('clients')
    .select('display_name, tagline, theme')
    .eq('username', username)
    .single();

  if (!client) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold' }}>SteamRush.gg</div>
          <div style={{ fontSize: 30, marginTop: 20 }}>Profile Not Found</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  const theme = (client.theme || 'cyberpunk').toLowerCase();
  
  const getAccentColor = (themeName: string) => {
    switch (themeName) {
      case 'cyberpunk': return '#22d3ee';
      case 'gothic': return '#ef4444';
      case 'retro': return '#22c55e';
      case 'neon': return '#f472b6';
      case 'minimal': return '#ffffff';
      default: return '#22d3ee';
    }
  };

  const accentColor = getAccentColor(theme);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'radial-gradient(circle at center, #111 0%, #000 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Accent Border */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: `2px solid ${accentColor}`,
            opacity: 0.3,
            borderRadius: '10px',
          }}
        />
        
        {/* Corner Accents */}
        <div style={{ position: 'absolute', top: 15, left: 15, width: 40, height: 4, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', top: 15, left: 15, width: 4, height: 40, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', top: 15, right: 15, width: 40, height: 4, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', top: 15, right: 15, width: 4, height: 40, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', bottom: 15, left: 15, width: 40, height: 4, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', bottom: 15, left: 15, width: 4, height: 40, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', bottom: 15, right: 15, width: 40, height: 4, backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', bottom: 15, right: 15, width: 4, height: 40, backgroundColor: accentColor }} />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              marginBottom: 10,
              color: '#fff',
              textShadow: `0 0 20px ${accentColor}40`,
              letterSpacing: '-0.02em',
            }}
          >
            {client.display_name}
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: '#9ca3af',
              fontStyle: 'italic',
              maxWidth: '800px',
            }}
          >
            {client.tagline}
          </div>
        </div>

        {/* Branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            display: 'flex',
            alignItems: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
          }}
        >
          <span style={{ color: '#fff' }}>STEAMRUSH.</span>
          <span style={{ color: accentColor }}>GG</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
