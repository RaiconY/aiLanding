import React from 'react';
import { MessageCircle, Sparkles, Zap, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutAuthor: React.FC = () => {
  const ilyaFacts = [
    'Продуктовый дизайнер, 6 лет помогаю стартапам запускать продукты',
    'Провожу воркшопы по ИИ для компаний',
    'Пишу статьи про ИИ и дизайн',
    'Провёл 30+ консультаций — клиенты экономят 15+ часов в неделю',
    'Специализация: превращаю сложное в понятные пошаговые системы'
  ];

  const artemFacts = [
    '5 лет работал в маркетинге P&G',
    'За год набрал 800,000 подписчиков используя ChatGPT',
    'Создал 5000+ рилс с 400+ млн просмотров',
    'Разработал Telegram-бота для автоматизации контента',
    'Специализация: масштабирование контента и автоматизация'
  ];

  const benefits = [
    'Поймёшь, как правильно работать с ChatGPT',
    'Научишься применять его в реальных задачах — от написания кода до создания контента',
    'Сэкономишь время на экспериментах — мы уже проверили, что работает, а что нет'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#042989] to-[#4A90E2] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="О нас" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="space-y-12">
            {/* Intro text */}
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                Мы — Илья и Артём. Два человека, которые давно работают с ИИ
              </h3>
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
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6 transform group-hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[3px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img 
                          src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                          alt="Илья"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                        Илья
                      </h4>
                      <p className="text-gray-600">Что делаю:</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {ilyaFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                        <CheckCircle className="h-4 w-4 text-[#E76832] flex-shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                  
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
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6 transform group-hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#042989] to-[#4A90E2] p-[3px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#042989]">А</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#042989] to-[#4A90E2] bg-clip-text text-transparent">
                        Артём
                      </h4>
                      <p className="text-gray-600">Что делаю:</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {artemFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                        <CheckCircle className="h-4 w-4 text-[#042989] flex-shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="h-5 w-5 text-[#042989]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Why together */}
            <div 
              className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 sm:p-8 text-center max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: '450ms' }}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Почему мы объединились
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Илья отвечает за системность и понятные объяснения. Артём — за практическое применение и масштабирование. Вместе покрываем весь путь от теории до реальных результатов.
              </p>
            </div>

            {/* What you'll get */}
            <div 
              className="space-y-6 max-w-4xl mx-auto animate-slide-up"
              style={{ animationDelay: '600ms' }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
                Что ты получишь
              </h4>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${750 + index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center flex-shrink-0 mt-0.5 transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div 
              className="text-center animate-fade-in"
              style={{ animationDelay: '1050ms' }}
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