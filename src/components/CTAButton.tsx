import React from 'react';

const CTAButton: React.FC = () => {
  return (
    <button 
      className="group inline-flex items-center text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-base sm:text-lg"
      style={{
        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)'
      }}
      onClick={() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Забрать гайд
      <svg 
        className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
};

export default CTAButton;