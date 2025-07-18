import React from 'react';
import SectionTitle from './SectionTitle';

const TestimonialsScreenshots: React.FC = () => {
  const testimonialImages = [
    'src/images/Отзывы/Отзыв 01.png',
    'src/images/Отзывы/Отзыв 02.png',
    'src/images/Отзывы/Отзыв 03.png',
    'src/images/Отзывы/Отзыв 04.png',
    'src/images/Отзывы/Отзыв 05.png',
    'src/images/Отзывы/Отзыв 06.png'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTitle title="Отзывы" />
        
        {/* Horizontal scroll carousel */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 lg:gap-8 min-w-max">
          {testimonialImages.map((imageUrl, index) => (
              <div
              key={index} 
                className="flex-shrink-0 w-80 sm:w-96 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={imageUrl}
                alt={`Отзыв ${index + 1}`}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          ))}
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">← Прокрутите горизонтально для просмотра всех отзывов →</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsScreenshots;