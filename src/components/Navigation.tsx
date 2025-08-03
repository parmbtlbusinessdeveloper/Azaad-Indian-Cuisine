import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Visit' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-gradient-to-r from-red-900/95 via-red-800/95 to-red-900/95 shadow-2xl backdrop-blur-md border-b border-yellow-400/20' 
        : 'bg-gradient-to-r from-red-900/85 via-red-800/85 to-red-900/85 backdrop-blur-sm'
    }`}>
      {/* Subtle top accent line */}
      <div className={`h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-60'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105">
            <img 
              src="https://i.imgur.com/13b6Lyj.png" 
              alt="Azaad Indian Cuisine" 
              className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-white font-medium tracking-wide transition-all duration-300 group ${
                  location.pathname === link.path 
                    ? 'text-yellow-300' 
                    : 'hover:text-yellow-200'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Active page indicator */}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-lg opacity-0 transition-all duration-300 ${
                  location.pathname !== link.path ? 'group-hover:opacity-100 group-hover:scale-105' : ''
                }`}></div>
                
                {/* Hover underline */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full transition-all duration-300 ${
                  location.pathname !== link.path ? 'group-hover:w-full' : ''
                }`}></div>
              </Link>
            ))}
            
            {/* Order Now Button */}
            <div className="ml-4">
              <a
                href="https://www.toasttab.com/azaad-indian-cuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-2.5 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 group"
              >
                <span className="relative z-10">Order Now</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                <X size={24} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-gradient-to-b from-red-900/98 to-red-800/98 backdrop-blur-md border-t border-yellow-400/20 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative block px-4 py-3 text-white font-medium tracking-wide rounded-lg transition-all duration-200 group ${
                    location.pathname === link.path 
                      ? 'text-yellow-300 bg-gradient-to-r from-yellow-400/10 to-orange-400/10' 
                      : 'hover:text-yellow-200 hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {location.pathname === link.path && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-r-full"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile Order Button */}
              <div className="pt-4 border-t border-yellow-400/20">
                <a
                  href="https://www.toasttab.com/azaad-indian-cuisine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-4 py-3 rounded-full font-bold text-center tracking-wide transition-all duration-200 hover:from-yellow-400 hover:to-orange-400 hover:shadow-lg"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className={`h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 transition-all duration-500 ${
        isScrolled ? 'opacity-100 shadow-lg shadow-yellow-500/20' : 'opacity-80'
      }`}></div>
    </nav>
  );
};