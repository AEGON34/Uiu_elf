import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import heroImg from '../assets/events/Nafahat_E_Ramadan_2026.webp';

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleSplashFinished = () => {
      setIsOpen(true);
    };

    window.addEventListener('splashFinished', handleSplashFinished);

    // If splash was already seen (e.g., on reload), show modal after a short delay
    if (sessionStorage.getItem('hasSeenSplash')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('splashFinished', handleSplashFinished);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-99999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div 
            className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-75"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg text-center">Nafahat-E-Ramadan</h2>
              <h3 className="text-2xl font-black text-[#ec4622] mb-4 uppercase tracking-wider drop-shadow-lg">Iftar Mahfil</h3>
              <p className="text-gray-200 mb-6 font-medium text-lg drop-shadow-md">
                A Journey of Faith and Fellowship
              </p>
              <Link
                to="/events/32"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-[#ec4622] text-white font-bold py-3 px-8 rounded-full hover:bg-[#d03a1a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-bold text-[#ec4622] uppercase tracking-wider mb-1">Registration Deadline</h4>
                <p className="text-xl font-bold text-gray-800">March 3, 2026</p>
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-sm font-bold text-[#ec4622] uppercase tracking-wider mb-1">Booth Time</h4>
                <p className="text-xl font-bold text-gray-800">10:00 AM - 4:30 PM</p>
                <p className="text-md text-gray-500 font-medium">Ground Floor, Booth No. 8</p>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-sm font-bold text-[#ec4622] uppercase tracking-wider mb-1">Online Registration</h4>
                <p className="text-xl font-bold text-gray-800">24 Hours Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
