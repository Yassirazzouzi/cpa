
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameSection from '@/components/GameSection';
import FeaturedGame from '@/components/FeaturedGame';
import gta5 from '@/assets/gta5.jpg';
import pubg from '@/assets/pubg.jpg';
import freefire from '@/assets/freefire.jpg';
import fifa25 from '@/assets/fifa25.jpg';
import leagueoflegends from '@/assets/leagueoflegends.jpg';
import godofwar from '@/assets/godofwar.jpg';
import spiderman2 from '@/assets/spiderman2.jpg';
import eldenring from '@/assets/eldenring.jpg';
import thelastofus from '@/assets/thelastofus.jpg';
import horizonzerodawn from '@/assets/horizonzerodawn.jpg';
import reddeadredemption2 from '@/assets/reddeadredemption2.jpg';


const Index = () => {
  const mostDownloadedGames = [
    {
      id: 1,
      title: 'GTA 5 Mobile',
      image: gta5,
      category: 'Action'
    },
    {
      id: 2,
      title: 'PUBG Mobile Mod',
      image: pubg,
      category: 'Battle Royale'
    },
    {
      id: 3,
      title: 'Free Fire Mod',
      image: freefire,
      category: 'Battle Royale'
    },
    {
      id: 4,
      title: 'FIFA 25 Mobile',
      image: fifa25,
      category: 'Sports'
    },
  ];

  const allGames = [
    
    {
      id: 5,
      title: 'League of Legends Mobile',
      image: leagueoflegends,
      category: 'MOBA'
    },
    {
      id: 6,
      title: 'God of War Mobile',
      image: godofwar,
      category: 'Action Adventure'
    },
    {
      id: 7,
      title: 'Spider-Man 2 Mobile',
      image: spiderman2,
      category: 'Action'
    },
    {
      id: 8,
      title: 'Elden Ring Mobile',
      image: eldenring,
      category: 'RPG'
    },
    {
      id: 9,
      title: 'The Last of Us Mobile',
      image: thelastofus,
      category: 'Survival Horror'
    },
    {
      id: 10,
      title: 'Horizon Zero Dawn Mobile',
      image: horizonzerodawn,
      category: 'Action RPG'
    },
    {
      id: 11,
      title: 'Red Dead Redemption 2 Mobile',
      image: reddeadredemption2,
      category: 'Action Adventure'
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <FeaturedGame 
          title="Grand Theft Auto V Mobile"
          image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80"
          description="Experience the best-selling open world game on your mobile device with enhanced graphics and performance."
        />
        <GameSection 
          id="most-downloaded"
          title="Most Downloaded" 
          games={mostDownloadedGames} 
        />
        <GameSection 
          id="all-games"
          title="All Games" 
          games={allGames} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
