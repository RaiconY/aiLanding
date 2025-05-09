import React from 'react';
import { Sparkles, Timer, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-8 w-8 text-[#E76832]" />,
      text: 'Системный навык работы с ChatGPT — точные результаты вместо случайных экспериментов'
    },
    {
      icon: <Timer className="h-8 w-8 text-[#E76832]" />,
      text: 'Экономию 2-3 часов в день на типовых задачах — от написания писем до принятия решений'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#E76832]" />,
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
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Image column */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="AI Assistant Interface"
              className="rounded-2xl w-full h-auto object-cover shadow-lg transform hover:scale-105 transition-duration-300"
            />
          </div>

          {/* Benefits columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg group"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                  >
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-xl leading-relaxed">
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