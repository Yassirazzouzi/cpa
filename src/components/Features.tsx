
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gaming-dark/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 text-xs bg-black text-white dark:bg-white dark:text-black rounded-full mb-4">
            Our Value
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Every journey is <span className="text-gaming-primary">unique</span>
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Our specialized CPA strategies are tailored to each game's unique audience and metrics.
            </p>
            <Button variant="ghost" className="rounded-full p-2 h-10 w-10 border border-gray-300">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 bg-gaming-light/10 dark:bg-gaming-dark/60 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Targeted Traffic",
                  description: "Reach gamers who are genuinely interested in your game"
                },
                {
                  title: "Pay Per Action",
                  description: "Only pay when users complete desired actions"
                },
                {
                  title: "Rapid Scaling",
                  description: "Quickly scale your user acquisition efforts"
                },
                {
                  title: "Gaming Focused",
                  description: "Specialized strategies designed for game publishers"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white/50 dark:bg-gaming-dark/50 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" 
              alt="Gaming" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Game Fest</h3>
                <p className="text-white/70 text-sm">October 14, Boston</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center">
            <div className="text-6xl md:text-8xl font-bold gradient-text">81%</div>
          </div>
          
          <div className="col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300">From Concept To Completion</p>
                <h3 className="text-2xl font-bold mt-2">Success rate of our gaming campaigns</h3>
              </div>
              <Button variant="ghost" className="rounded-full p-2 h-10 w-10 border border-gray-300">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
