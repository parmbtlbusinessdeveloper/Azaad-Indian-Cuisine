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
  const animationFrameRef = useRef<number>();
  const lastPositionRef = useRef({ x: 0, y: 0 });

  // Create trail orb
  const createTrailOrb = useCallback((x: number, y: number, force = false) => {
    const now = Date.now();
    const distance = Math.sqrt(
      Math.pow(x - lastPositionRef.current.x, 2) + 
      Math.pow(y - lastPositionRef.current.y, 2)
    );
    
    // Only create orb if mouse moved enough distance or forced
    if (!force && (now - lastTrailTime.current < 30 || distance < 8)) return;
    
    lastTrailTime.current = now;
    lastPositionRef.current = { x, y };
    
    const newOrb: TrailOrb = {
      id: trailIdRef.current++,
      x,
      y,
      timestamp: now
    };

    setTrailOrbs(prev => {
      // Keep only recent orbs (last 800ms) and max 10 orbs
      const filtered = prev.filter(orb => now - orb.timestamp < 800);
      return [...filtered, newOrb].slice(-10);
    });
  }, []);

  // Smooth animation loop for cursor following
  const animateCursor = useCallback((targetX: number, targetY: number) => {
    const currentPos = position;
    const dx = targetX - currentPos.x;
    const dy = targetY - currentPos.y;
    
    // Smooth interpolation
    const newX = currentPos.x + dx * 0.15;
    const newY = currentPos.y + dy * 0.15;
    
    setPosition({ x: newX, y: newY });
    
    // Create trail orb based on actual cursor position
    createTrailOrb(newX, newY);
  }, [position, createTrailOrb]);
  useEffect(() => {
    // Only enable on desktop
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    let targetPosition = { x: 0, y: 0 };
    let isAnimating = false;

    const updateCursorPosition = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
      
      if (!isAnimating) {
        isAnimating = true;
        
        const animate = () => {
          animateCursor(targetPosition.x, targetPosition.y);
          
          const dx = targetPosition.x - position.x;
          const dy = targetPosition.y - position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0.5) {
            animationFrameRef.current = requestAnimationFrame(animate);
          } else {
            isAnimating = false;
          }
        };
        
        animate();
      }
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
      setTrailOrbs(prev => prev.filter(orb => now - orb.timestamp < 800));
    }, 50);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      clearInterval(cleanupInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Remove hover listeners
      const clickableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .premium-button, .btn-hover, .review-element'
      );
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [createTrailOrb, animateCursor, position]);

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
            animationDelay: `${Math.random() * 0.05}s`
          }}
        />
      ))}
    </>
  );
};