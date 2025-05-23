import React from 'react';
import { MessageSquare, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Евгений',
      position: 'дизайнер',
      text: 'Мне очень понравилось как ты расписываешь для новичков — я кайфанул уже с самого пункта настройки. Оказывается в ChatGPT можно в настройках профиля очень много всего делать. Для меня это стопудово уже очень полезная информация.'
    },
    {
      name: 'Максим',
      position: 'владелец большой компании',
      text: 'Классный документ, структурирован и без воды. Я бы его прикупил у тебя для компании, чтобы ЛПР могли юзать.'
    },
    {
      name: 'Наташа',
      position: 'владелица СММ агентства',
      text: 'Самое полезное для меня — бот по SEO статьям 🤣 Это офигенно, что он может прямо писать за нас эти статьи. Полезно было в целом про функционал, про то, как чат думает. Про генерацию картинок круто — я это команде еще расскажу.'
    },
    {
      name: 'Александра',
      position: 'продуктовый коуч',
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
        <SectionTitle title="Отзывы наших клиентов" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      {index % 2 === 0 ? 
                        <MessageSquare className="h-6 w-6 text-[#E76832]" /> :
                        <Briefcase className="h-6 w-6 text-[#E76832]" />
                      }
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="relative text-base sm:text-lg text-gray-700 leading-relaxed">
                  <div className="relative">
                    <div 
                      className="float-left mr-2 text-4xl font-serif leading-none"
                      style={{ 
                        height: "20px",
                        margin: "0 8px 2px 0",
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      "
                    </div>
                    
                    <div className="whitespace-pre-line">{testimonial.text}</div>
                    
                    <span 
                      className="inline-block text-4xl font-serif leading-none ml-1"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: "relative",
                        top: "4px"
                      }}
                    >
                      "
                    </span>
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

export default Testimonials;