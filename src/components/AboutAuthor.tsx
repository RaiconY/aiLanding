import React from 'react';
import { MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutAuthor: React.FC = () => {
  const benefits = [
    {
      text: 'Поймёшь, **как заставить ChatGPT работать правильно**'
    },
    {
      text: 'Узнаешь, **что с этим делать в реальных задачах** — от кода и анализа до контента и идей'
    },
    {
      text: '**Сэкономишь месяцы тестов** — мы уже всё проверили на себе и клиентах'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Про авторов" />
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="space-y-12">
          {/* Общий текст о нас */}
          {/* <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">
              Мы — Илья и Артём. Два человека, которые давно увлечены ИИ и превратили его в реальный рабочий инструмент 💫
            </h3>
          </div> */}

          {/* Карточки авторов */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Илья */}
            <div className="group relative border-2 border-[#E76832]/40 rounded-2xl hover:scale-[1.05] transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[3px] shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                        alt="Илья"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Илья</h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Решаю задачи через системы и процессы. Продуктовый дизайнер, 6 лет помогаю стартапам запускать новые бизнесы и продукты
                  </p>
                </div>
              </div>
            </div>

            {/* Артём */}
            <div className="group relative border-2 border-[#042989]/40 rounded-2xl hover:scale-[1.05] transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#042989] to-[#4A90E2] p-[4px] shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="/src/images/ArtemImage.png"
                        alt="Артём"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Артём</h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Проверяю всё на массовых результатах. За год с помощью ИИ и автоматизации набрал 600 000 подписчиков и 400+ млн охватов
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll get */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              Что ты получишь
            </h4>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl border border-[#E76832]/20"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p 
                    className="text-gray-700 leading-relaxed text-base sm:text-lg"
                    dangerouslySetInnerHTML={{ 
                      __html: benefit.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* What's inside */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              Что внутри гайда
            </h4>
            
            <div className="text-center space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Это не просто список промптов. Это <strong>рабочая система</strong>, которая помогает нам и нашим клиентам каждый день. Добавили ровно столько теории, чтобы ты понял, <strong>почему GPT работает именно так</strong>, и научился <strong>извлекать из него максимум</strong>.
              </p>
            </div>
          </div>

          {/* Final message */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-2xl p-[2px]">
              <div className="h-full w-full bg-white rounded-2xl"></div>
            </div>
            <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed">
                Этот гайд — результат сотен часов запусков, экспериментов и консультаций. Надеемся, он сэкономит тебе месяцы самостоятельного поиска 🫡
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center">
            <a 
              href="https://t.me/Ilya_Plv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-[#E76832] hover:text-[#FFC24B] transition-colors duration-300 font-medium text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>@Ilya_Plv</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;