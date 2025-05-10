import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Я наконец добралась до твоего гайда и решила записать тебе голосовым свои впечатления и мысли. Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикоснешься. Потому что это правда очень красиво, очень структурно то, что ты делаешь. Это такое первое впечатление, когда я в ноушене стала проходиться и по главам, и смотреть внутри. Второе, что мне очень понравилось, что ты пишешь с примерами. И где-то очень классно, что они есть, где-то мне их не хватило. И это просто так, идея на подумать. Может быть, в каких-то главах прямо добавлять еще побольше примеров или промтов прямо внутри главы.",
      highlight: "Отдельное эстетическое удовольствие",
      author: "Ирина"
    },
    {
      text: "А здесь второй отзыв",
      highlight: "Тоже может быть твой",
      author: ""
    },
    {
      text: "И конечно же третий",
      highlight: "Ну а вдруг...",
      author: ""
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Отзывы" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl ${index === 0 ? 'md:col-span-3 lg:col-span-2' : ''}`}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    {index === 0 ? (
                      <Star className="h-6 w-6 text-[#E76832]" />
                    ) : (
                      <MessageSquare className="h-6 w-6 text-[#E76832]" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <p 
                      className="font-medium text-lg transform group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {testimonial.highlight}
                    </p>
                    {testimonial.author && (
                      <p className="text-gray-600 font-medium transform group-hover:translate-y-[-2px] transition-transform duration-300">
                        {testimonial.author}
                      </p>
                    )}
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