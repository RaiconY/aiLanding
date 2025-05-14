import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься. Потому что то, что ты делаешь — это правда очень красиво и очень структурно\n\nВторое, что мне очень понравилось — ты пишешь с примерами. Очень классно, что они есть 😋\n",
      author: ""
    },
    {
      text: "Первые три дня использования ChatGPT после изучения материалов — это просто кайф полнейший! \n\nЯ теперь решаю любые вопросы мгновенно: от планирования покупок в магазине до сложных рабочих задач. \n\nВсё стало настолько легко, быстро и информативно, что не представляю, как раньше обходился без этого\n",
      author: ""
    },
    {
      text: " Крутой авторский контент и откликается многое. Я когда начинаю думать о том, какие возможности открываются с развитием ИИ, мне в прямом смысле слова на месте не сидится\n",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Первый отзыв - слева */}
          <div 
            className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative"
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
                {/* ИСПРАВЛЕННЫЙ БЛОК ОТЗЫВА */}
                <div className="relative text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
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
                    
                    {testimonials[0].text}
                    
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
                
                {testimonials[0].author && (
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-4">{testimonials[0].author}</p>
                )}
              </div>
            </div>
          </div>

          {/* Второй и третий отзывы - справа, друг под другом */}
          <div className="flex flex-col gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl relative"
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
                      <MessageSquare className="h-6 w-6 text-[#E76832]" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {!testimonial.text.includes("тут будет") && !testimonial.text.includes("конечно же") ? (
                      <div className="relative text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
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
                          
                          {testimonial.text}
                          
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
                    ) : (
                      <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {testimonial.text}
                      </div>
                    )}
                    
                    {testimonial.author && (
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-4">{testimonial.author}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;