import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Tv, Gamepad, Zap, Wrench, Bug, Database, 
  RefreshCw, Shield, Cable, BarChart,
  Tv2, Disc, Fan 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Laptop & Computer Repair',
      icon: <Cpu className="text-sparkit-blue mb-4 text-4xl" />,
      description: 'We diagnose and fix all types of computer issues, from hardware failures to software problems.',
      services: [
        {
          name: 'Hardware Repair & Upgrades',
          icon: <Wrench size={24} />,
          description: 'Motherboard repair, component replacement, RAM/SSD upgrades, screen replacements, and keyboard fixes.'
        },
        {
          name: 'Virus & Malware Removal',
          icon: <Bug size={24} />,
          description: 'Comprehensive system cleaning, malware removal, and security software installation.'
        },
        {
          name: 'Data Recovery',
          icon: <Database size={24} />,
          description: 'Recovery of lost data from damaged hard drives, corrupted systems, and inaccessible storage devices.'
        },
        {
          name: 'OS Installation & Optimization',
          icon: <RefreshCw size={24} />,
          description: 'Clean installation of operating systems, drivers, and software optimization for performance.'
        },
      ]
    },
    {
      title: 'Television Repair',
      icon: <Tv className="text-sparkit-blue mb-4 text-4xl" />,
      description: 'Expert diagnostics and repairs for all types of TVs including LED, LCD, OLED, and Smart TVs.',
      services: [
        {
          name: 'Screen Repair',
          icon: <Tv2 size={24} />,
          description: 'Fixing screen damage, dead pixels, backlight issues, and display calibration.'
        },
        {
          name: 'Motherboard Repair',
          icon: <Wrench size={24} />,
          description: 'Circuit board repair, component-level fixes, and power supply troubleshooting.'
        },
        {
          name: 'Smart TV Services',
          icon: <BarChart size={24} />,
          description: 'Software updates, app troubleshooting, and connectivity issues resolution.'
        },
        {
          name: 'Audio System Repair',
          icon: <Cable size={24} />,
          description: 'Speaker repairs, audio output issues, and sound system troubleshooting.'
        },
      ]
    },
    {
      title: 'Gaming Console Repair',
      icon: <Gamepad className="text-sparkit-blue mb-4 text-4xl" />,
      description: 'Get your gaming systems back in action with our specialized console repair services.',
      services: [
        {
          name: 'Controller Repairs',
          icon: <Wrench size={24} />,
          description: 'Fixing controller drift, button issues, connection problems, and battery replacements.'
        },
        {
          name: 'Disc Drive Repair',
          icon: <Disc size={24} />,
          description: 'Resolving disc reading errors, drive mechanism fixes, and laser lens cleaning.'
        },
        {
          name: 'Overheating Solutions',
          icon: <Fan size={24} />,
          description: 'Thermal paste replacement, fan cleaning/replacement, and ventilation improvements.'
        },
        {
          name: 'System Update & Maintenance',
          icon: <Shield size={24} />,
          description: 'System software updates, hard drive upgrades, and preventative maintenance.'
        },
      ]
    },
    {
      title: 'Other Electronics',
      icon: <Zap className="text-sparkit-blue mb-4 text-4xl" />,
      description: 'We repair a wide range of electronic devices beyond computers, TVs, and gaming consoles.',
      services: [
        {
          name: 'Audio Equipment',
          icon: <Cable size={24} />,
          description: 'Repairs for amplifiers, speakers, home theater systems, and audio interfaces.'
        },
        {
          name: 'Home Appliances',
          icon: <Wrench size={24} />,
          description: 'Electronic repairs for kitchen appliances, smart home devices, and entertainment systems.'
        },
        {
          name: 'Networking Equipment',
          icon: <RefreshCw size={24} />,
          description: 'Router troubleshooting, modem repairs, and networking device configuration.'
        },
        {
          name: 'Projectors & Displays',
          icon: <Tv2 size={24} />,
          description: 'Lamp replacements, color calibration, and electronic component repairs.'
        },
      ]
    },
  ];

  const repairProcess = [
    {
      number: '01',
      title: 'Diagnosis',
      description: 'We perform a thorough assessment of your device to identify the exact issue.'
    },
    {
      number: '02',
      title: 'Quote',
      description: 'We provide a transparent cost estimate before proceeding with any repairs.'
    },
    {
      number: '03',
      title: 'Repair',
      description: 'Our technicians complete the repair with precision and care.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'We extensively test your device to ensure everything works perfectly.'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Your fully repaired device is returned with a repair warranty.'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
              Our <span className="text-sparkit-blue">Services</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-1 bg-sparkit-blue mx-auto mb-8"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
              At Sparkit Electronics, we provide expert repair services for a wide range of electronic devices.
              From computers and TVs to gaming consoles and other electronics, we have the expertise to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-sparkit-darker">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center sm:text-left">
                      {category.title}
                    </h2>
                    <p className="text-gray-400 mt-2 text-center sm:text-left">
                      {category.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <ScrollReveal key={serviceIndex} delay={0.2 + serviceIndex * 0.1}>
                    <div className="bg-card rounded-lg p-6 border border-border hover:border-sparkit-blue group transition-all duration-300 hover:neon-glow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-sparkit-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sparkit-blue/20 transition-colors duration-300">
                          <div className="text-sparkit-blue group-hover:text-sparkit-accent transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-3 text-center text-white">
              Our Repair <span className="text-sparkit-blue">Process</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              We follow a streamlined process to ensure efficient, high-quality repairs.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-6">
            {repairProcess.map((step, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border flex-1 relative group hover:border-sparkit-blue transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-sparkit-blue rounded-lg flex items-center justify-center text-white font-bold text-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < repairProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border group-hover:bg-sparkit-blue/50 transition-colors duration-300 z-0"></div>
                  )}
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-sparkit-darker to-sparkit-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg border border-sparkit-blue/30">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sparkit-blue/20 to-sparkit-purple/20"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-sparkit-blue/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-sparkit-purple/30 rounded-full blur-3xl"></div>
              
              <div className="relative p-8 md:p-12 text-center z-10">
                <ScrollReveal>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Ready to Get Your Electronics Fixed?
                  </h2>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contact us today or visit our shop to have your devices diagnosed by our expert technicians. 
                    We'll provide honest assessments and high-quality repairs to get your electronics working like new.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.4}>
                  <Link 
                    to="/contact" 
                    className="bg-sparkit-blue hover:bg-sparkit-blue/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block"
                  >
                    Contact Us Now
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
