import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const Testimonials = {
  source: "voiceMessage",
  author: "Не указано",
  highlights: [
    "🎨 Эстетическое удовольствие — всё очень красиво и структурно",
    "📘 Проработка глав — приятно изучать содержание",
    "🧠 Примеры — классно, что они есть, местами их даже не хватило"
  ],
  fullText: `
    Я наконец добралась до твоего гайда и решила записать тебе голосовым свои впечатления и мысли.

    Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься. 
    Потому что это правда очень красиво, очень структурно — то, что ты делаешь.

    Это такое первое впечатление, когда я в Notion стала проходиться и по главам, и смотреть внутри.

    Второе, что мне очень понравилось — ты пишешь с примерами. Где-то очень классно, что они есть, 
    а где-то мне их не хватило.
  `
};
  {/* Отзывы
  const testimonials = [
    {
      text: "Здесь скоро появится первый отзыв",
      highlight: "Может быть твой",
      author: ""
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
*/}
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
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-2xl" />
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
                  <p className="text-gray-700 text-lg leading-relaxed transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    {testimonial.text}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <p 
                      className="font-medium transform group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {testimonial.highlight}
                    </p>
                    {testimonial.author && (
                      <p className="text-gray-600 font-medium">{testimonial.author}</p>
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