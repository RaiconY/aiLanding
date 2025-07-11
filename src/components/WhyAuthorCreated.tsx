import React from 'react';
import SectionTitle from './SectionTitle';

const WhyAuthorCreated: React.FC = () => {
  const reasons = [
    {
      number: '1',
      title: 'Вера в технологию',
      description: 'За последние месяцы мы изучили огромное количество информации по ИИ. Считаем эту технологию ключевой для будущего'
    },
    {
      number: '2',
      title: 'Личный опыт',
      description: 'Наша эффективность с ИИ выросла в 2-3 раза. Даже минимальные улучшения в использовании дают огромный эффект'
    },
    {
      number: '3',
      title: 'Миссия',
      description: 'Через гайд мы делимся знаниями с тысячами людей вместо десятков на консультациях. Через год этот навык станет критически важным'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Подложка - декоративные элементы фона */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-br from-[#E76832] to-[#FFC24B] rounded-full filter blur-[100px] opacity-5 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Зачем мы написали этот гайд" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative flex flex-col"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6 h-full">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                      {reason.number}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAuthorCreated;