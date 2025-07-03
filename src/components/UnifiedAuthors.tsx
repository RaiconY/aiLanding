import React from 'react';
import { ExternalLink, Star, Award, Zap, Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const UnifiedAuthors: React.FC = () => {
  const authors = [
    {
      name: 'Илья Плужников',
      position: 'Отвечаю за системность и структуру',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/My Real Image.jpg',
      bullets: [
        { text: 'Продуктовый дизайнер с 6-летним опытом', icon: <Award className="h-3 w-3 text-white" /> },
        { text: 'Написал 40+ статей по ИИ и бизнесу', icon: <Lightbulb className="h-3 w-3 text-white" /> },
        { text: 'И провёл более 30 персональных консультаций по ИИ', icon: <Users className="h-3 w-3 text-white" /> },
        { text: 'В 2025 году ушёл из найма и полностью погрузился в ИИ и создание своих продуктов', icon: <Target className="h-3 w-3 text-white" /> }
      ],
      experience: 'Специализируюсь на превращении сложных технологий в понятные решения. Проводил воркшопы для самых больших IT-компаний РФ. Мой подход — системность, структурированная подача материала и фокус на практическом применении',
      links: [
        { text: '@Ilya_Plv', url: 'https://t.me/Ilya_Plv' }
      ],
      gradient: 'from-[#E76832] to-[#FFC24B]'
    },
    {
      name: 'Артём Григорец',
      position: 'Отвечаю за масштаб и автоматизацию',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Artem Real Image.jpg',
      bullets: [
        { text: 'Работал 5 лет в маркетинге P&G', icon: <Star className="h-3 w-3 text-white" /> },
        { text: 'За год с помощью ИИ набрал 800 000 подписчиков', icon: <TrendingUp className="h-3 w-3 text-white" /> },
        { text: 'За это время создал более 5000 рилс и получил 400+ млн просмотров', icon: <Zap className="h-3 w-3 text-white" /> },
        { text: 'Ушёл из найма и строю бизнес на ИИ', icon: <Target className="h-3 w-3 text-white" /> }
      ],
      experience: 'Эксперт по автоматизации контента и масштабированию в социальных сетях. Знаю, как превратить ChatGPT и другие ИИ инструменты в мощный инструмент для создания контента и построения аудитории',
      links: [
        { text: '@A_Grigorets', url: 'https://t.me/A_Grigorets' }
      ],
      gradient: 'from-[#042989] to-[#4A90E2]'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#E76832]/20 rounded-full filter blur-[100px] -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#042989]/20 rounded-full filter blur-[100px] translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Авторы гайда
            </h2>
            <div 
              className="h-1 w-24 rounded mx-auto"
              style={{
                background: 'linear-gradient(135deg, #E76832, #FFC24B)'
              }}
            />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            Мы — Илья и&nbsp;Артём
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Два эксперта, которые объединили свой опыт, чтобы создать подробный и подробный гайд по&nbsp;ChatGPT на&nbsp;русском языке
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {authors.map((author, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-xl animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${author.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-3xl" />
              </div>

              <div className="relative">
                {/* Header with name and position */}
                <div className="p-6 pb-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h3>
                    <p className={`text-base font-medium bg-gradient-to-r ${author.gradient} bg-clip-text text-transparent`}>
                      {author.position}
                    </p>
                  </div>
                </div>

                {/* Photo */}
                <div className="px-6 mb-4">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 transform group-hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-6 pb-6">
                  {/* Description - bullets with different icons */}
                  <div className="space-y-3 mb-4">
                    {author.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${author.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 transform group-hover:rotate-12 transition-all duration-300`}>
                          {bullet.icon}
                        </div>
                        <span className="text-gray-700 text-base leading-relaxed">{bullet.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Experience */}
                  <p className="text-gray-600 leading-relaxed text-base mb-4">
                    {author.experience}
                  </p>

                  {/* Links */}
                  <div className="space-y-2">
                    {author.links.map((link, i) => (
                      <div key={i}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm flex items-center gap-2 group/link"
                        >
                          <span>{link.text}</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced synergy section */}
        <div className="relative mt-16">
          {/* Background decorative elements for the synergy section */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E76832]/5 via-transparent to-[#042989]/5 rounded-3xl" />
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[60px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-[#042989] to-[#4A90E2] rounded-full filter blur-[60px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-xl">
            <div className="text-center">
              {/* Decorative icon with gradient shimmer */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full animate-gradient-shimmer p-[2px]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B]" />
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#042989] to-[#4A90E2]" />
                  </div>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-semibold text-gray-900 max-w-4xl mx-auto leading-relaxed">
                Вместе у&nbsp;нас получилось создать отличный продукт, который проведет тебя от&nbsp;теории до&nbsp;реальных результатов
              </p>
              
              {/* Subtle accent line */}
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-32 rounded-full bg-gradient-to-r from-[#E76832] via-[#FFC24B] to-[#042989]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedAuthors;