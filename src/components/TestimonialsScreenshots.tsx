import React, { useRef, useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

const TestimonialsScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonialImages = [
    'src/images/Отзывы/Отзыв 01.png',
    'src/images/Отзывы/Отзыв 02.png',
    'src/images/Отзывы/Отзыв 03.png',
    'src/images/Отзывы/Отзыв 04.png',
    'src/images/Отзывы/Отзыв 05.png',
    'src/images/Отзывы/Отзыв 06.png'
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth * 0.85; // 85% ширины контейнера
      const gap = 24; // 1.5rem = 24px
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === testimonialImages.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  const updateCurrentIndex = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth * 0.85;
      const gap = 24;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, testimonialImages.length - 1));
    }
  };

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Клавиатурная навигация
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prevIndex = currentIndex === 0 ? testimonialImages.length - 1 : currentIndex - 1;
        scrollToIndex(prevIndex);
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Отслеживание скролла
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateCurrentIndex();
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle title="Отзывы" />
        
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Основной контейнер с превью */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden px-[7.5%] py-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory'
              }}
            >
              {testimonialImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85%]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <img 
                    src={imageUrl}
                    alt={`Отзыв ${index + 1}`}
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#E76832] to-[#FFC24B] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>

          {/* Подсказка */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              <span className="hidden sm:inline">Используйте стрелки или кликайте по точкам</span>
              <span className="sm:hidden">Свайп для навигации</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        [ref="scrollContainerRef"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsScreenshots;