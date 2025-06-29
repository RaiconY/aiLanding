import React from 'react';
import { MessageCircle, Sparkles, Zap } from 'lucide-react';
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#042989] to-[#4A90E2] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-br from-[#E76832] to-[#FFC24B] rounded-full filter blur-[100px] opacity-5 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="Про авторов" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="space-y-12">
            {/* Intro text with animation */}
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                Мы — Илья и Артём
              </h3>
              <p className="text-lg text-gray-700">
                Два человека, которые давно увлечены ИИ и превратили его в реальный рабочий инструмент 💫
              </p>
            </div>

            {/* Author cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Илья */}
              <div 
                className="group relative animate-scale-in"
                style={{ animationDelay: '150ms' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-2xl" />
                </div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center space-y-6 transform group-hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[3px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img 
                          src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                          alt="Илья"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                      Илья
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Решаю задачи через системы и процессы. Продуктовый дизайнер, 6 лет помогаю стартапам запускать новые бизнесы и продукты
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-5 w-5 text-[#E76832]" />
                  </div>
                </div>
              </div>

              {/* Артём */}
              <div 
                className="group relative animate-scale-in"
                style={{ animationDelay: '300ms' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#042989] to-[#4A90E2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-2xl" />
                </div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center space-y-6 transform group-hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#042989] to-[#4A90E2] p-[3px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-3xl font-bold text-[#042989]">А</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#042989] to-[#4A90E2] bg-clip-text text-transparent">
                      Артём
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Проверяю всё на массовых результатах. За год с помощью ИИ и автоматизации набрал 600 000 подписчиков и 400+ млн охватов
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="h-5 w-5 text-[#042989]" />
                  </div>
                </div>
              </div>
            </div>

            {/* What you'll get section */}
            <div 
              className="space-y-8 max-w-4xl mx-auto animate-slide-up"
              style={{ animationDelay: '450ms' }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
                Что ты получишь
              </h4>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-[#E76832]/20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center flex-shrink-0 mt-0.5 transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p 
                      className="text-gray-700 leading-relaxed text-base sm:text-lg"
                      dangerouslySetInnerHTML={{ 
                        __html: benefit.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* What's inside */}
            <div 
              className="space-y-6 max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: '900ms' }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
                Что внутри гайда
              </h4>
              
              <div className="text-center space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Это не просто список промптов. Это <strong className="text-gray-900">рабочая система</strong>, которая помогает нам и нашим клиентам каждый день. Добавили ровно столько теории, чтобы ты понял, <strong className="text-gray-900">почему GPT работает именно так</strong>, и научился <strong className="text-gray-900">извлекать из него максимум</strong>.
                </p>
              </div>
            </div>

            {/* Final message with enhanced styling */}
            <div 
              className="relative max-w-4xl mx-auto group animate-scale-in"
              style={{ animationDelay: '1050ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-2xl p-[2px]">
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>
              <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 text-center transform group-hover:scale-[1.01] transition-transform duration-300">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed">
                  Этот гайд — результат сотен часов запусков, экспериментов и консультаций. Надеемся, он сэкономит тебе месяцы самостоятельного поиска 🫡
                </p>
              </div>
            </div>
            
            {/* Contact with enhanced animation */}
            <div 
              className="text-center animate-fade-in"
              style={{ animationDelay: '1200ms' }}
            >
              <a 
                href="https://t.me/Ilya_Plv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-[#E76832] hover:text-[#FFC24B] transition-all duration-300 font-medium text-lg group"
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>@Ilya_Plv</span>
                <div className="w-2 h-2 bg-[#E76832]/30 rounded-full animate-ping" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;