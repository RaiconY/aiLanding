import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const UnifiedAuthors: React.FC = () => {
  const authors = [
    {
      name: 'Илья Плужников',
      position: 'Отвечаю за системность и структуру',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/My Real Image.jpg',
      description: 'Продуктовый дизайнер с 6-летним опытом. За 1.5 года глубокого изучения ChatGPT провёл 30+ персональных консультаций по ИИ и написал 50+ статей по ИИ и бизнесу.',
      experience: 'Специализируюсь на превращении сложных технологий в понятные решения. Автор воркшопов по внедрению ИИ в компаниях. Мой подход — системность, структурированная подача материала и фокус на практическом применении.',
      links: [
        { text: '@Ilya_Plv', url: 'https://t.me/Ilya_Plv' },
        { text: 'Телеграм-канал @iliaprovse', url: 'https://t.me/iliaprovse' }
      ],
      gradient: 'from-[#E76832] to-[#FFC24B]'
    },
    {
      name: 'Артём',
      position: 'Отвечаю за масштаб и автоматизацию',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Artem Real Image.jpg',
      description: '5 лет в маркетинге P&G. За год с ChatGPT набрал 800K подписчиков, создал 5000+ рилс с 400+ млн просмотров.',
      experience: 'Эксперт по автоматизации контента и масштабированию в социальных сетях. Знаю, как превратить ChatGPT в мощный инструмент для создания контента и построения аудитории.',
      links: [
        { text: '@artem_channel', url: 'https://t.me/artem_channel' }
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
              # кто мы?
            </h2>
            <div 
              className="h-1 w-24 rounded mx-auto"
              style={{
                background: 'linear-gradient(135deg, #E76832, #FFC24B)'
              }}
            />
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Мы — Илья и Артём
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Два эксперта, которые объединили свой опыт, чтобы создать самый полный гайд по ChatGPT на русском языке
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
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    {author.description}
                  </p>

                  {/* Experience */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
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

        {/* Synergy section */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-3xl p-6 mt-12 border border-gray-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Почему мы объединились
            </h3>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Илья отвечает за системность и понятные объяснения. Артём — за практическое применение и масштабирование. 
              <span className="font-semibold text-gray-900"> Вместе мы покрываем весь путь от теории до реальных результатов.</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a 
            href="https://t.me/Ilya_Plv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E76832] to-[#042989] text-white px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>Написать в Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UnifiedAuthors;