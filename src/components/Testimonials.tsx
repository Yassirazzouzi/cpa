
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gaming-dark/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-4">
              Client about <span className="text-gaming-primary">our work</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Don't just take our word for it - hear from game developers who've transformed their marketing.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="ghost" className="rounded-full p-2 h-10 w-10 border border-gray-300">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button variant="ghost" className="rounded-full p-2 h-10 w-10 border border-gray-300">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/3 relative">
            <div className="bg-white dark:bg-gaming-dark/60 p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Alex Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gaming-accent fill-gaming-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl mb-6">
                    "We explored the best mobile game marketing strategies with GameCPA and saw a 45% increase in player acquisition without the usual marketing stress. Truly a trip of a lifetime!"
                  </blockquote>
                  
                  <div>
                    <div className="font-bold">Alex Johnson</div>
                    <div className="text-sm text-gray-500">Marketing Director, Epic Games Studio</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between text-sm">
                <div className="uppercase opacity-70">Previous</div>
                <div className="uppercase opacity-70">Present</div>
                <div>01</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-white dark:bg-gaming-dark/60 p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">
                  We take care of <span className="text-gaming-primary">all the details</span>
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  From audience targeting to campaign optimization, we handle everything to ensure your game gets the players it deserves.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm uppercase opacity-70">First • Present</div>
                  <Button variant="ghost" className="rounded-full p-2 h-10 w-10 border border-gray-300">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="w-full h-60 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80" 
                    alt="Gaming marketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-white dark:bg-gaming-dark/80 p-4 rounded-xl absolute -bottom-6 right-6 shadow-lg max-w-xs">
                  <p className="text-sm">
                    Market with peace of mind knowing we're always here to optimize your campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
