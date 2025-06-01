import React from 'react';
import { Sparkles, Timer, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Системный навык работы с ChatGPT — точные результаты вместо случайных экспериментов'
    },
    {
      icon: <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Экономия 2-3 часа в день на типовых задачах — от написания писем до принятия решений'
    },
    {
      icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-[#E76832]" />,
      text: 'Готовые шаблоны и сценарии для решения десятков конкретных задач в работе и повседневной жизни'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Реальная выгода от гайда" />
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 sm:gap-8 items-center">
          {/* Текстовый блок сначала (теперь слева) */}
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
          
          {/* Изображение после (теперь справа) */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <img 
              src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens%20with%20chapters.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVucyB3aXRoIGNoYXB0ZXJzLnBuZyIsImlhdCI6MTc0ODc5MjU4MSwiZXhwIjoxNzgwMzI4NTgxfQ.BzoBgVJLxyXRzUYkl2Hss2Apbq4bsrBuydm35Gry8M0"
              alt="AI Assistant Interface"
              loading="lazy"
              className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Benefits;