import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);
  
  // Mobile collapsible sections state
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    links: false,
    contact: false,
    hours: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Footer is now visible
            if (!isFooterVisible && !showSparkles) {
              // Trigger animation only if footer wasn't visible before and animation isn't running
              setIsFooterVisible(true);
              setShowSparkles(true);
              setAnimationKey(prev => prev + 1);
              
              // Generate sparkles with mobile-optimized count
              const sparkleCount = 22;
              const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
                id: i,
                x: (i * (100 / sparkleCount) + Math.random() * 6) % 100,
                delay: Math.random() * 2.5,
                duration: 3.5 + Math.random() * 1.5
              }));
              
              setSparkles(newSparkles);
              
              // Clean up after animation completes
              const cleanupTime = 7500;
              setTimeout(() => {
                setShowSparkles(false);
                setSparkles([]);
              }, cleanupTime);
            }
          } else {
            // Footer is no longer visible - reset for next visit
            if (isFooterVisible) {
              setIsFooterVisible(false);
              setShowSparkles(false);
              setSparkles([]);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [isFooterVisible, showSparkles]);

  return (
    <footer ref={footerRef} className="bg-red-900 text-white relative overflow-hidden">
      {/* Sparkles Animation */}
      {showSparkles && (
        <div key={animationKey} className="absolute inset-0 pointer-events-none">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute animate-sparkle-fall pointer-events-none"
              style={{
                left: `${sparkle.x}%`,
                top: '-20px',
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration + 0.5}s`
              }}
            >
              {/* Main sparkle */}
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full animate-sparkle-twinkle"></div>
                {/* Sparkle rays */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-sparkle-rotate"></div>
                  <div className="absolute w-0.5 h-6 bg-gradient-to-b from-transparent via-yellow-300 to-transparent animate-sparkle-rotate-reverse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 100 100" 
                className="flex-shrink-0"
              >
                <defs>
                  <linearGradient id="footerLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                    <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.95" />
                    <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
                
                <g fill="url(#footerLotusGradient)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8">
                  <path d="M50 20 C44 32, 44 44, 50 58 C56 44, 56 32, 50 20 Z" />
                  <path d="M32 32 C26 38, 28 50, 38 58 C44 52, 44 40, 32 32 Z" />
                  <path d="M20 48 C14 52, 16 64, 28 68 C34 62, 32 52, 20 48 Z" />
                  <path d="M68 32 C74 38, 72 50, 62 58 C56 52, 56 40, 68 32 Z" />
                  <path d="M80 48 C86 52, 84 64, 72 68 C66 62, 68 52, 80 48 Z" />
                  <path d="M38 62 C32 68, 34 78, 46 80 C50 74, 48 64, 38 62 Z" />
                  <path d="M62 62 C68 68, 66 78, 54 80 C50 74, 52 64, 62 62 Z" />
                </g>
                
                <circle cx="50" cy="50" r="4" fill="rgba(255, 255, 255, 0.9)" />
              </svg>
              <div>
                <div className="elegant-header text-xl font-bold text-yellow-300 leading-tight">
                  Azaad Indian Cuisine
                </div>
                <div className="refined-subheader text-sm text-yellow-300 italic mt-1">
                  Discover the Taste of India
                </div>
              </div>
            </div>
            <p className="premium-body text-gray-300 mb-6 leading-relaxed max-w-md">
              Experience the authentic taste of Punjab with our traditional recipes 
              passed down through generations. Every dish is prepared with love and 
              the finest spices.
            </p>
            <div className="flex items-center space-x-6">
              <a 
               href="https://www.facebook.com/people/Azaad-Indian-cuisine/61578610806090/"
               target="_blank"
               rel="noopener noreferrer"
                className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} className="fill-current" />
                <span className="premium-body">Facebook</span>
              </a>
              <a 
               href="https://www.instagram.com/azaadindiancuisine/"
               target="_blank"
               href="https://www.instagram.com/azaadindiancuisine/"
               target="_blank"
               rel="noopener noreferrer"
                className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
                <span className="premium-body">Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110"
                aria-label="Review us on Yelp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M12.2 2.4c-.5-.3-1.1-.3-1.6 0L2.4 6.9c-.5.3-.8.8-.8 1.4v7.4c0 .6.3 1.1.8 1.4l8.2 4.5c.5.3 1.1.3 1.6 0l8.2-4.5c.5-.3.8-.8.8-1.4V8.3c0-.6-.3-1.1-.8-1.4L12.2 2.4zM12 4.6l6.9 3.8v7.2L12 19.4l-6.9-3.8V8.4L12 4.6z"/>
                  <path d="M12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
                </svg>
                <span className="premium-body">Yelp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="refined-subheader font-semibold text-lg mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Home</Link></li>
              <li><Link to="/menu" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Menu</Link></li>
              <li><Link to="/gallery" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/about" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Visit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="refined-subheader font-semibold text-lg mb-6 text-yellow-300">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:+19512998307" className="premium-body hover:text-yellow-200 transition-colors duration-300">(951) 299-8307</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="premium-body">info@azaadcuisine.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} />
                <span className="premium-body leading-relaxed">4290 Riverwalk Pkwy Ste 306<br />Riverside, CA 92505</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} />
                <div>
                  <div className="premium-body">Sunday - Saturday</div>
                  <div className="premium-body text-sm text-gray-400 mt-1">Lunch: 11:00 AM - 3:30 PM</div>
                  <div className="premium-body text-sm text-gray-400">Dinner: 4:30 PM - 9:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Logo and Essential Info */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 100 100" 
                className="flex-shrink-0"
              >
                <defs>
                  <linearGradient id="mobileLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                    <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.95" />
                    <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
                
                <g fill="url(#mobileLotusGradient)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8">
                  <path d="M50 20 C44 32, 44 44, 50 58 C56 44, 56 32, 50 20 Z" />
                  <path d="M32 32 C26 38, 28 50, 38 58 C44 52, 44 40, 32 32 Z" />
                  <path d="M20 48 C14 52, 16 64, 28 68 C34 62, 32 52, 20 48 Z" />
                  <path d="M68 32 C74 38, 72 50, 62 58 C56 52, 56 40, 68 32 Z" />
                  <path d="M80 48 C86 52, 84 64, 72 68 C66 62, 68 52, 80 48 Z" />
                  <path d="M38 62 C32 68, 34 78, 46 80 C50 74, 48 64, 38 62 Z" />
                  <path d="M62 62 C68 68, 66 78, 54 80 C50 74, 52 64, 62 62 Z" />
                </g>
                
                <circle cx="50" cy="50" r="4" fill="rgba(255, 255, 255, 0.9)" />
              </svg>
              <div>
                <div className="elegant-header text-lg font-bold text-yellow-300 leading-tight">
                  Azaad Indian Cuisine
                </div>
                <div className="refined-subheader text-xs text-yellow-300 italic">
                  Discover the Taste of India
                </div>
              </div>
            </div>
          </div>

          {/* Essential Actions */}
          <div className="flex flex-col space-y-3">
            <a 
              href="tel:+19512998307"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              <Phone size={18} />
              <span className="premium-body">(951) 299-8307</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/jYHkSCiCiqm9XhKR7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              <MapPin size={18} />
              <span className="premium-body">Location</span>
            </a>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-4">
            {/* Quick Links */}
            <div className="border-b border-red-800 pb-4">
              <button
                onClick={() => toggleSection('links')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="refined-subheader font-semibold text-base text-yellow-300">Quick Links</h3>
                {expandedSections.links ? (
                  <ChevronUp size={20} className="text-yellow-300" />
                ) : (
                  <ChevronDown size={20} className="text-yellow-300" />
                )}
              </button>
              {expandedSections.links && (
                <div className="mt-3 space-y-2">
                  <Link to="/" className="block premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Home</Link>
                  <Link to="/menu" className="block premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Menu</Link>
                  <Link to="/gallery" className="block premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Gallery</Link>
                  <Link to="/about" className="block premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">About Us</Link>
                  <Link to="/contact" className="block premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300">Visit</Link>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="border-b border-red-800 pb-4">
              <button
                onClick={() => toggleSection('contact')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="refined-subheader font-semibold text-base text-yellow-300">Contact Info</h3>
                {expandedSections.contact ? (
                  <ChevronUp size={20} className="text-yellow-300" />
                ) : (
                  <ChevronDown size={20} className="text-yellow-300" />
                )}
              </button>
              {expandedSections.contact && (
                <div className="mt-3 space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} />
                    <span className="premium-body text-sm">info@azaadcuisine.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} />
                    <span className="premium-body text-sm leading-relaxed">4290 Riverwalk Pkwy Ste 306<br />Riverside, CA 92505</span>
                  </div>
                </div>
              )}
            </div>

            {/* Hours */}
            <div>
              <button
                onClick={() => toggleSection('hours')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="refined-subheader font-semibold text-base text-yellow-300">Hours</h3>
                {expandedSections.hours ? (
                  <ChevronUp size={20} className="text-yellow-300" />
                ) : (
                  <ChevronDown size={20} className="text-yellow-300" />
                )}
              </button>
              {expandedSections.hours && (
                <div className="mt-3 text-gray-300">
                  <div className="premium-body text-sm">Sunday - Saturday</div>
                  <div className="premium-body text-xs text-gray-400 mt-1">Lunch: 11:00 AM - 3:30 PM</div>
                  <div className="premium-body text-xs text-gray-400">Dinner: 4:30 PM - 9:30 PM</div>
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a 
             href="https://www.facebook.com/people/Azaad-Indian-cuisine/61578610806090/"
             target="_blank"
             rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110 p-2"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={24} className="fill-current" />
              <span className="premium-body text-xs">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/azaadindiancuisine/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110 p-2"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
              <span className="premium-body text-xs">Instagram</span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center space-y-1 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-110 p-2"
              aria-label="Review us on Yelp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M12.2 2.4c-.5-.3-1.1-.3-1.6 0L2.4 6.9c-.5.3-.8.8-.8 1.4v7.4c0 .6.3 1.1.8 1.4l8.2 4.5c.5.3 1.1.3 1.6 0l8.2-4.5c.5-.3.8-.8.8-1.4V8.3c0-.6-.3-1.1-.8-1.4L12.2 2.4zM12 4.6l6.9 3.8v7.2L12 19.4l-6.9-3.8V8.4L12 4.6z"/>
                <path d="M12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
              </svg>
              <span className="premium-body text-xs">Yelp</span>
            </a>
          </div>
        </div>
        <div className="border-t border-red-800 mt-8 pt-6 text-center">
          <p className="premium-body text-xs text-gray-500">
            &copy; 2025 Backhouse BTL UX Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};