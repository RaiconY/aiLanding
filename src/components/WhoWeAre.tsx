import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  const authors = [
    {
      name: 'Глеб Калинин',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/My Real Image.jpg',
      description: 'Гик, коуч (терапия АСТ), художник. Разработчик AI-плагинов для Обсидиана. 20 лет в IT и стартапах. Ex-CPO Ozon.travel, Ostrovok, Ценципер.',
      location: 'Берлин',
      links: [
        { text: 'glebkalinin.ru', url: 'https://glebkalinin.ru' },
        { text: '@glebkalinin', url: 'https://t.me/glebkalinin' }
      ],
      telegram: 'Телеграм-канал «Опытным путём»'
    },
    {
      name: 'Александр Поваляев',
      image: 'https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Artem Real Image.jpg',
      description: 'ex стратег в Hints. Автор сообщества [[неназванное]] по коллективным практикам исследования себя. Гик-аналитик, интервьюер, соматический практик, видеомейкер.',
      location: 'Лиссабон',
      links: [
        { text: '@ inside insanity', url: 'https://t.me/inside_insanity' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full filter blur-[128px] opacity-5 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gray-400 to-gray-600 rounded-full filter blur-[128px] opacity-5 translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            # кто мы?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {authors.map((author, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Subtle border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ padding: '1px' }}>
                <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl" />
              </div>

              <div className="relative">
                {/* Author name */}
                <div className="p-6 pb-4">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">{author.name}</h3>
                </div>

                {/* Author photo - large, rounded */}
                <div className="px-6 mb-6">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 transform group-hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-6 pb-6">
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    {author.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                      <MapPin className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-gray-600 text-sm">{author.location}</span>
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                    {author.links.map((link, i) => (
                      <div key={i}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm flex items-center gap-1 group/link"
                        >
                          {link.text}
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                        </a>
                      </div>
                    ))}
                    
                    {author.telegram && (
                      <div className="text-gray-600 text-sm italic mt-2">
                        {author.telegram}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;