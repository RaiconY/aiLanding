import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsScreenshots = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonialImages = [
    'src/images/Отзывы/Отзыв 01.png',
    'src/images/Отзывы/Отзыв 02.png',
    'src/images/Отзывы/Отзыв 03.png',
    'src/images/Отзывы/Отзыв 04.png',
    'src/images/Отзывы/Отзыв 05.png',
    'src/images/Отзывы/Отзыв 06.png'
  ];

  // Проверка возможности скролла
  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      return () => container.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  // Функции для навигации
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 32; // gap-8 = 32px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 32; // gap-8 = 32px
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы</h2>
          <div 
            className="h-1 w-24 rounded mx-auto"
            style={{
              background: 'linear-gradient(135deg, #E76832, #FFC24B)'
            }}
          />
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              canScrollLeft 
                ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="h-6 w-6 mx-auto" />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              canScrollRight 
                ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="h-6 w-6 mx-auto" />
          </button>

          {/* Horizontal scroll carousel */}
          <div className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 lg:gap-8 min-w-max px-16 scroll-smooth"
              style={{ 
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
              }}
            >
              {testimonialImages.map((imageUrl, index) => (
                <div
                  key={index} 
                  className={`
                    flex-shrink-0 group relative
                    w-72 sm:w-80 md:w-96
                    transform transition-all duration-700 ease-out
                    hover:scale-105 hover:z-10
                  `}
                  style={{ 
                    scrollSnapAlign: 'center',
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-black/10 group-hover:to-black/5 transition-all duration-500 z-10" />
                    
                    {/* Image */}
                    <img 
                      src={imageUrl}
                      alt={`Отзыв ${index + 1}`}
                      className="w-full h-auto object-contain transition-all duration-500 group-hover:brightness-105"
                      loading="lazy"
                    />
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#E76832]/20 to-[#FFC24B]/20 blur-xl -z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll hint */}
        <div className="text-center mt-8 space-y-2">
          <div className="flex justify-center gap-2">
            {testimonialImages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-30"
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            <span className="hidden sm:inline">← Прокрутите горизонтально для просмотра всех отзывов →</span>
            <span className="sm:hidden">← Свайпните для просмотра →</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsScreenshots;