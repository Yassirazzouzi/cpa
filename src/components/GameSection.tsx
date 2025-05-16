
import React from 'react';
import GameCard from './GameCard';

interface Game {
  id: number;
  title: string;
  image: string;
  category?: string;
}

interface GameSectionProps {
  title: string;
  icon?: React.ReactNode;
  games: Game[];
  id?: string;
}

const GameSection = ({ title, icon, games, id }: GameSectionProps) => {
  return (
    <section id={id} className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-6">
          {icon && icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
          {games.map(game => (
            <GameCard 
              key={game.id}
              title={game.title}
              image={game.image}
              category={game.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
