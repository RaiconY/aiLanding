import React from 'react';
import { Sparkles, Timer, Briefcase, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';

const ValueProposition: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Системный навык работы с ChatGPT, покрывающий 90% задач — точные результаты вместо случайных экспериментов'
    },
    {
      icon: <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Экономия 2-3 часа в день на типовых задачах — от написания писем до принятия решений'
    },
    {
      icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Готовые шаблоны и сценарии для решения десятков конкретных задач в работе и повседневной жизни'
    },
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Актуально на 2025 — гайд включает самые новые функции ChatGPT (GPT-5, Agent, Learn Mode и плагины)'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="В чем выгода для вас" />
        
        {/* Подзаголовок */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Что вы получите, применив этот гайд
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
          {/* Блок с выгодами */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] flex-shrink-0"
                  >
                    <div className="w-full h-full rounded-lg sm:rounded-xl bg-white flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Изображение справа */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/SpiralChapters.png"
              alt="AI Assistant Interface"
              loading="lazy"
              className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Оранжевая карточка с кроликом */}
        <div className="mb-8 sm:mb-12">
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
        
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

