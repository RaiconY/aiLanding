import React from 'react';

interface SectionTitleProps {
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div 
        className={`h-1 w-24 rounded ${centered ? 'mx-auto' : ''}`}
        style={{
          background: 'linear-gradient(135deg, #E76832, #FFC24B)'
        }}
      ></div>
    </div>
  );
};

export default SectionTitle;