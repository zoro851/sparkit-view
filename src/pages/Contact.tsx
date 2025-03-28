
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [localTime, setLocalTime] = useState(new Date());
  
  // Helper to check if shop is currently open
  const checkIfOpen = () => {
    const currentDay = localTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = localTime.getHours();
    const currentMinute = localTime.getMinutes();
    const currentTime = currentHour + currentMinute / 60;
    
    // Shop hours
    const hours = {
      0: { open: true, from: 9, to: 17 }, // Sunday 9AM-5PM
      1: { open: true, from: 9, to: 17 }, // Monday 9AM-5PM
      2: { open: true, from: 9, to: 17 }, // Tuesday 9AM-5PM
      3: { open: true, from: 9, to: 17 }, // Wednesday 9AM-5PM
      4: { open: true, from: 9, to: 17 }, // Thursday 9AM-5PM
      5: { open: false }, // Friday - closed or half day
      6: { open: true, from: 9, to: 17 }, // Saturday 9AM-5PM
    };
    
    if (!hours[currentDay].open) return false;
    return currentTime >= hours[currentDay].from && currentTime < hours[currentDay].to;
  };
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
      setIsOpen(checkIfOpen());
    }, 60000);
    
    // Initial check
    setIsOpen(checkIfOpen());
    
    return () => clearInterval(timer);
  }, []);
  
  // Copy to clipboard function
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: `${label} has been copied to your clipboard.`,
        });
      },
      (err) => {
        console.error('Could not copy text: ', err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy to clipboard",
        });
      }
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-sparkit-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
              Contact <span className="text-sparkit-blue">Us</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-1 bg-sparkit-blue mx-auto mb-8"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
              Have questions or need to book a repair? Reach out to us using the information below or visit our shop.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-sparkit-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Get in <span className="text-sparkit-blue">Touch</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sparkit-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-sparkit-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Phone</h3>
                      <p className="text-gray-300 flex items-center gap-2 group relative">
                        +94777 181 393
                        <button 
                          onClick={() => copyToClipboard('+94777181393', 'Phone number')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-sparkit-blue hover:text-sparkit-accent"
                          aria-label="Copy phone number"
                        >
                          <Copy size={16} />
                        </button>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sparkit-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-sparkit-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Email</h3>
                      <p className="text-gray-300 flex items-center gap-2 group relative">
                        info@sparkitelectronics.com
                        <button 
                          onClick={() => copyToClipboard('info@sparkitelectronics.com', 'Email address')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-sparkit-blue hover:text-sparkit-accent"
                          aria-label="Copy email"
                        >
                          <Copy size={16} />
                        </button>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sparkit-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-sparkit-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Address</h3>
                      <p className="text-gray-300 flex items-center gap-2 group relative">
                        01, 09 Shopping Complex, 52, Railway Station Rd, Gampola
                        <button 
                          onClick={() => copyToClipboard('01, 09 Shopping Complex, 52, Railway Station Rd, Gampola', 'Address')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-sparkit-blue hover:text-sparkit-accent"
                          aria-label="Copy address"
                        >
                          <Copy size={16} />
                        </button>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sparkit-blue/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-sparkit-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Business Hours</h3>
                      <div className="text-gray-300">
                        <div className="mb-2 flex gap-2 items-center">
                          <span className={`inline-block w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                          <span>{isOpen ? 'Currently Open' : 'Currently Closed'}</span>
                        </div>
                        <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                        <p>Friday: Half Day / Closed</p>
                        <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium text-white mb-4">Shop Exterior</h3>
                  <div className="rounded-lg overflow-hidden animate-fade-in">
                    <img 
                      src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1770&auto=format&fit=crop" 
                      alt="Sparkit Electronics Shop Exterior" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Our <span className="text-sparkit-blue">Location</span>
                </h2>
                
                <div className="rounded-lg overflow-hidden border border-border h-[450px] mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5603037256367!2d80.6676!3d7.1656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380ff1e28d8c9%3A0xa20a52fc2c0d85e!2sRailway%20Station%20Rd%2C%20Gampola!5e0!3m2!1sen!2slk!4v1720086291092!5m2!1sen!2slk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sparkit Electronics Location Map"
                    className="filter grayscale hover:filter-none transition-all duration-500"
                  ></iframe>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="text-sparkit-blue" size={20} />
                    Getting Here
                  </h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-medium text-white">By Car</h4>
                      <p>Convenient street parking available directly in front of our shop. Located in the Shopping Complex on Railway Station Road.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white">Public Transport</h4>
                      <p>Close to the Gampola Railway Station. Local buses and tuk-tuks are readily available.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white">Walking Directions</h4>
                      <p>From Gampola Railway Station, head towards Railway Station Road. Our shop is located in the Shopping Complex at number 01, 09.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
