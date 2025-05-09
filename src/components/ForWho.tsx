import React from 'react';
import { Lightbulb, Wrench, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ForWho: React.FC = () => {
  const categories = [
    {
      title: 'Только знакомишься с ИИ',
      description: 'Если уже слышал про ChatGPT, но не знаешь, как эффективно использовать его в работе и жизни',
      result: 'За неделю научитесь решать с помощью ChatGPT 80% повседневных задач',
      cta: 'Начать с основ →',
      icon: <Lightbulb className="h-6 w-6 text-[#E76832]" />
    },
    {
      title: 'Для экспертов',
      description: 'Если хочешь автоматизировать рутину и усилить свои возможности в работе',
      result: 'Увеличьте свою продуктивность в 2-3 раза с продвинутыми техниками',
      cta: 'Перейти к продвинутым техникам →',
      icon: <Wrench className="h-6 w-6 text-[#E76832]" />
    },
    {
      title: 'Для предпринимателей',
      description: 'Если работаешь один или с небольшой командой и хочешь делать больше без найма новых людей',
      result: 'Автоматизируйте до 40% рутинных задач в вашем бизнесе',
      cta: 'Узнать про бизнес-кейсы →',
      icon: <Users className="h-6 w-6 text-[#E76832]" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Для кого этот гайд" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                <div className="bg-orange-50 rounded-xl p-4 group-hover:bg-orange-100 transition-colors duration-300">
                  <p className="text-gray-800">
                    {category.result}
                  </p>
                </div>

                <button 
                  className="text-[#E76832] font-medium group-hover:text-[#FFC24B] transition-colors duration-300 text-left"
                >
                  {category.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;