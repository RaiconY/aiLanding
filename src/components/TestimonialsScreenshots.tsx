import React from 'react';
import { User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const TestimonialsScreenshots: React.FC = () => {
  const testimonials = [
    {
      name: 'Евгений П.',
      position: 'Дизайнер',
      text: 'Мне очень понравилось как ты расписываешь для новичков — я кайфанул уже с самого пункта настройки.',
      imageUrl: 'src/images/Отзывы/Отзыв 01.png'
    },
    {
      name: 'Максим К.',
      position: 'Владелец компании',
      text: 'Классный документ, структурирован и без воды. Я бы его прикупил у тебя для компании.',
      imageUrl: 'src/images/Отзывы/Отзыв 02.png'
    },
    {
      name: 'Наташа Я.',
      position: 'Основатель СММ агентства',
      text: 'Очень понравилось, как детально всё расписано. Особенно впечатлил бот по SEO статьям 🤣',
      imageUrl: 'src/images/Отзывы/Отзыв 03.png'
    },
    {
      name: 'Александра Д.',
      position: 'ML Менеджер продукта',
      text: 'Это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься 💕',
      imageUrl: 'src/images/Отзывы/Отзыв 04.png'
    },
    {
      name: 'Александр С.',
      position: 'Предприниматель',
      text: 'Первые три дня использования ChatGPT после изучения материалов — это просто кайф полнейший!',
      imageUrl: 'src/images/Отзывы/Отзыв 05.png'
    },
    {
      name: 'Дмитрий В.',
      position: 'Маркетолог',
      text: 'Теперь решаю любые вопросы мгновенно: от планирования покупок до сложных рабочих задач 🔥',
      imageUrl: 'src/images/Отзывы/Отзыв 06.png'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTitle title="Отзывы со скриншотами" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative">
                {/* Screenshot */}
                <div className="overflow-hidden">
                  <img 
                    src={testimonial.imageUrl}
                    alt={`Скриншот отзыва от ${testimonial.name}`}
                    className="w-full max-h-64 object-contain bg-gray-50 transform group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  {/* Author info */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
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
                  
                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {testimonial.text}
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

export default TestimonialsScreenshots;