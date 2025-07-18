import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const TestimonialsScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialImages = [
    'src/images/Отзывы/Отзыв 01.png',
    'src/images/Отзывы/Отзыв 02.png',
    'src/images/Отзывы/Отзыв 03.png',
    'src/images/Отзывы/Отзыв 04.png',
    'src/images/Отзывы/Отзыв 05.png',
    'src/images/Отзывы/Отзыв 06.png'
  ];

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const smoothScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth * 0.85 + 16 : 320; // 85vw + gap для мобилки
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Обновляем индекс для индикаторов
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(testimonialImages.length - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth * 0.85 + 16 : 320;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // Автоматическое прокручивание
  useEffect(() => {
    const interval = setInterval(() => {
      if (canScrollRight) {
        smoothScroll('right');
      } else {
        scrollToIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [canScrollRight, currentIndex]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-20 -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-20 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#FFC24B] to-[#E76832] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTitle title="Отзывы" />
        
        {/* Main carousel container */}
        <div className="relative group">
          {/* Navigation buttons - скрыты на мобилке */}
          <button
            onClick={() => smoothScroll('left')}
            disabled={!canScrollLeft}
            className={`hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white group-hover:opacity-100'
            } opacity-0 group-hover:opacity-100`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={() => smoothScroll('right')}
            disabled={!canScrollRight}
            className={`hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white group-hover:opacity-100'
            } opacity-0 group-hover:opacity-100`}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Carousel content */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Gradient fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-orange-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none" />
            
            <div
              ref={scrollContainerRef}
              className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide py-4 px-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {testimonialImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 sm:w-96 animate-scale-in group/card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 p-3 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group-hover/card:bg-white/90">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                      <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl" />
                    </div>
                    
                    <div className="relative">
                      <img 
                        src={imageUrl}
                        alt={`Отзыв ${index + 1}`}
                        className="w-full h-auto object-contain rounded-xl transition-all duration-500 group-hover/card:scale-[1.01]"
                        loading="lazy"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-[#E76832] to-[#FFC24B] scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Enhanced scroll hint */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-white/20">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#E76832] rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-[#FFC24B] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-1 bg-[#E76832] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <p className="text-gray-600 text-sm font-medium">
              <span className="hidden sm:inline">Прокрутите для просмотра всех отзывов</span>
              <span className="sm:hidden">Свайп для просмотра отзывов</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsScreenshots;