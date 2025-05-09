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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle title="Что внутри" />
        
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500"
                >
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                      {chapter.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {chapter.title}
                </h3>
              </div>
              
              <div className="pl-24">
                {chapter.topics.length > 0 ? (
                  <ul className="space-y-4">
                    {chapter.topics.map((topic, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-lg text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-600 italic">
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