import React from 'react';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';

const GuideContent: React.FC = () => {
  const chapters = [
  {
    number: '01',
    title: 'Основы интерфейса ChatGPT',
    topics: [
      'Освоишь настройку своего аккаунта ChatGPT для максимальной эффективности за 10 минут',
      'Выработаешь систему организации работы с чатами и проектами, чтобы никогда не терять важную информацию',
      'Приобретешь понимание, когда и какую модель ChatGPT использовать для разных типов задач'
    ]
  },
  {
    number: '02',
    title: 'Основные практики',
    topics: [
      'Внедришь 10 проверенных способов использования ChatGPT, которые экономят часы работы',
      'Овладеешь формулировкой запросов, которые дают точные результаты с первого раза',
      'Трансформируешь ChatGPT из игрушки в ежедневный рабочий инструмент'
    ]
  },
  {
    number: '03',
    title: 'Как работает ChatGPT',
    topics: [
      'Раскроешь для себя, что такое ChatGPT и LLM на самом деле',
      'Осознаешь ограничения технологии и перестанешь слепо верить каждому ответу',
      'Изучишь 5 практических сценариев для решения проблем, когда нейросеть "глючит"'
    ]
  },
  {
    number: '04',
    title: 'ChatGPT для создания картинок',
    topics: [
      'Сможешь создавать профессиональные визуалы для соцсетей, презентаций и сайтов без опыта в дизайне',
      'Получишь 20 готовых сценариев генерации изображений с проверенными промптами для любых задач',
      'Начнешь экономить на дизайнерах, сохраняя качество на высоком уровне'
    ]
  },
  {
    number: '05',
    title: 'GPT Deep Research',
    topics: [
      'Разберешься в формулировке идеальных запросов для глубокого исследования любой темы',
      'Научишься отсеивать информационный шум и получать только проверенную и актуальную информацию',
      'Интегрируешь в работу готовые структуры запросов для бизнеса, обучения и личных проектов с моментальным результатом'
    ]
  },
  {
    number: '06',
    title: 'Создание своих GPTs',
    topics: [
      'Автоматизируешь повторяющиеся задачи через создание узкоспециализированных GPTs',
      'Познакомишься с готовыми примерами успешных GPTs, которые уже приносят пользу тысячам людей',
      'Избежишь типичных ошибок при создании своего собственного GPTs'
    ]
  },
  {
    number: '07',
    title: 'Бонусная глава',
    topics: [
      'Разработаешь собственные системы напоминаний',
      'Расширишь возможности работы с голосовыми функциями и самим приложением',
      'Откроешь для себя продвинутые кейсы, не вошедшие в основные разделы'
    ]
  },
  {
    number: '08',
    title: '50+ промптов на все случаи жизни',
    topics: []
  }
];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle title="Что внутри" />
        
        <div className="space-y-3 sm:space-y-6">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-6 mb-3 sm:mb-6">
                <div 
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500 flex-shrink-0"
                >
                  <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                      {chapter.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-2xl font-semibold text-gray-900 pt-1 sm:pt-0">
                  {chapter.title}
                </h3>
              </div>
              
              <div className="pl-14 sm:pl-24">
                {chapter.topics.length > 0 ? (
                  <ul className="space-y-2.5 sm:space-y-4">
                    {chapter.topics.map((topic, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-sm sm:text-base text-gray-700 leading-tight sm:leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-lg text-gray-600 italic">
                    Специальный раздел с готовыми промптами для разных задач
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default GuideContent;