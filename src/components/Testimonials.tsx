import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься\n\nПотому что то, что ты делаешь — это правда очень красиво и очень структурно\n\nВторое, что мне очень понравилось — ты пишешь с примерами. Очень классно, что они есть 😋",
      author: ""
    },
    {
      text: "А тут будет второй отзыв",
      author: ""
    },
    {
      text: "И конечно же третий",
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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Первый отзыв занимает больше места слева */}
          <div className="md:col-span-6 lg:col-span-7">
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative h-full"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#E76832]" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {testimonials[0].text}
                  </div>
                  {testimonials[0].author && (
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mt-4">{testimonials[0].author}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Колонка для двух правых отзывов */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            {/* Второй отзыв */}
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-[#E76832]" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {testimonials[1].text}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Третий отзыв */}
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-[#E76832]" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {testimonials[2].text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;