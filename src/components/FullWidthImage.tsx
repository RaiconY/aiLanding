import React, { useState } from 'react';

interface FullWidthImageProps {
  imageUrl: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Блокировка прокрутки страницы при открытом модальном окне
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Восстановление прокрутки страницы
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <img
            src={imageUrl}
            alt="ChatGPT Interface"
            loading="lazy"
            className="w-full h-auto object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200 rounded-lg shadow-md hover:shadow-lg"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Модальное окно с затемнением фона */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике на само изображение
          >
            <img
              src={imageUrl}
              alt="ChatGPT Interface - Enlarged View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FullWidthImage;