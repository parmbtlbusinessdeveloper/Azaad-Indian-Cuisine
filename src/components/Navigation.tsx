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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-900 shadow-lg backdrop-blur-sm' 
        : 'bg-red-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-red-900 font-bold text-lg">A</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-xl leading-tight">Azaad</div>
              <div className="text-xs text-yellow-300 font-medium">Indian Cuisine</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-yellow-300 transition-colors duration-200 font-medium ${
                  location.pathname === link.path ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 transform hover:scale-105">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-red-900 border-t border-red-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
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

      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></div>
    </nav>
  );
};