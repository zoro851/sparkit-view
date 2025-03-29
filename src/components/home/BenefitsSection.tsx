
import React from 'react';
import { Wrench, Award, Clock, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const BenefitsSection = () => {
  const benefits = [
    { 
      icon: <Wrench className="h-10 w-10 text-sparkit-blue" />, 
      title: 'Expert Technicians', 
      description: 'Led by Ajmal Shaheel with years of electronics repair expertise.' 
    },
    { 
      icon: <Award className="h-10 w-10 text-sparkit-blue" />, 
      title: 'Quality Repairs', 
      description: 'We use high-quality parts and precise techniques for lasting repairs.' 
    },
    { 
      icon: <Clock className="h-10 w-10 text-sparkit-blue" />, 
      title: 'Quick Turnaround', 
      description: 'Most repairs completed within 24-48 hours to minimize downtime.' 
    },
    { 
      icon: <ShieldCheck className="h-10 w-10 text-sparkit-blue" />, 
      title: 'Warranty Guaranteed', 
      description: 'All our repairs come with a 90-day warranty for your peace of mind.' 
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sparkit-darker to-sparkit-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white">
            Why Choose <span className="text-sparkit-blue">Sparkit</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We're dedicated to providing exceptional service, quality repairs, and customer satisfaction.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.1}>
              <div className="bg-card p-6 rounded-lg border border-border hover:border-sparkit-blue transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sparkit-blue/10 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
