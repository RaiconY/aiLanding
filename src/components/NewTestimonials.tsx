import React from 'react';
import { MessageCircle, Star, User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const EnhancedTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Евгений П.',
      position: 'Дизайнер',
      text: 'Мне очень понравилось как ты расписываешь для новичков — я кайфанул уже с самого пункта настройки.\nОказывается в ChatGPT можно в настройках профиля очень много всего делать. Для меня это стопудово уже очень полезная информация.'
    },
    {
      name: 'Максим К.',
      position: 'Владелец компании',
      text: 'Классный документ, структурирован и без воды.\nЯ бы его прикупил у тебя для компании, чтобы ЛПР могли юзать.'
    },
    {
      name: 'Наташа Я.',
      position: 'Основатель СММ агентства',
      text: 'Очень понравилось, как детально всё расписано. Особенно впечатлил раздел про SEO статьи 🤣\n\nЭто потрясающе, как ChatGPT может генерировать качественный контент. Полезно было в целом про функционал, про то, как чат думает.\n\nПро генерацию картинок тоже круто — я это команде еще расскажу.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Отзывы от профессионалов" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 md:p-6 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col h-full">                
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Testimonial text */}
                  <div className="mb-4 flex-1">
                    <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <User className="h-5 w-5 text-[#E76832]" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;