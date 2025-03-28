
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sparkit-darker text-white pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Brief Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-sparkit-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl">
                Spark<span className="text-sparkit-blue">it</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Your trusted electronics repair shop, led by expert technician Ajmal Shaheel. Quality repairs with honest service.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-sparkit-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sparkit-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sparkit-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-sparkit-blue transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-sparkit-blue mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">01, 09 Shopping Complex, 52, Railway Station Rd, Gampola</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sparkit-blue flex-shrink-0" size={18} />
                <span className="text-gray-400">+94777 181 393</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sparkit-blue flex-shrink-0" size={18} />
                <span className="text-gray-400">info@sparkitelectronics.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-sparkit-blue mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-400">
                  <p>Mon-Thurs: 9:00 AM - 5:00 PM</p>
                  <p>Fri: Half Day / Closed</p>
                  <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Sparkit Electronics. All rights reserved.</p>
          <p className="mt-1">
            <Link to="#" className="hover:text-sparkit-blue transition-colors">Privacy Policy</Link>
            {' | '}
            <Link to="#" className="hover:text-sparkit-blue transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
