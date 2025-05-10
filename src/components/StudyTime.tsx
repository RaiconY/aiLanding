import React from 'react';
import { BookOpen, Clock } from 'lucide-react'; // импортируем подходящие иконки

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
            
            {/* Illustration on left */}
            <div className="flex-shrink-0 w-24 h-24 md:mr-8 mb-4 md:mb-0 relative z-10">
              <div className="w-full h-full bg-gradient-to-r from-[#E76832]/10 to-[#FFC24B]/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E76832]/20 to-[#FFC24B]/20 flex items-center justify-center">
                  <Clock 
                    className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" 
                    style={{ 
                      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }} 
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative flex-1 text-center md:text-left">
              <h3 
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