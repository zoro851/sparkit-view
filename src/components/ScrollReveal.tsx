
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  threshold = 0.1,
  once = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const directionMap = {
      up: 'translateY(40px)',
      down: 'translateY(-40px)',
      left: 'translateX(40px)',
      right: 'translateX(-40px)',
      none: 'none',
    };

    // Apply initial styles
    section.style.opacity = '0';
    section.style.transform = directionMap[direction];
    section.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
    section.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0) translateX(0)';
          }, 100);
          
          if (once) {
            observer.unobserve(section);
          }
        } else if (!once) {
          section.style.opacity = '0';
          section.style.transform = directionMap[direction];
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [delay, direction, duration, once, threshold]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
