import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Custom Cursor Component
const CustomCursor: React.FC = () => {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const trailRefs = React.useRef<HTMLDivElement[]>([]);
  const mousePosition = React.useRef({ x: 0, y: 0 });
  const trailPositions = React.useRef(Array(5).fill({ x: 0, y: 0 }));

  React.useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    const updateTrail = () => {
      // Update trail positions with delay
      for (let i = trailPositions.current.length - 1; i > 0; i--) {
        trailPositions.current[i] = { ...trailPositions.current[i - 1] };
      }
      trailPositions.current[0] = { ...mousePosition.current };

      // Apply positions to trail elements
      trailRefs.current.forEach((trail, index) => {
        if (trail && trailPositions.current[index]) {
          const pos = trailPositions.current[index];
          trail.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
          trail.style.opacity = `${0.6 - index * 0.1}`;
        }
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target instanceof Element && target.matches('a, button, input, textarea, select, [role="button"]')) {
        cursorRef.current?.classList.add('cursor-hover');
      }
      if (target instanceof Element && target.matches('p, h1, h2, h3, h4, h5, h6, span, div')) {
        cursorRef.current?.classList.add('cursor-text');
      }
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove('cursor-hover', 'cursor-text');
    };

    // Event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Trail animation
    const trailInterval = setInterval(updateTrail, 50);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      clearInterval(trailInterval);
    };
  }, []);

  // Don't render on mobile
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      
      {/* Cursor trail */}
      {Array(5).fill(0).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailRefs.current[index] = el;
          }}
          className="cursor-trail"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </>
  );
};

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <CustomCursor />
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;