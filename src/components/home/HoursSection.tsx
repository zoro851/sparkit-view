
import React from 'react';
import { Clock } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const HoursSection = () => {
  return (
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
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tuesday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wednesday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-red-400">Half Day / Closed</span>
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
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-gray-400 text-sm">
                    We are also closed on major holidays. For emergency repairs, 
                    please contact us directly at +94777 181 393.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
