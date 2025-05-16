
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gaming-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gaming-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="mb-4 text-sm uppercase tracking-widest text-gaming-primary opacity-70">
              Game Marketing
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Explore the world of <span className="text-gaming-primary">gaming</span> with us
            </h1>
            
            <div className="mt-10 flex items-center space-x-6">
              <Button className="bg-white text-gaming-dark hover:bg-white/90 text-base px-8 py-6 h-14 rounded-full flex items-center gap-2">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6 h-14 rounded-full">
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 pl-0 md:pl-10 relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80" 
                alt="Gamers enjoying a gaming session" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl max-w-xs">
                <h3 className="text-xl font-bold mb-2">Explore our curated list of games to promote</h3>
                <p className="text-sm text-gray-200">Find the best games to market around the globe</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs uppercase opacity-70">Featured</div>
                  <Button variant="ghost" className="rounded-full p-2 h-8 w-8">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
