import React from 'react';
import { MessageSquare } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Здесь скоро появится первый отзыв",
      highlight: "Может быть даже твой",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      text: "А здесь второй отзыв",
      highlight: "Тоже может быть твой",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      text: "И конечно же третий",
      highlight: "Ну а вдруг...",
      icon: <MessageSquare className="h-6 w-6" />
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
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>

              <div className="relative flex flex-col items-center text-center gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px]"
                >
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    {testimonial.icon}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    {testimonial.text}
                  </p>
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