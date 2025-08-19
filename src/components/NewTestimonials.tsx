import React, { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const NewTestimonials: React.FC = () => {
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left shadow if scrolled right
      setShowLeftShadow(scrollLeft > 10);
      
      // Show right shadow if can scroll more right
      setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check initial state
      handleScroll();
      
      // Add scroll listener
      container.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const testimonials = [
    // Первые 3 отзыва остаются как были
    {
      name: 'Евгений П.',
      position: 'Дизайнер',
      text: 'Мне очень понравилось как ты расписываешь для новичков — я кайфанул уже с самого пункта настройки.\n\nОказывается в ChatGPT можно в настройках профиля очень много всего делать. Для меня это 100% уже очень полезная информация'
    },
    {
      name: 'Максим К.',
      position: 'Владелец компании',
      text: 'Классный документ, структурирован и без воды.\n\nЯ бы его прикупил у тебя для компании, чтобы мои ЛПР тоже изучили'
    },
    {
      name: 'Наташа Я.',
      position: 'Основатель СММ агентства',
      text: 'Очень понравилось, как детально всё расписано. Особенно впечатлил бот по SEO статьям 🤣 Офигенно, что он может прямо писать статьи за нас и даже темы выбирает интересные. \n\nПолезно было про функционал и про то, как чат думает. Про генерацию картинок тоже круто — расскажу команде!'
    },
    // Новые отзывы
    {
      name: 'Дмитрий К.',
      position: 'Frontend разработчик',
      text: 'Прошел курс полностью. Очень понравился!\n\nОткрыл для меня глубокое исследование - пробовал несколько раз, в восторге. Кастомные GPTs тоже зашли.\n\nТо, что O модели думающие, я не знал. Это эссенция маст-хэв знаний по нейросетям!'
    },
    {
      name: 'Анна С.', 
      position: 'Data Analyst',
      text: 'Дочитала гайд. Самой пиздатой была третья глава - там 90% информации было новой.\n\nПолезно было узнать про работу моделей, правильные запросы и дополнительные функции GPT. Спасибо, что структурировал знания ✨'
    },
    {
      name: 'Михаил Р.',
      position: 'Контент-менеджер', 
      text: 'Гайд реально полезный! Особенно промпты нравятся.\n\nСпокойненько заходишь, у тебя всегда есть промпт под любой запрос. Взял промптик, подредачил под себя и пошел. Прекрасно!'
    },
    {
      name: 'Владислав Ж.',
      position: 'IT Рекрутер',
      text: 'Прочитал до конца, все понятно. Когда что-то нужно решить - обращаюсь к гайду.\n\nУзнал довольно много новых фишек. Для старта более чем достаточно. Ожидания оправдались!'
    },
    {
      name: 'Елена В.',
      position: 'Product Manager',
      text: 'Большая часть гайда была полезной. Помог найти подход к внедрению ChatGPT в ежедневные процессы.\n\nОчень запала идея использования его как сотрудника. Гайд сломал все преграды перед полноценным погружением!'
    },
    {
      name: 'Александр Т.', 
      position: 'DevOps Engineer',
      text: 'Прочитал весь гайд и дополнения 🔥\n\nПолезно по настройкам GPT, проекты, токены, контекстное окно. Подборка промптов, автоматизация. Лог изменений в главах с датами - очень удобно!'
    },
    {
      name: 'Виктория М.',
      position: 'UI/UX Дизайнер',
      text: 'Во второй главе наконец-то уложилась система как лучше писать промпты - поняла что интуитивно старалась писать именно так.\n\n3я глава очень понравилась - про принципы работы, токены, что это не "магия". Зная тебя лично, доверия больше!'
    },
    {
      name: 'Игорь Л.',
      position: 'UX Researcher', 
      text: 'Узнал новое с первой же главы - не знал что можно так дополнять контекст. Сразу пошёл и настроил.\n\nПримеры промптов огонь! Особенно помог "КБТ-психолог" - разложил ситуацию и я разрулил конфликт.'
    },
    {
      name: 'Артём Н.',
      position: 'Product Manager',
      text: 'Очень крутой и вовлекающий продукт! Успел поймать несколько сильных инсайтов.\n\nОсобенно ценно, что объясняешь не просто "что нажать", а создаёшь систему мышления с примерами. Структурность и фокус на реальную пользу!'
    },
    {
      name: 'Сергей П.',
      position: 'QA Engineer',
      text: 'Прочитал 50% и продолжаю читать.\n\nНе знал что в настройках можно настроить ответы под себя. Не знал чем отличаются модели. Стал задавать вопросы по промту - стало меньше воды!'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTitle title="Отзывы по гайду" />
        
        {/* Container with shadows */}
        <div className="relative">
          {/* Left shadow */}
          {showLeftShadow && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          )}
          
          {/* Right shadow */}
          {showRightShadow && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          )}
          
          {/* Horizontal scroll carousel */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            <div className="flex gap-6 lg:gap-8 min-w-max">
              {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 sm:w-96 group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 md:p-5 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-scale-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl" />
                </div>

                <div className="relative flex flex-col h-full">
                  {/* Author info at the top */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] transform group-hover:rotate-12 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <User className="h-5 w-5 text-[#E76832]" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col h-full">
                    {/* Testimonial text */}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">← Прокрутите горизонтально для просмотра всех отзывов →</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default NewTestimonials;
