import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 800);
    
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start fade out
          setTimeout(() => setFadeOut(true), 500);
          // Complete loading
          setTimeout(() => onLoadingComplete(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-amber-800 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full animate-pulse" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 60% 20%, rgba(255, 215, 0, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
        }}></div>
      </div>

      {/* Floating Spice Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <div className={`mb-8 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}>
          <div className="relative">
            {/* Glowing Ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="w-full h-full border-4 border-yellow-400 rounded-full animate-spin-slow opacity-60"></div>
            </div>
            
            {/* Logo SVG */}
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 100 100" 
                className="animate-pulse-glow"
              >
                <defs>
                  <linearGradient id="loadingLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                    <stop offset="30%" stopColor="#FCD34D" stopOpacity="0.95" />
                    <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="loadingGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Lotus Petals */}
                <g fill="url(#loadingLotusGradient)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" filter="url(#loadingGlow)">
                  {/* Center petal */}
                  <path d="M50 20 C44 32, 44 44, 50 58 C56 44, 56 32, 50 20 Z" className="animate-petal-grow" style={{ animationDelay: '0.1s' }} />
                  
                  {/* Left petals */}
                  <path d="M32 32 C26 38, 28 50, 38 58 C44 52, 44 40, 32 32 Z" className="animate-petal-grow" style={{ animationDelay: '0.2s' }} />
                  <path d="M20 48 C14 52, 16 64, 28 68 C34 62, 32 52, 20 48 Z" className="animate-petal-grow" style={{ animationDelay: '0.3s' }} />
                  
                  {/* Right petals */}
                  <path d="M68 32 C74 38, 72 50, 62 58 C56 52, 56 40, 68 32 Z" className="animate-petal-grow" style={{ animationDelay: '0.4s' }} />
                  <path d="M80 48 C86 52, 84 64, 72 68 C66 62, 68 52, 80 48 Z" className="animate-petal-grow" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Bottom petals */}
                  <path d="M38 62 C32 68, 34 78, 46 80 C50 74, 48 64, 38 62 Z" className="animate-petal-grow" style={{ animationDelay: '0.6s' }} />
                  <path d="M62 62 C68 68, 66 78, 54 80 C50 74, 52 64, 62 62 Z" className="animate-petal-grow" style={{ animationDelay: '0.7s' }} />
                </g>
                
                {/* Center dot */}
                <circle cx="50" cy="50" r="6" fill="rgba(255, 255, 255, 0.9)" className="animate-center-pulse" />
              </svg>
            </div>
          </div>
        </div>

        {/* Restaurant Name */}
        <div className={`mb-8 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2 animate-text-glow" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Azaad Indian Cuisine
          </h1>
          <p className="text-lg md:text-xl text-yellow-200 italic font-light animate-text-shimmer" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Discover the Taste of India
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-red-800/30 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 h-full rounded-full transition-all duration-300 ease-out animate-progress-glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-yellow-200 text-sm font-medium animate-bounce-subtle">
            Preparing your culinary journey... {progress}%
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-orange-400/10 rounded-full animate-float-reverse"></div>
      </div>
    </div>
  );
};