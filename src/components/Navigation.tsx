import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { OrderModal } from './OrderModal';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-900 shadow-lg' 
        : 'bg-red-900'
    }`}>
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-24 xl:h-20 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Elegant Lotus SVG Icon */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 100 100" 
              className="flex-shrink-0 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12 logo-glow"
            >
              <defs>
                <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%" className="transition-all duration-500">
                  <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                  <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Lotus Petals */}
              <g fill="url(#lotusGradient)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" filter="url(#glow)" className="transition-all duration-500 group-hover:drop-shadow-lg">
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
              <circle cx="50" cy="50" r="4" fill="rgba(255, 255, 255, 0.9)" className="transition-all duration-500 group-hover:r-6" />
            </svg>
            
            <div className="text-logo-container">
              <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide leading-tight text-yellow-300 group-hover:text-yellow-100 transition-all duration-500 ease-out group-hover:scale-105 group-hover:tracking-wider logo-text-glow">
                Azaad Indian Cuisine
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-light italic tracking-wider leading-none mt-0.5 text-yellow-300 group-hover:text-yellow-100 transition-all duration-500 ease-out group-hover:scale-105 group-hover:tracking-widest logo-subtitle-glow">
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
                className={`relative px-4 py-2 text-white font-medium text-sm lg:text-base tracking-wide transition-all duration-300 rounded-lg ${
                  location.pathname === link.path 
                    ? 'text-yellow-300 bg-white/10' 
                    : 'hover:text-yellow-300 hover:bg-white/5'
                }`}
              >
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 rounded-full ${
                  location.pathname === link.path 
                    ? 'w-3/4 -translate-x-1/2' 
                    : 'w-0 hover:w-3/4 hover:-translate-x-1/2'
                }`}></span>
                {link.label}
              </Link>
            ))}
            
            {/* Enhanced Order Now Button */}
            <div className="ml-4 flex items-center space-x-3">
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-2.5 rounded-full font-bold text-sm lg:text-base hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>Order Now</span>
              </button>
              
              <a 
                href="https://maps.app.goo.gl/jYHkSCiCiqm9XhKR7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-bold text-sm lg:text-base hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <MapPin size={16} />
                <span>Location</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Animated hamburger/close icon */}
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-red-900 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-red-900">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 font-medium text-base tracking-wide rounded-lg transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-yellow-300 bg-white/20' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/15'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
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
            <div className="pt-3 pb-2 space-y-3">
              <button
                onClick={() => {
                  setIsOrderModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-3 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>Order Now</span>
                </div>
              </button>
              
              <a
                href="https://maps.app.goo.gl/jYHkSCiCiqm9XhKR7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={18} />
                  <span>Location</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};