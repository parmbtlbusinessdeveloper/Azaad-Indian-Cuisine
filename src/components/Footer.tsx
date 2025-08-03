import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

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
              const isMobile = window.innerWidth < 768;
              const sparkleCount = isMobile ? 15 : 22;
              const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
                id: i,
                x: (i * (100 / sparkleCount) + Math.random() * 6) % 100,
                delay: Math.random() * (isMobile ? 2 : 2.5),
                duration: isMobile ? 3 + Math.random() * 1 : 3.5 + Math.random() * 1.5
              }));
              
              setSparkles(newSparkles);
              
              // Clean up after animation completes
              const cleanupTime = isMobile ? 5000 : 6500;
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
        threshold: window.innerWidth < 768 ? 0.2 : 0.3,
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
              className="absolute animate-sparkle-fall"
              style={{
                left: `${sparkle.x}%`,
                top: '-20px',
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration}s`
              }}
            >
              {/* Main sparkle */}
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full animate-sparkle-twinkle shadow-lg"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.imgur.com/13b6Lyj.png" 
                alt="Azaad Indian Cuisine" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="premium-body text-gray-300 mb-6 leading-relaxed text-base md:text-lg max-w-md">
              Experience the authentic taste of Punjab with our traditional recipes 
              passed down through generations. Every dish is prepared with love and 
              the finest spices.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="premium-body text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-medium">Facebook</a>
              <a href="#" className="premium-body text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-medium">Instagram</a>
              <a href="#" className="premium-body text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-medium">Yelp</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="refined-subheader font-semibold text-lg md:text-xl mb-4 md:mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300 font-medium">Home</Link></li>
              <li><Link to="/menu" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300 font-medium">Menu</Link></li>
              <li><Link to="/gallery" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300 font-medium">Gallery</Link></li>
              <li><Link to="/about" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300 font-medium">About Us</Link></li>
              <li><Link to="/contact" className="premium-body text-gray-300 hover:text-yellow-300 transition-colors duration-300 font-medium">Visit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="refined-subheader font-semibold text-lg md:text-xl mb-4 md:mb-6 text-yellow-300">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:+19512998307" className="premium-body hover:text-yellow-200 transition-colors duration-300 font-medium">(951) 299-8307</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="premium-body font-medium">info@azaadcuisine.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} />
                <span className="premium-body font-medium leading-relaxed">4290 Riverwalk Pkwy Ste 306<br />Riverside, CA 92505</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} />
                <div>
                  <div className="premium-body font-medium">Sunday - Saturday</div>
                  <div className="premium-body text-sm text-gray-400 mt-1">Lunch: 11:00 AM - 3:30 PM</div>
                  <div className="premium-body text-sm text-gray-400">Dinner: 4:30 PM - 9:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="premium-body text-xs md:text-sm text-gray-500">
            &copy; 2025 Backhouse BTL UX Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};