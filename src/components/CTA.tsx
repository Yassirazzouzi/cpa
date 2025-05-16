
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Create a custom GamepadIcon component to avoid the naming conflict
const GamepadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-gaming-primary"
  >
    <line x1="6" y1="12" x2="10" y2="12"></line>
    <line x1="8" y1="10" x2="8" y2="14"></line>
    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
    <circle cx="14" cy="12" r="2"></circle>
    <circle cx="18" cy="8" r="1"></circle>
    <circle cx="18" cy="12" r="1"></circle>
    <circle cx="18" cy="16" r="1"></circle>
  </svg>
);

const CTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gaming-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want to <span className="text-gaming-primary">explore</span> more?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Join our newsletter to get the latest updates on game marketing trends and opportunities.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={16} />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 h-12 bg-white/10 border-white/20 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="h-12 bg-white text-gaming-dark hover:bg-white/90 px-6 rounded-lg">
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-64 h-64 relative">
                <div className="w-full h-full rounded-full bg-gaming-primary/20 absolute animate-pulse-glow"></div>
                <img
                  src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=400&q=80"
                  alt="Gaming community"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-2">
              <GamepadIcon />
              <span className="text-xl font-bold">
                <span className="text-gaming-primary">Game</span>
                <span className="text-gaming-secondary">CPA</span>
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <div className="mb-2">
                <a href="mailto:contact@gamecpa.com" className="text-white hover:text-gaming-primary transition-colors">
                  contact@gamecpa.com
                </a>
              </div>
              <div className="text-sm text-gray-400">
                © 2024 GameCPA. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
