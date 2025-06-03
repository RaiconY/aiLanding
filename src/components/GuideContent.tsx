import React from 'react';
import SectionTitle from './SectionTitle';
import CTAButton from './CTAButton';

const GuideContent: React.FC = () => {
  const chapters = [
    {
      number: '01',
      title: 'Правильно настрой ChatGPT за 10',
      topics: [
        'Освоишь настройку своего аккаунта ChatGPT для максимальной эффективности',
        'Выработаешь систему организации работы с чатами и проектами, чтобы не терять важную информацию',
        'Приобретешь понимание, когда и какую модель ChatGPT использовать для разных типов задач'
      ]
    },
    {
      number: '02',
      title: 'От игрушки к инструменту: 10 способов экономить 3 часа в день',
      topics: [
        'Внедришь 10 проверенных способов использования ChatGPT в личных и рабочих задачах, которые экономят часы работы',
        'Овладеешь формулировкой запросов, которые дают точные результаты с первого раза',
        'Трансформируешь ChatGPT из игрушки в ежедневный рабочий инструмент'
      ]
    },
    {
      number: '03',
      title: 'Как работают LLM, почему они врут и как этого избежать',
      topics: [
        'Поймешь, что такое ChatGPT и LLM на самом деле и как она работает',
        'Поймешь принципы токенизации и контекстного окна, чтобы строить более эффективные запросы',
        'Изучишь 5 практических сценариев для решения проблем, которые возникают при общении с нейростейтью'
      ]
    },
    {
      number: '04',
      title: 'Экономь до 100 000₽ на дизайнерах: создавай визуалы сам',
      topics: [
        'Сможешь создавать профессиональные визуалы для соцсетей, презентаций и сайтов без опыта в дизайне',
        'Получишь 20 готовых сценариев генерации изображений с проверенными промптами для любых задач',
        'Начнешь экономить до 100 000₽ на дизайнерах, сохраняя качество на высоком уровне'
      ]
    },
    {
      number: '05',
      title: 'Стань экспертом в любой теме за 20 минут',
      topics: [
        'Научишься разбираться в любой теме за 20 минут через структурированное исследование',
        'Освоишь составление идеальных запросов для глубокого анализа с конкретными примерами',
        'Получишь готовые шаблоны запросов для бизнеса, обучения и личных проектов'
      ]
    },
    {
      number: '06',
      title: 'Автоматизируй рутину: создай своих GPT-помощников',
      topics: [
        'Автоматизируешь повторяющиеся задачи через создание узкоспециализированных GPTs',
        'Познакомишься с 12+ готовыми примерами успешных GPTs из GPT Store',
        'Избежишь типичных ошибок при создании и больше узнаешь про GPTs для корпоративного использования'
      ]
    },
    {
      number: '07',
      title: 'Персональный ассистент, который все тебе напоминает',
      topics: [
        'Превратишь ChatGPT в проактивного помощника, который сам напоминает о важных делах',
        'Настроишь 10+ готовых сценариев: от планирования питания до мониторинга трендов в твоей индустрии',
        'Автоматизируешь ежедневную рутину через умные напоминания и информационные дайджесты'
      ]
    },
    {
      number: '08',
      title: 'Получай точный результат с первого запроса',
      topics: [
        'Освоишь золотую формулу промпта,
        'Изучишь 9 продвинутых техник промптинга и  чем он отличается от диалогового подхода',
        'Поймешь иерархию инструкций и технические нюансы для максимальной эффективности'
      ]
    },
    {
      number: '09',
      title: 'Выбери правильный инструмент автоматизации, если вдруг решишь автоматизировать свои процессы',
      topics: [
        'Сравнишь 6 основных платформ автоматизации: от Zapier до n8n',
        'Выберешь оптимальный инструмент под свой бюджет и технические навыки',
        'Получишь конкретные рекомендации и таблицу сравнения функций и цен'
      ]
    }
    {
      number: '10',
      title: '50 готовых промптов почти на все случаи',
      topics: [
        'Получишь 50+ проверенных промптов для 17 профессиональных сфер — от маркетинга до разработки',
        'Получишь бонус с 10 дополнительными промптами по визуалу'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle title="Что внутри" />
        
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500 flex-shrink-0"
                >
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                      {chapter.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {chapter.title}
                  </h3>
                  
                  {chapter.topics.length > 0 ? (
                    <ul className="space-y-2.5 sm:space-y-3">
                      {chapter.topics.map((topic, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-sm sm:text-base text-gray-700 leading-snug sm:leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      Дополнительный бонус: пошаговое сравнение платформ с таблицей цен и функций
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 mt-6 border-2 border-dashed border-[#E76832]/30">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              📌 Бонус: 50+ готовых промптов
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Дополнительный раздел с проверенными промптами для маркетологов, копирайтеров, дизайнеров, разработчиков и других профессий
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default GuideContent;