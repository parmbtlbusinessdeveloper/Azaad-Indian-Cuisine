import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-red-900/95 shadow-2xl backdrop-blur-md border-b border-yellow-400/20' 
        : 'bg-red-900/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
        
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Elegant Lotus SVG Icon */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 100 100" 
              className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            >
              <defs>
                <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                  <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                </linearGradient>
                <filter id="lotusGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Lotus Petals */}
              <g fill="url(#lotusGradient)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" filter="url(#lotusGlow)">
                {/* Center petal */}
                <path d="M50 20 C44 32, 44 44, 50 58 C56 44, 56 32, 50 20 Z" />
                
                {/* Left petals */}
                <path d="M32 32 C26 38, 28 50, 38 58 C44 52, 44 40, 32 32 Z" />
                <path d="M20 48 C14 52, 16 64, 28 68 C34 62, 32 52, 20 48 Z" />
                
                {/* Right petals */}
                <path d="M68 32 C74 38, 72 50, 62 58 C56 52, 56 40, 68 32 Z" />
                <path d="M80 48 C86 52, 84 64, 72 68 C66 62, 68 52, 80 48 Z" />
                
                {/* Bottom petals */}
                <path d="M38 62 C32 68, 34 78, 46 80 C50 74, 48 64, 38 62 Z" />
                <path d="M62 62 C68 68, 66 78, 54 80 C50 74, 52 64, 62 62 Z" />
              </g>
              
              {/* Center dot */}
              <circle cx="50" cy="50" r="4" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(255, 215, 0, 0.6)" strokeWidth="1" />
            </svg>
            
            <div className="text-logo-container elegant-fade-in transition-all duration-300">
              <div className="text-logo-main font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide leading-tight">
                Azaad Indian Cuisine
              </div>
              <div className="text-logo-sub text-xs sm:text-sm font-light italic tracking-wider leading-none mt-0.5 transition-colors duration-300 group-hover:text-yellow-200">
                Discover the Taste of India
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-white font-medium text-sm lg:text-base tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path 
                    ? 'text-yellow-300 bg-white/10' 
                    : 'hover:text-yellow-300 hover:bg-white/5'
                }`}
              >
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 rounded-full"></span>
                {link.label}
              </Link>
            ))}
            
            {/* Enhanced Order Now Button */}
            <a 
              href="https://www.toasttab.com/azaad-indian-cuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-2.5 rounded-full font-bold text-sm lg:text-base hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center space-x-2 border border-yellow-400/20"
            >
              <Phone size={16} />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              {/* Animated hamburger/close icon */}
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-red-900/98 backdrop-blur-md border-t border-yellow-400/20 shadow-2xl transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-white font-medium text-base tracking-wide rounded-lg transition-all duration-300 transform ${
                  location.pathname === link.path 
                    ? 'text-yellow-300 bg-white/15 translate-x-2' 
                    : 'hover:text-yellow-300 hover:bg-white/10 hover:translate-x-2'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {location.pathname === link.path && (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Mobile Order Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://www.toasttab.com/azaad-indian-cuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-4 rounded-lg font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>Order Now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-white hover:text-yellow-300 hover:bg-red-800 rounded-md transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-yellow-300 bg-red-800' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full mt-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-4 py-2 rounded-full font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-200">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Decorative Border */}
      <div className="relative">
        <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent blur-sm"></div>
      </div>
    </nav>
  );
};
      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></div>
    </nav>
  );
};