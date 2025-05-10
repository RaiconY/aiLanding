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
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Увеличь свою продуктивность в&nbsp;3&nbsp;раза&nbsp;с&nbsp;ChatGPT
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Практическое руководство для тех, кто хочет внедрить ИИ в повседневную работу и получать реальные результаты
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              {[
                { number: "+50", text: "шаблонов для экономии 2+ часов в день" },
                { number: "+20", text: "промптов заменяющих работу дизайнера" },
                { number: "+10", text: "готовых AI-ассистентов для автоматизации" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 rounded-lg p-2 sm:p-3 shadow-sm"
                >
                  <span 
                    className="text-lg sm:text-xl font-semibold"
                    style={{ 
                      background: 'linear-gradient(135deg, #E76832, #FFC24B)', 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {stat.number}
                  </span>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.text}</div>
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
                src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Spiral%20Chapters.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU3BpcmFsIENoYXB0ZXJzLnBuZyIsImlhdCI6MTc0NjgwMTA5NCwiZXhwIjoxNzc4MzM3MDk0fQ.1u992xTmfzKWeyuOxWjvLsKaBBtb39r03uEIT7Y50Do"
                alt="AI Assistant Interface"
                loading="eager" // Keep eager loading for hero image
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