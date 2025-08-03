import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [showSparkles, setShowSparkles] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showSparkles) {
            setShowSparkles(true);
            
            // Generate sparkles
            const newSparkles = Array.from({ length: 15 }, (_, i) => ({
              id: i,
              x: Math.random() * 100, // Random position across width
              delay: Math.random() * 2, // Random delay up to 2s
              duration: 3 + Math.random() * 2 // Duration between 3-5s
            }));
            
            setSparkles(newSparkles);
            
            // Remove sparkles after animation
            setTimeout(() => {
              setShowSparkles(false);
              setSparkles([]);
            }, 6000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [showSparkles]);

  return (
    <footer ref={footerRef} className="bg-red-900 text-white relative overflow-hidden">
      {/* Sparkles Animation */}
      {showSparkles && (
        <div className="absolute inset-0 pointer-events-none">
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
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://i.imgur.com/13b6Lyj.png" 
                alt="Azaad Indian Cuisine" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience the authentic taste of Punjab with our traditional recipes 
              passed down through generations. Every dish is prepared with love and 
              the finest spices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">Facebook</a>
              <a href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">Instagram</a>
              <a href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors">Yelp</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-yellow-300 transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-300 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-300 transition-colors">Visit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-300">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+19512998307" className="hover:text-yellow-200 transition-colors">(951) 299-8307</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@azaadcuisine.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>4290 Riverwalk Pkwy Ste 306<br />Riverside, CA 92505</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div>
                  <div>Sunday - Saturday</div>
                  <div className="text-sm">Lunch: 11:00 AM - 3:30 PM</div>
                  <div className="text-sm">Dinner: 4:30 PM - 9:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-xs text-gray-500 mt-3" style={{ color: '#aaa' }}>
            &copy; 2025 Backhouse BTL UX Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};