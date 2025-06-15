import React from 'react';
import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 flex items-center py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="flex flex-col space-y-6 md:space-y-8 animate-slide-up text-center md:text-left order-2 md:order-1">
            <div className="flex items-center space-x-2 mb-2 animate-pulse justify-center md:justify-start">
              <Sparkles size={20} style={{ color: '#E76832' }} />
              <span className="font-semibold text-sm sm:text-base" style={{ color: '#E76832' }}>Гайд по ChatGPT</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
Научись работать с&nbsp;ChatGPT и&nbsp;экономь до&nbsp;100&nbsp;000&nbsp;₽ в&nbsp;месяц
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Полное практическое руководство по внедрению ChatGPT в работу и жизнь с конкретными кейсами экономии времени на задачах
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              {[
                {
      number: "3 часа в день",
      text: "Освободи"
    },
    {
      number: "до 100 000 ₽",
      text: "Экономь в месяц"
    },
    {
      text: "Автоматизируй",
      number: "80% рутины",
    },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-xs sm:text-sm text-gray-600">{stat.text}</div>
                  <span 
                    className="text-lg sm:text-xl font-semibold block mb-1"
                    style={{ 
                      background: 'linear-gradient(135deg, #E76832, #FFC24B)', 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {stat.number}
                  </span>
                  
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <CTAButton />
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-fade-in order-1 md:order-2 -mx-4 sm:mx-0">
            <div className="relative w-full md:w-[135%] transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://i.postimg.cc/BQ7bPz3Y/With-AIComparing.png"
                alt="AI Assistant Interface"
                loading="eager"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;