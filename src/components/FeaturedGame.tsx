import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface FeaturedGameProps {
  title: string;
  image: string;
  description?: string;
}

const FeaturedGame = ({ title, image, description }: FeaturedGameProps) => {
  // Fonction améliorée pour gérer le clic sur le bouton de téléchargement
  const handleDownloadClick = () => {
    if (typeof window._Tr === 'function') {
      window._Tu();
    } else {
      console.error('CPA Locker not loaded.  Download unavailable.');
      // Optionally, display a user-friendly message:
      alert('The download system is currently unavailable. Please try again later.');
    }
  };

  return (
    <section className="py-4 my-6">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
            {description && (
              <p className="text-white/80 mb-4 max-w-md">{description}</p>
            )}
            <Button 
              className="w-fit bg-gaming-primary text-white hover:bg-gaming-primary/90 rounded-md flex items-center justify-center gap-2"
              onClick={handleDownloadClick}
            >
              <Download className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;