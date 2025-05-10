import React from 'react';

const StudyTime: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div 
          className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-0.5 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl group"
        >
          <div 
            className="bg-white rounded-xl px-6 py-5 flex flex-col md:flex-row items-center relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#E76832]/5 to-[#FFC24B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Иллюстрация единорога (плейсхолдер) */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 md:mr-8 mb-4 md:mb-0 relative z-10">
              {/* Здесь будет изображение единорога */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src="/path/to/unicorn-image.png" 
                  alt="Единорог" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Если изображение недоступно, можно использовать этот плейсхолдер */}
                {/* <div className="w-full h-full bg-gradient-to-r from-[#E76832]/20 to-[#FFC24B]/20 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Изображение единорога</span>
                </div> */}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative flex-1 text-center md:text-left">
              <h4 
                className="text-xl sm:text-2xl font-semibold mb-2 bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent transform group-hover:scale-[1.02] transition-transform duration-300"
              >
                Пару дней применения практик из гайда заменят год самостоятельного изучения
              </h3>
              <p 
                className="text-gray-700 text-base transform group-hover:translate-y-[-2px] transition-transform duration-300"
              >
                Я объединил 2 года своего опыта и сотни часов экспериментов в систему, которая работает с первого применения
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTime;