
import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

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

    // Call once and then set up a mutation observer to handle dynamically added elements
    handleLinkElements();
    
    const observer = new MutationObserver(handleLinkElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
      
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
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-50' : 'scale-100'
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-150' : 'scale-100'
        } ${linkHovered ? 'scale-200' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.25s ease-out, opacity 0.2s ease-in-out, border-color 0.25s ease-in-out',
          borderColor: linkHovered ? 'rgba(0, 162, 255, 0.8)' : 'rgba(0, 162, 255, 0.5)',
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CursorEffect;
