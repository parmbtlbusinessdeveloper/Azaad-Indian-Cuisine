import React, { useEffect, useState, useRef, useCallback } from 'react';

interface TrailOrb {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trailOrbs, setTrailOrbs] = useState<TrailOrb[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailIdRef = useRef(0);
  const lastTrailTime = useRef(0);

  // Create trail orb
  const createTrailOrb = useCallback((x: number, y: number) => {
    const now = Date.now();
    // Throttle trail creation to every 50ms for smooth performance
    if (now - lastTrailTime.current < 50) return;
    
    lastTrailTime.current = now;
    const newOrb: TrailOrb = {
      id: trailIdRef.current++,
      x,
      y,
      timestamp: now
    };

    setTrailOrbs(prev => {
      // Keep only recent orbs (last 600ms)
      const filtered = prev.filter(orb => now - orb.timestamp < 600);
      return [...filtered, newOrb].slice(-8); // Max 8 orbs
    });
  }, []);

  useEffect(() => {
    // Only enable on desktop
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const updateCursorPosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setPosition({ x: newX, y: newY });
      createTrailOrb(newX, newY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isClickableElement(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isClickableElement(target)) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const isClickableElement = (element: HTMLElement): boolean => {
      const clickableSelectors = [
        'a', 'button', 'input', 'textarea', 'select',
        '[role="button"]', '[tabindex]:not([tabindex="-1"])',
        '.premium-button', '.btn-hover', '.hover\\:scale-105',
        '.hover\\:bg-', '.cursor-pointer', '.review-element'
      ];

      return clickableSelectors.some(selector => {
        try {
          return element.matches(selector) || element.closest(selector);
        } catch {
          return false;
        }
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for all elements
    const addHoverListeners = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .premium-button, .btn-hover, .review-element'
      );

      clickableElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup old trail orbs periodically
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrailOrbs(prev => prev.filter(orb => now - orb.timestamp < 600));
    }, 100);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      clearInterval(cleanupInterval);

      // Remove hover listeners
      const clickableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .premium-button, .btn-hover, .review-element'
      );
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [createTrailOrb]);

  // Don't render on mobile/tablet
  useEffect(() => {
    const checkDevice = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (cursorRef.current) {
        cursorRef.current.style.display = isDesktop ? 'block' : 'none';
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trail orbs */}
      {trailOrbs.map((orb) => (
        <div
          key={orb.id}
          className="cursor-trail fade"
          style={{
            left: `${orb.x}px`,
            top: `${orb.y}px`,
            animationDelay: `${Math.random() * 0.1}s`
          }}
        />
      ))}
    </>
  );
};