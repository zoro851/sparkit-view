import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Tv, Gamepad, Zap, ArrowRight, 
  Clock, Wrench, Award, ShieldCheck 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Your Trusted Electronics Repair Shop!';
  
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sparkit-darker to-sparkit-dark/80 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 z-0" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to <span className="text-sparkit-blue neon-text">Sparkit Electronics</span>
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
                className="bg-sparkit-blue hover:bg-sparkit-blue/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
              >
                Our Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="border border-white/30 hover:border-sparkit-blue/80 hover:bg-sparkit-blue/10 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="text-white/70 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-sparkit-darker">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white">
              Our <span className="text-sparkit-blue">Services</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              We offer comprehensive repair services for a wide range of electronic devices, 
              getting your valuable equipment back to perfect working condition.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1} className="h-full">
                <div className="service-card h-full flex flex-col">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4 text-center">
                    <Link 
                      to="/services" 
                      className="text-sparkit-blue hover:text-sparkit-accent inline-flex items-center gap-1 transition-colors"
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

      {/* Hours Section */}
      <section className="py-16 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sparkit-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                Operating <span className="text-sparkit-blue">Hours</span>
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.2}>
                <div className="border border-border bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-4 text-white flex items-center gap-2">
                    <Clock className="text-sparkit-blue" size={20} />
                    Weekdays
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuesday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wednesday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thursday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="border border-border bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-4 text-white flex items-center gap-2">
                    <Clock className="text-sparkit-blue" size={20} />
                    Weekends
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-400">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-gray-400 text-sm">
                      We are also closed on major holidays. For emergency repairs, 
                      please contact us directly at (123) 456-7890.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                <div className="bg-card p-6 rounded-lg border border-border hover:border-sparkit-blue transition-all duration-300 hover:neon-glow text-center">
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

      {/* Call to Action */}
      <section className="py-16 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-sparkit-blue/20 to-sparkit-purple/20 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            
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
    </div>
  );
};

export default Home;
