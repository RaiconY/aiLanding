import React from 'react';

const StudyTime: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div 
          className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-0.5 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl group"
        >
          <div 
            className="bg-white rounded-xl px-6 py-5 flex flex-col md:flex-row items-center relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#E76832]/5 to-[#FFC24B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 md:mr-8 mb-4 md:mb-0 relative z-10">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Rabbit.png" 
                  alt="Rabbit" 
                  loading="lazy"
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="relative flex-1 text-center md:text-left">
              <h3
                className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent transform group-hover:scale-[1.02] transition-transform duration-300"
              >
                Этот гайд сэкономит тебе месяцы самостоятельного изучения
              </h3>
              <p 
                className="text-gray-700 text-base transform group-hover:translate-y-[-2px] transition-transform duration-300"
              >
                Я&nbsp;объединил 2&nbsp;года личного опыта и&nbsp;сотни часов экспериментов в&nbsp;пошаговую систему с&nbsp;готовыми шаблонами и&nbsp;проверенными стратегиями
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTime;