import React from 'react';
import { CheckCircle } from 'lucide-react';
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



  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle title="О нас" />
        
        <div className="space-y-12">
          {/* Intro text */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              Мы — Илья и Артём. Два человека, которые давно работают с ИИ
            </p>
          </div>

          {/* Author cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Илья */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                        alt="Илья"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Илья</h3>
                    <p className="text-gray-600">Что делаю:</p>
                  </div>
                </div>
                
                {/* Facts */}
                <ul className="space-y-3">
                  {ilyaFacts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#E76832] flex-shrink-0 mt-0.5" />
                      <span className="text-base">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Артём */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white rounded-2xl" />
              </div>
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-700">А</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Артём</h3>
                    <p className="text-gray-600">Что делаю:</p>
                  </div>
                </div>
                
                {/* Facts */}
                <ul className="space-y-3">
                  {artemFacts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#E76832] flex-shrink-0 mt-0.5" />
                      <span className="text-base">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Why together */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 max-w-4xl mx-auto border border-[#E76832]/10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Почему мы объединились
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Илья отвечает за системность и понятные объяснения. Артём — за практическое применение и масштабирование. Вместе покрываем весь путь от теории до реальных результатов.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;