
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-sparkit-dark flex flex-col items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-sparkit-blue/20 flex items-center justify-center">
            <AlertTriangle className="text-sparkit-blue" size={48} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-sparkit-blue mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-sparkit-blue hover:bg-sparkit-blue/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
