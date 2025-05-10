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
              Сэкономь себе до 3 часов в день
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Практическое руководство для тех, кто хочет внедрить ИИ в повседневную работу и получать реальные результаты
            </p>
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <CTAButton />
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 max-w-md">
                <p className="text-sm sm:text-base text-gray-800 font-medium">
                  За неделю неспешного изучения гайда поймёте больше, чем за год самотыкания
                </p>
                <p className="text-xs sm:text-sm text-gray-600 italic mt-1">
                  так как я изучил все за вас
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-fade-in order-1 md:order-2 -mx-4 sm:mx-0">
            <div className="relative w-full md:w-[135%] transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Spiral%20Chapters.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU3BpcmFsIENoYXB0ZXJzLnBuZyIsImlhdCI6MTc0NjgwMTA5NCwiZXhwIjoxNzc4MzM3MDk0fQ.1u992xTmfzKWeyuOxWjvLsKaBBtb39r03uEIT7Y50Do"
                alt="AI Assistant Interface"
                className="w-full h-auto object-contain px-4 sm:px-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;