import React from 'react';
import { MessageCircle, Sparkles, Users, CheckCircle, Star, Award } from 'lucide-react';

const AboutAuthor: React.FC = () => {
  const ilyaAchievements = [
    'Продуктовый дизайнер с 6-летним опытом',
    'Провёл 30+ консультаций по ИИ',
    'Специалист по превращению сложного в простое',
    'Автор воркшопов для компаний'
  ];

  const artemAchievements = [
    '5 лет в маркетинге P&G',
    '800K подписчиков за год с ChatGPT',
    '5000+ рилс с 400+ млн просмотров',
    'Эксперт по автоматизации контента'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#E76832]/20 rounded-full filter blur-[100px] -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#042989]/20 rounded-full filter blur-[100px] translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E76832] to-[#042989] text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>Авторы гайда</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Мы — Илья и Артём
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Два эксперта, которые объединили свой опыт, чтобы создать самый полный гайд по ChatGPT на русском языке
          </p>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Илья */}
          <div className="group">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100">
              {/* Аватар и имя */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                      alt="Илья"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Илья Плужников</h3>
                  <p className="text-lg text-[#E76832] font-medium">Системность и структура</p>
                </div>
              </div>

              {/* Достижения */}
              <div className="space-y-4">
                {ilyaAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Артём */}
          <div className="group">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100">
              {/* Аватар и имя */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/ArtemImage.png"
                      alt="Артём"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#042989] to-[#4A90E2] rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Артём</h3>
                  <p className="text-lg text-[#042989] font-medium">Масштаб и автоматизация</p>
                </div>
              </div>

              {/* Достижения */}
              <div className="space-y-4">
                {artemAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#042989] to-[#4A90E2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Синергия */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-3xl p-8 mb-12 border border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#E76832] to-[#042989] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему мы объединились
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Илья отвечает за системность и понятные объяснения. Артём — за практическое применение и масштабирование. 
              <span className="font-semibold text-gray-900"> Вместе мы покрываем весь путь от теории до реальных результатов.</span>
            </p>
          </div>
        </div>

        {/* Что получишь */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: 'Системный подход',
              description: 'Поймёшь, как правильно работать с ChatGPT от основ до продвинутых техник'
            },
            {
              icon: <Star className="h-6 w-6" />,
              title: 'Практические навыки',
              description: 'Научишься применять ИИ в реальных задачах — от кода до контента'
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: 'Проверенный опыт',
              description: 'Сэкономишь время на экспериментах — мы уже проверили, что работает'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E76832] to-[#042989] rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://t.me/Ilya_Plv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E76832] to-[#042989] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Написать в Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;