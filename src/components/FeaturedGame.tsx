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
    // Vérifier si la fonction _Yg existe dans le contexte global
    if (typeof window !== 'undefined') {
      if (typeof (window as any)._xS === 'function') {
        try {
          // Appeler directement la fonction du locker
          (window as any)._xS();
        } catch (error) {
          console.error('Erreur lors de l\'ouverture du locker:', error);
        }
      } else {
        console.error('Fonction CPA Builder locker non trouvée. Assurez-vous que le script est correctement chargé.');
        // Fallback - afficher un message à l'utilisateur ou rediriger vers une page par défaut
        alert('Le système de téléchargement n\'est pas disponible pour le moment. Veuillez réessayer plus tard.');
      }
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