import React from 'react';
import SectionTitle from './SectionTitle';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Сколько стоит" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <p className="text-xl text-gray-900">
                Стартовая цена гайда — <span className="font-semibold">2&nbsp;990&nbsp;₽</span>
              </p>
              <p className="text-lg text-gray-700">
                После добавления нового контента цена вырастет до 5&nbsp;990&nbsp;₽
              </p>
              <p className="text-lg text-gray-700">
                Если ваш час стоит более 3&nbsp;000&nbsp;₽, то этот гайд окупится уже через пару часов
              </p>
            </div>

            <div className="flex flex-col items-center pt-8 border-t border-gray-100">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-3xl font-bold text-gray-400 line-through">
                  5&nbsp;990&nbsp;₽
                </span>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                  2&nbsp;990&nbsp;₽
                </span>
              </div>

              <a 
                href="https://payform.ru/c97mLiR/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Получить гайд 🔥
              </a>
              
              {/* Мелкий текст под кнопкой с увеличенной шириной */}
              <p className="mt-4 text-sm text-gray-500 max-w-xl w-full px-4 sm:px-8 text-center">
                После нажатия кнопки вы перейдете на защищенную страницу оплаты. После оплаты сразу получите ссылку на гайд. 
                По всем вопросам можете писать <a 
                  href="https://t.me/A_Grigorets" 
                  className="text-[#E76832] hover:text-[#FFC24B] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >@A_Grigorets</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;