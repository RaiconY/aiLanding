import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const NewTestimonials: React.FC = () => {
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
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/50 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>

              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-2">
                  <span 
                    className="text-4xl"
                    style={{ 
                      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    "
                  </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle 
                      className="h-5 w-5" 
                      style={{ color: '#E76832' }}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Decorative stars */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        style={{ color: '#FFC24B' }}
                      />
                    ))}
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

export default NewTestimonials;