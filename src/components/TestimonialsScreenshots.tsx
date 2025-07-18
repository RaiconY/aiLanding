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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle title="Отзывы" />
        
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {testimonialImages.map((imageUrl, index) => (
              <div key={index} className="w-80 sm:w-96 flex-shrink-0">
                <img 
                  src={imageUrl}
                  alt={`Отзыв ${index + 1}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsScreenshots;