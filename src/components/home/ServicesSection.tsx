
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Tv, Gamepad, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

/**
 * ServicesSection Component
 * 
 * Showcases the main service categories offered by the shop
 * with icons, descriptions, and links to more detailed information.
 */
const ServicesSection = () => {
  const services = [
    { 
      icon: <Cpu className="service-icon" />, 
      title: 'Laptop & Computer Repair', 
      description: 'Hardware diagnostics, upgrades, virus removal, and data recovery services.' 
    },
    { 
      icon: <Tv className="service-icon" />, 
      title: 'Television Repair', 
      description: 'Screen fixes, motherboard repairs, and smart TV software troubleshooting.' 
    },
    { 
      icon: <Gamepad className="service-icon" />, 
      title: 'Gaming Console Repair', 
      description: 'Controllers, overheating issues, disc reader problems, and system updates.' 
    },
    { 
      icon: <Zap className="service-icon" />, 
      title: 'Other Electronics', 
      description: 'Audio equipment, home appliances, and various electronic device repairs.' 
    },
  ];

  return (
    <section id="services" className="py-20 bg-sparkit-darker">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white">
            Our <span className="bg-gradient-to-r from-sparkit-blue to-sparkit-purple bg-clip-text text-transparent">Services</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive repair services for a wide range of electronic devices, 
            getting your valuable equipment back to perfect working condition.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.1} className="h-full">
              <div className="service-card h-full flex flex-col bg-gradient-to-b from-card/60 to-card hover:from-sparkit-blue/10 hover:to-sparkit-purple/10">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 text-center">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-sparkit-blue to-sparkit-purple bg-clip-text text-transparent hover:from-sparkit-accent hover:to-sparkit-blue transition-colors"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
