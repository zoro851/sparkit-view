
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import HoursSection from '../components/home/HoursSection';
import BenefitsSection from '../components/home/BenefitsSection';
import CallToAction from '../components/home/CallToAction';

/**
 * Home Page Component
 * 
 * The main landing page of the website. It combines all homepage sections:
 * - Hero section with main call to action
 * - Services overview section
 * - Business hours information
 * - Benefits of choosing our services
 * - Final call to action section
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <HoursSection />
      <BenefitsSection />
      <CallToAction />
    </div>
  );
};

export default Home;
