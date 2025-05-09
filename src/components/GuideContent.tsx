import React from 'react';
import SectionTitle from './SectionTitle';

const GuideContent: React.FC = () => {
  const chapters = [
    {
      number: '01',
      title: 'Основы интерфейса ChatGPT',
      topics: [
        'Из каких функций состоит ChatGPT — коротко про интерфейс',
        'Настройка аккаунта для максимальной эффективности',
        'Как работать с чатами, проектами и моделями'
      ]
    },
    {
      number: '02',
      title: 'Основные практики',
      topics: [
        'Как правильно общаться с ИИ',
        '13 моих сценариев использования ⇒ добавится еще 10',
        'Сколько времени мне экономит ИИ',
        'Как внедрить ИИ в привычку'
      ]
    },
    {
      number: '03',
      title: 'Как работает ChatGPT',
      topics: [
        'Как ChatGPT и подобные сервисы устроены изнутри',
        'Как устроено обучение нейросети',
        'Про Контекстное окно, или как модель "помнит" информацию',
        'Пять рабочих сценариев для решения проблем при общении с ChatGPT'
      ]
    },
    {
      number: '04',
      title: 'ChatGPT для создания картинок',
      topics: [
        'Что умеет новая генерация изображений',
        '20 возможностей генерации изображений, сделанные мной с любовью',
        'Как составлять промпты для визуального контента',
        'Почти под каждым примером — сравнение полученного дизайна с той ценой, как если бы вы заказывали у меня, а не у ChatGPT'
      ]
    },
    {
      number: '05',
      title: 'GPT Deep Research',
      topics: [
        'Как разобраться в любой теме за 20 минут',
        'Структура эффективного запроса для исследования',
        'Примеры для бизнеса, обучения и личных проектов'
      ]
    },
    {
      number: '06',
      title: 'Создание своих GPTs',
      topics: [
        'Как сделать узконаправленный ChatGPT и какие у них есть ограничения',
        'Примеры GPTs для разных задач',
        'Как избежать типичных ошибок'
      ]
    },
    {
      number: '07',
      title: 'Бонусная глава',
      topics: [
        'Как выстроить систему напоминания с помощью ChatGPT',
        'Про мобильное приложение (в процессе)',
        'Про Voice mode (в процессе)',
        'Кейсы с o3 моделью (в процессе)'
      ]
    },
    {
      number: '08',
      title: '50+ промптов на все случаи жизни',
      topics: []
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTitle title="Что внутри" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  >
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                        {chapter.number}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {chapter.title}
                  </h3>
                </div>
                
                {chapter.topics.length > 0 ? (
                  <ul className="space-y-3 text-base text-gray-700 flex-grow">
                    {chapter.topics.map((topic, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <span className="text-[#E76832] flex-shrink-0 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 italic flex-grow">
                    Специальный раздел с готовыми промптами для разных задач
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideContent;