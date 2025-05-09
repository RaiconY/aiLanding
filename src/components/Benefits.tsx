import React from 'react';
import { Sparkles, Timer, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-[#E76832]" />,
      text: 'Системный навык работы с ChatGPT — точные результаты вместо случайных экспериментов'
    },
    {
      icon: <Timer className="h-6 w-6 text-[#E76832]" />,
      text: 'Экономию 2-3 часов в день на типовых задачах — от написания писем до принятия решений'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-[#E76832]" />,
      text: 'Готовые шаблоны и сценарии для решения десятков конкретных задач в работе и повседневной жизни'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Что получишь на выходе" />
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center">
          {/* Image column - убрана тень и добавлено выравнивание */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <img 
              src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/WithAIComparing.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvV2l0aEFJQ29tcGFyaW5nLnBuZyIsImlhdCI6MTc0NjgxMDQxMSwiZXhwIjoxNzc4MzQ2NDExfQ.pYk6AVXapF3ncAtqjgrR0Qdbb4ztvn8D6NE5SH-658k"
              alt="AI Assistant Interface"
              className="rounded-2xl w-full h-auto object-contain transform hover:scale-105 transition-duration-300"
            />
          </div>

          {/* Benefits column - центрирован вертикально */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md group"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] flex-shrink-0"
                  >
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    {benefit.text}
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

export default Benefits;