import React from 'react';
import { Lightbulb, Wrench, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';

const ForWho: React.FC = () => {
  const categories = [
    {
      title: 'Знакомишься с ИИ',
      description: 'Если уже слышал про ChatGPT, но не знаешь, как эффективно использовать его в работе и жизни',
      result: 'За неделю научишься решать с помощью ChatGPT 80% повседневных задач'
    },
    {
      title: 'Для экспертов',
      description: 'Если хочешь автоматизировать рутину и усилить свои возможности в работе',
      result: 'Увеличишь свою продуктивность в 2-3 раза с продвинутыми техниками'
    },
    {
      title: 'Для предпринимателей',
      description: 'Если работаешь один или с небольшой командой и хочешь делать больше без найма новых людей',
      result: 'Автоматизируешь до 40% рутинных задач в вашем бизнесе'
    }
  ];

  const icons = [
    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" style={{ 
      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} />,
    <Wrench className="h-5 w-5 sm:h-6 sm:w-6" style={{ 
      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} />,
    <Users className="h-5 w-5 sm:h-6 sm:w-6" style={{ 
      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} />
  ];

  return (
    <section className="section-gradient py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Для кого" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-10">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in group relative flex flex-col h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl"></div>
              </div>

              <div className="relative flex flex-col items-center text-center gap-4 sm:gap-6 h-full">
                <div className="flex-shrink-0">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                  >
                    <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex items-center justify-center">
                      {icons[index]}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 flex-1">
                    {category.description}
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-5 transform group-hover:scale-105 transition-transform duration-300">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">
                      {category.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ForWho;