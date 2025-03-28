import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trail, setTrail] = useState<{ x: number, y: number, opacity: number }[]>([]);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add enhanced trail effect
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, opacity: 1 }];
        // Keep only the last 15 points for a longer trail
        return newTrail.slice(-15);
      });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onLinkHoverIn = () => {
      setLinkHovered(true);
    };

    const onLinkHoverOut = () => {
      setLinkHovered(false);
    };

    addEventListeners();

    // Add hover effect for links and buttons
    const handleLinkElements = () => {
      const allLinks = document.querySelectorAll('a, button, .hover-effect');
      allLinks.forEach((link) => {
        link.addEventListener('mouseenter', onLinkHoverIn);
        link.addEventListener('mouseleave', onLinkHoverOut);
      });
    };

    // Fade out trail effect
    const fadeTrail = () => {
      setTrail(prevTrail => 
        prevTrail.map(point => ({
          ...point,
          opacity: point.opacity > 0 ? point.opacity - 0.04 : 0
        })).filter(point => point.opacity > 0)
      );
    };

    const fadeInterval = setInterval(fadeTrail, 40);

    // Call once and then set up a mutation observer to handle dynamically added elements
    handleLinkElements();
    
    const observer = new MutationObserver(handleLinkElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
      clearInterval(fadeInterval);
      
      const allLinks = document.querySelectorAll('a, button, .hover-effect');
      allLinks.forEach((link) => {
        link.removeEventListener('mouseenter', onLinkHoverIn);
        link.removeEventListener('mouseleave', onLinkHoverOut);
      });
    };
  }, []);

  // Check if we're on a touch device, don't show custom cursor
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Enhanced trail effect with variable size and opacity */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: point.opacity,
            width: `${8 + (index * 0.6)}px`,
            height: `${8 + (index * 0.6)}px`,
            backgroundColor: `rgba(14, 165, 233, ${0.3 * point.opacity})`,
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 49,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.15s ease-out',
            boxShadow: `0 0 ${5 + index}px rgba(14, 165, 233, ${0.2 * point.opacity})`,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-50' : 'scale-100'
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: 'fixed',
          width: '12px',
          height: '12px',
          backgroundColor: 'rgba(14, 165, 233, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 50,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)',
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out, background-color 0.15s ease-in-out',
        }}
      />

      {/* Cursor outline */}
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-150' : 'scale-100'
        } ${linkHovered ? 'scale-200' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(14, 165, 233, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 50,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.25s ease-out, opacity 0.2s ease-in-out, border-color 0.25s ease-in-out',
          borderColor: linkHovered ? 'rgba(14, 165, 233, 0.9)' : 'rgba(14, 165, 233, 0.6)',
          boxShadow: linkHovered ? '0 0 15px rgba(14, 165, 233, 0.4)' : '0 0 10px rgba(14, 165, 233, 0.2)',
        }}
      />
    </>
  );
};

export default CursorEffect;
