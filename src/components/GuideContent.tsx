import React from 'react';
import SectionTitle from './SectionTitle';

const GuideContent: React.FC = () => {
  const chapters = [
    {
      number: '01',
      title: 'Основы интерфейса ChatGPT',
      topics: [
  'Быстрый старт с настройками, которые используют только 5% пользователей',
  'Освоишь интерфейс, чаты и проекты для эффективной организации работы',
  'Научишься переключаться между моделями для разных задач'
]
    },
    {
      number: '02',
      title: 'Основные практики',
      topics: [
  '13 проверенных способов использования ChatGPT в работе и повседневности',
  'Увеличишь личную эффективность без рутины и стресса',
  'Трансформируешь хаотичные эксперименты в системный подход'
]
    },
    {
      number: '03',
      title: 'Как работает ChatGPT',
      topics: [
  'Поймёшь, как "думает" нейросеть и как правильно с ней взаимодействовать',
  'Освоишь 5 проверенных техник для решения любых проблем с ChatGPT',
  'Узнаешь секреты контекстного окна для получения идеальных ответов'
]
    },
    {
      number: '04',
      title: 'ChatGPT для создания картинок',
      topics: [
  'Создавай профессиональные визуалы для соцсетей, презентаций и сайтов',
  '20 готовых сценариев генерации изображений с проверенными промптами',
  'Сравнение стоимости с услугами дизайнеров (экономия до 200,000₽)'
]
    },
    {
      number: '05',
      title: 'GPT Deep Research',
      topics: [
  'Освоишь структуру запросов для глубокого исследования любой темы',
  'Научишься получать только проверенную и актуальную информацию',
  'Применишь в бизнесе, обучении и личных проектах с моментальным результатом'
]
    },
    {
      number: '06',
      title: 'Создание своих GPTs',
      topics: [
  'Создавай специализированных ассистентов для автоматизации рутины',
  'Получи готовые шаблоны GPTs для бизнеса, учебы и хобби',
  'Обойди 90% пользователей, избегая типичных ошибок настройки'
]
    },
    {
      number: '07',
      title: 'Бонусная глава',
      topics: [
  'Автоматизируй управление задачами, освобождая до 5 часов в неделю',
  'Будь первым, кто освоит новейшие функции ChatGPT',
  'Получи эксклюзивный доступ к обновлениям гайда при выходе новых инструментов'
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