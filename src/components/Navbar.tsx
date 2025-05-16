
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gaming-primary py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GamepadIcon />
          <span className="text-xl font-bold text-white">
            <span className="text-white">Game</span>
            <span className="text-white">CPA</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
          <div className="w-full relative">
            <Input 
              type="text" 
              placeholder="Search for games..." 
              className="w-full bg-white pl-10 pr-4 py-2 rounded-full border-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#most-downloaded" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Most Downloaded
          </a>
          <a href="#all-games" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            All Games
          </a>
          
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gaming-dark p-4 shadow-md">
          <div className="mb-4 relative">
            <Input 
              type="text" 
              placeholder="Search for games..." 
              className="w-full bg-white pl-10 pr-4 py-2 rounded-full border-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <nav className="flex flex-col space-y-4">
            <a 
              href="#most-downloaded" 
              className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Most Downloaded
            </a>
            <a 
              href="#all-games" 
              className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Games
            </a>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="rounded-full h-8 w-8 p-0 border-white/20 text-white">
                EN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
