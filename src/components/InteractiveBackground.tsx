
import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{x: number, y: number, radius: number, color: string, speedX: number, speedY: number}[]>([]);
  const mouseRef = useRef<{x: number, y: number}>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.min(Math.floor(window.innerWidth * window.innerHeight / 8000), 150);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1.5,
          color: `rgba(14, 165, 233, ${Math.random() * 0.7 + 0.3})`,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4
        });
      }
    };
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particlesRef.current.forEach(particle => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move particles away from mouse with stronger effect
        if (distance < 250) {
          const angle = Math.atan2(dy, dx);
          const repelForce = (250 - distance) / 3000;
          particle.x -= Math.cos(angle) * repelForce * distance;
          particle.y -= Math.sin(angle) * repelForce * distance;
        }
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Create connections between close particles with thicker lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.2 * (1 - distance / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      
      // Add enhanced glow effect around mouse
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 20,
        mouseRef.current.x, mouseRef.current.y, 250
      );
      gradient.addColorStop(0, "rgba(14, 165, 233, 0.3)");
      gradient.addColorStop(0.5, "rgba(14, 165, 233, 0.1)");
      gradient.addColorStop(1, "rgba(14, 165, 233, 0)");
      
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 250, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-90"
    />
  );
};

export default InteractiveBackground;
