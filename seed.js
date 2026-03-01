
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function seed() {
  const res = await fetch(`${supabaseUrl}/rest/v1/clients`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      username: 'pro-gamer',
      display_name: 'Pro Gamer',
      tagline: 'Elite Gamer | Streamer | Pro Competitor',
      avatar_url: 'https://images.unsplash.com/photo-1566333340332-94441ba497a1?q=80&w=2070&auto=format&fit=crop',
      cover_image_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
      theme: 'cyberpunk',
      is_published: true
    })
  });

  const clients = await res.json();
  if (!clients.length) {
    console.error('Failed to create client', clients);
    return;
  }
  const clientId = clients[0].id;

  // Insert Stats
  await fetch(`${supabaseUrl}/rest/v1/stats`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      total_games: 4,
      total_hours: 750,
      completed_games: 2,
      favorite_genre: 'FPS / RPG',
      years_gaming: 12,
      platforms: ['PC', 'PS5', 'Nintendo Switch']
    })
  });

  // Insert Games
  await fetch(`${supabaseUrl}/rest/v1/games`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        client_id: clientId,
        title: 'Elden Ring',
        cover_art_url: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop',
        hours_played: 245,
        platform: 'PC',
        completion_percent: 100,
        personal_rating: 10,
        mood_tag: 'grind',
        memory: 'The first time I defeated Malenia after 50+ attempts was pure euphoria.',
        is_favorite: true,
        sort_order: 0
      },
      {
        client_id: clientId,
        title: 'The Witcher 3: Wild Hunt',
        cover_art_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        hours_played: 320,
        platform: 'PS5',
        completion_percent: 95,
        personal_rating: 10,
        mood_tag: 'emotional',
        memory: 'Watching the sunrise in Kaer Morhen is a moment I\'ll never forget.',
        is_favorite: true,
        sort_order: 1
      }
    ])
  });

  // Insert Timeline
  await fetch(`${supabaseUrl}/rest/v1/timeline`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        client_id: clientId,
        year: 2012,
        title: 'The Beginning',
        description: 'Picked up a controller for the first time and started my journey in Skyrim.',
        event_type: 'milestone',
        sort_order: 0
      }
    ])
  });

  // Insert Hall of Fame
  await fetch(`${supabaseUrl}/rest/v1/hall_of_fame`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        client_id: clientId,
        title: 'God Slain',
        game: 'Elden Ring',
        difficulty: 'legendary',
        description: 'Defeated every main boss including all secret demigods in a single playthrough.'
      }
    ])
  });

  // Insert Personality
  await fetch(`${supabaseUrl}/rest/v1/personality`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      gamer_type: 'The Completionist',
      description: 'Driven by the allure of 100% trophies and hidden achievements, this gamer leaves no stone unturned.'
    })
  });

  console.log('Seed completed successfully');
}

seed();
