import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const UpdatedTestimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикасаешься 💕\n\nПотому что то, что ты делаешь — это правда очень красиво и очень структурно\n\nВторое, что мне очень понравилось — ты пишешь с большим количеством примеров. Очень помогает, когда они есть",
      name: "Александра К.",
      position: "Продуктовый коуч"
    },
    {
      text: "Первые три дня использования ChatGPT после изучения материалов — это просто кайф полнейший!\n\nЯ теперь решаю любые вопросы мгновенно: от планирования покупок в магазине до сложных рабочих задач 🔥\n\nВсё стало настолько легко и информативно, что не представляю, как раньше обходился без этого",
      name: "Дмитрий С.",
      position: "Предприниматель"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Первые впечатления" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 md:p-5 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
              </div>

              <div className="relative flex flex-col h-full">
                {/* Author info at the top */}
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
                
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Testimonial text */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                      {testimonial.text}
                    </p>
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

export default UpdatedTestimonials;