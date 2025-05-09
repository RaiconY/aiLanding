import React from 'react';
import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 md:py-20">
          <div className="flex flex-col space-y-6 md:space-y-8 animate-slide-up text-center md:text-left">
            <div className="flex items-center space-x-2 mb-2 animate-pulse justify-center md:justify-start">
              <Sparkles size={24} style={{ color: '#E76832' }} />
              <span className="font-semibold" style={{ color: '#E76832' }}>Гайд по ChatGPT</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Сэкономь себе до 3 часов в день
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Практическое руководство для тех, кто хочет внедрить ИИ в повседневную работу и получать реальные результаты
            </p>
            
            <div className="pt-4">
              <CTAButton />
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-fade-in order-first md:order-last">
            <div className="relative w-full md:w-[135%] transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://file.notion.so/f/f/164031f6-d68d-4127-88fa-7c852ed197d3/eaab4fed-dc1d-4665-ae1e-2057d8d75fd6/image.png?table=block&id=1ed79816-5e3e-8066-9bb1-e2c3e4ebf36f&spaceId=164031f6-d68d-4127-88fa-7c852ed197d3&expirationTimestamp=1746813600000&signature=b3ApBJu4SmxlsH-tuarKbXPeJLz0mi25GrJyFQMKhxY&downloadName=image.png"
                alt="AI Assistant Interface"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;