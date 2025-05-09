import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from './SectionTitle';

const GuideContent: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

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

  const toggleChapter = (index: number) => {
    setExpandedChapter(expandedChapter === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Что внутри" />
        
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <button
                className="w-full text-left p-4 md:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleChapter(index)}
              >
                <div className="flex items-center gap-3 md:gap-6">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'white',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #E76832, #FFC24B)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'content-box, border-box'
                    }}
                  >
                    <span style={{ 
                      background: 'linear-gradient(135deg, #E76832, #FFC24B)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold'
                    }}>
                      {chapter.number}
                    </span>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-gray-900">
                    {chapter.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 flex-shrink-0 ${
                    expandedChapter === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#E76832' }}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedChapter === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 md:p-6 pt-0">
                  {chapter.topics.length > 0 ? (
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                      {chapter.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 md:mr-3" style={{ color: '#E76832' }}>•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 italic text-sm md:text-base">
                      Специальный раздел с готовыми промптами для разных задач.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideContent;