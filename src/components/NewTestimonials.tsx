import React from 'react';
import { MessageCircle, Star, User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const EnhancedTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Евгений',
      position: 'Дизайнер',
      text: 'Мне очень понравилось как ты расписываешь для новичков — я кайфанул уже с самого пункта настройки. Оказывается в ChatGPT можно в настройках профиля очень много всего делать. Для меня это стопудово уже очень полезная информация.'
    },
    {
      name: 'Максим',
      position: 'Владелец большой компании',
      text: 'Классный документ, структурирован и без воды. Я бы его прикупил у тебя для компании, чтобы ЛПР могли юзать.'
    },
    {
      name: 'Наташа',
      position: 'Владелица СММ агентства',
      text: 'Самое полезное для меня — бот по SEO статьям 🤣 Это офигенно, что он может прямо писать за нас эти статьи. Полезно было в целом про функционал, про то, как чат думает. Про генерацию картинок круто — я это команде еще расскажу.'
    },
    {
      name: 'Александра',
      position: 'Продуктовый коуч',
      text: 'Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься 💕\n\nПотому что то, что ты делаешь — это правда очень красиво и очень структурно\n\nВторое, что мне очень понравилось — ты пишешь с большим количеством примеров. Очень помогает, когда они есть'
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
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 md:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col h-full">
                {/* Quote marks */}
                <div 
                  className="text-5xl font-serif leading-none absolute -top-3 -left-1 transform -translate-y-1/2"
                  style={{ 
                    background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.8
                  }}
                >
                  "
                </div>
                
                {/* Content */}
                <div className="pt-4 flex flex-col h-full">
                  {/* Testimonial text */}
                  <div className="mb-6 flex-1">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <User className="h-6 w-6 text-[#E76832]" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>

                {/* End quote mark */}
                <div 
                  className="text-5xl font-serif leading-none absolute bottom-4 right-6"
                  style={{ 
                    background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.8
                  }}
                >
                  "
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