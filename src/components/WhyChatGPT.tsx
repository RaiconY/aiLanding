import React from 'react';
import SectionTitle from './SectionTitle';

const WhyChatGPT: React.FC = () => {
  const reasons = [
    {
      title: 'Полнота функций',
      description: 'У ChatGPT Больше возможностей для обычного пользователя, чем у конкурентов'
    },
    {
      title: 'Основа для понимания',
      description: 'Научившись работать с ChatGPT, легко освоите любые другие ИИ-сервисы'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Почему ChatGPT — лучший выбор для начала" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/ChatGptInterface.png"
              alt="AI Technology Visualization"
              loading="lazy"
              className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-500"
            />
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="h-full w-full bg-white rounded-xl sm:rounded-2xl" />
                </div>
                
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent transform group-hover:translate-x-1 transition-transform duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChatGPT;