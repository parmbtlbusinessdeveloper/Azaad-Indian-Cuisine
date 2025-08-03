import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

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
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49zm-4.381 1.418c-1.891 0-3.428 1.537-3.428 3.428s1.537 3.428 3.428 3.428 3.428-1.537 3.428-3.428-1.537-3.428-3.428-3.428z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Find us on Yelp"
              >
                <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.271 17.814c1.217 0 2.203-.986 2.203-2.203 0-1.217-.986-2.203-2.203-2.203-1.217 0-2.203.986-2.203 2.203 0 1.217.986 2.203 2.203 2.203zm6.068-5.407c-.271-.542-.813-.949-1.491-1.085l-3.389-.678c-.407-.068-.678-.407-.678-.814 0-.407.271-.746.678-.814l3.389-.678c.678-.136 1.22-.542 1.491-1.085.271-.542.203-1.22-.203-1.695l-2.034-2.373c-.271-.339-.678-.542-1.085-.542-.407 0-.814.203-1.085.542l-2.034 2.373c-.407.475-.475 1.153-.203 1.695.271.542.813.949 1.491 1.085l3.389.678c.407.068.678.407.678.814 0 .407-.271.746-.678.814l-3.389.678c-.678.136-1.22.542-1.491 1.085-.271.542-.203 1.22.203 1.695l2.034 2.373c.271.339.678.542 1.085.542.407 0 .814-.203 1.085-.542l2.034-2.373c.407-.475.475-1.153.203-1.695z"/>
                </svg>
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
              href="#" 
              className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49zm-4.381 1.418c-1.891 0-3.428 1.537-3.428 3.428s1.537 3.428 3.428 3.428 3.428-1.537 3.428-3.428-1.537-3.428-3.428-3.428z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-yellow-300 hover:bg-yellow-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
              aria-label="Find us on Yelp"
            >
              <svg className="w-5 h-5 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.271 17.814c1.217 0 2.203-.986 2.203-2.203 0-1.217-.986-2.203-2.203-2.203-1.217 0-2.203.986-2.203 2.203 0 1.217.986 2.203 2.203 2.203zm6.068-5.407c-.271-.542-.813-.949-1.491-1.085l-3.389-.678c-.407-.068-.678-.407-.678-.814 0-.407.271-.746.678-.814l3.389-.678c.678-.136 1.22-.542 1.491-1.085.271-.542.203-1.22-.203-1.695l-2.034-2.373c-.271-.339-.678-.542-1.085-.542-.407 0-.814.203-1.085.542l-2.034 2.373c-.407.475-.475 1.153-.203 1.695.271.542.813.949 1.491 1.085l3.389.678c.407.068.678.407.678.814 0 .407-.271.746-.678.814l-3.389.678c-.678.136-1.22.542-1.491 1.085-.271.542-.203 1.22.203 1.695l2.034 2.373c.271.339.678.542 1.085.542.407 0 .814-.203 1.085-.542l2.034-2.373c.407-.475.475-1.153.203-1.695z"/>
              </svg>
            </a>
          </div>
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