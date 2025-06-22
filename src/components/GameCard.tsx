import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  category?: string;
}

const GameCard = ({ title, image, category }: GameCardProps) => {
  // Function to handle the download button click
  const handleDownloadClick = () => {
    console.log("Bouton de téléchargement cliqué, tentative d'ouverture du CPA Locker");
    
    if (typeof window !== 'undefined' && typeof (window as any)._xS === 'function') {
      console.log("Fonction _Yg trouvée, ouverture du locker...");
      (window as any)._xS();
      console.log("Locker déclenché avec succès");
    } else {
      console.error('CPA Builder locker function not found');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg mb-2 aspect-square bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      {category && <p className="text-xs text-gray-500 mb-2">{category}</p>}
      <Button 
        className="w-full bg-gaming-primary text-white hover:bg-gaming-primary/90 rounded-md flex items-center justify-center gap-2"
        onClick={handleDownloadClick}
      >
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
};

export default GameCard;