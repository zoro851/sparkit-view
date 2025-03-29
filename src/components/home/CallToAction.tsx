
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';

/**
 * CallToAction Component
 * 
 * A section that encourages users to take action by contacting the shop
 * or viewing available services. Features a gradient background and
 * animated entry effects.
 */
const CallToAction = () => {
  return (
    <section className="py-16 bg-sparkit-dark">
      <div className="container mx-auto px-4">
        {/* CTA Card with background */}
        <div className="bg-gradient-to-r from-sparkit-blue/20 to-sparkit-purple/20 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-[url('public/lovable-uploads/shop-working.png')] bg-cover bg-center opacity-10"
            aria-hidden="true"
          ></div>
          
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
              Ready to Fix Your Electronics?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Visit our shop or contact us today to get a free diagnostic assessment for your device.
              Our expert technicians are ready to help restore your electronics to perfect working condition.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link 
                to="/contact" 
                className="bg-sparkit-blue hover:bg-sparkit-blue/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
              >
                Contact Us Now
              </Link>
              <Link 
                to="/services" 
                className="border border-white/30 hover:border-sparkit-blue/80 hover:bg-sparkit-blue/10 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
