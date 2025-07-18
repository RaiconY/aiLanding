import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

const TestimonialsScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<{index: number, url: string} | null>(null);

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

  // Блокировка/разблокировка скролла body при открытии модалки
  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimonial]);

  // Функции для навигации
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.getBoundingClientRect().width || 0;
      const gap = 32;
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.getBoundingClientRect().width || 0;
      const gap = 32;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (index: number, url: string) => {
    setSelectedTestimonial({ index, url });
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionTitle title="Отзывы" />
          
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
            <div className="overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
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
                      flex-shrink-0 group relative cursor-pointer
                      w-72 sm:w-80 md:w-96
                      transform transition-all duration-700 ease-out
                      hover:scale-105 hover:z-10
                      animate-scale-in
                    `}
                    style={{ 
                      scrollSnapAlign: 'center',
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      {/* Ограничение высоты с градиентом */}
                      <div className="relative max-h-[600px] overflow-hidden">
                        {/* Image */}
                        <img 
                          src={imageUrl}
                          alt={`Отзыв ${index + 1}`}
                          className="w-full h-auto object-contain transition-all duration-500 group-hover:brightness-105"
                          loading="lazy"
                        />
                        
                        {/* Fade gradient для обрезанных отзывов */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                      </div>
                      
                      {/* Expand button */}
                      <button
                        onClick={() => openModal(index, imageUrl)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                      >
                        <Maximize2 className="h-5 w-5 text-gray-700" />
                      </button>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-black/5 group-hover:to-black/2 transition-all duration-500 pointer-events-none" />
                      
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#E76832]/20 to-[#FFC24B]/20 blur-xl -z-10" />
                      
                      {/* Click to expand hint */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                          <span className="text-sm text-gray-700 font-medium">Нажмите для увеличения</span>
                        </div>
                      </div>
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

      {/* Modal */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
            
            {/* Full size image */}
            <div className="overflow-auto max-h-[90vh]">
              <img
                src={selectedTestimonial.url}
                alt={`Отзыв ${selectedTestimonial.index + 1} - полный размер`}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Navigation in modal */}
            {testimonialImages.length > 1 && (
              <>
                {selectedTestimonial.index > 0 && (
                  <button
                    onClick={() => setSelectedTestimonial({
                      index: selectedTestimonial.index - 1,
                      url: testimonialImages[selectedTestimonial.index - 1]
                    })}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                )}
                
                {selectedTestimonial.index < testimonialImages.length - 1 && (
                  <button
                    onClick={() => setSelectedTestimonial({
                      index: selectedTestimonial.index + 1,
                      url: testimonialImages[selectedTestimonial.index + 1]
                    })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                )}
              </>
            )}
            
            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <span className="text-sm font-medium text-gray-700">
                {selectedTestimonial.index + 1} из {testimonialImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsScreenshots;