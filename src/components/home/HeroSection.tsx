
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

/**
 * HeroSection Component
 * 
 * Main landing section for the homepage featuring a background image,
 * animated text typing effect, and call-to-action buttons.
 */
const HeroSection = () => {
  // State for the text typing animation
  const [typedText, setTypedText] = useState('');
  const fullText = 'Your Trusted Electronics Repair Shop!';
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-sparkit-darker to-sparkit-dark/80 z-10" />
        
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-[url('public/lovable-uploads/shop-working.png')] bg-cover bg-center bg-no-repeat opacity-40 z-0" 
          aria-hidden="true"
        />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="bg-gradient-to-r from-sparkit-blue to-sparkit-purple bg-clip-text text-transparent animate-pulse transition-all duration-500">Sparkit Electronics</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white min-h-[40px]">
            {typedText}<span className="animate-pulse">|</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6}>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We've just opened our doors to provide expert electronic repair services. 
            With cutting-edge equipment and skilled technicians, we bring your devices back to life.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.9}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-sparkit-blue to-sparkit-purple hover:from-sparkit-blue/90 hover:to-sparkit-purple/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
            >
              Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-white/30 hover:border-sparkit-purple/80 hover:bg-sparkit-purple/10 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
