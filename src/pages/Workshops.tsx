import React from 'react';
import { Check, Users, Zap, Target, ArrowRight, Sparkles } from 'lucide-react';

const Workshops: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-[#E76832] selection:text-white">
      {/* Section 1: Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E76832]/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FFC24B]/20 rounded-full blur-[120px] opacity-50"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 animate-fade-in">
              <Sparkles size={16} className="text-[#FFC24B]" />
              <span className="text-sm font-medium text-gray-300">Корпоративное обучение AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              AI-адаптация команды <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E76832] to-[#FFC24B]">за 1-3 воркшопа</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ваши сотрудники научатся экономить 5-10 часов в неделю с помощью AI — с практикой на реальных задачах, а не теорией.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://t.me/Ilya_Plv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full hover:shadow-[0_0_30px_rgba(231,104,50,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Обсудить воркшоп
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Знакомо?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Сотрудники «поигрались с ChatGPT» и забросили",
              "Нет понимания, какие задачи можно отдать AI",
              "Страх про безопасность данных парализует внедрение",
              "Теоретические курсы и видео не дают результата",
              "Непонятно, с чего начать и как измерить эффект"
            ].map((problem, index) => (
              <div key={index} className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E76832]/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-red-400 font-bold text-lg">!</span>
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Воркшопы с <span className="text-[#E76832]">80% практики</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Не лекция «что такое AI», а практическая работа над реальными задачами вашей команды.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-blue-400" size={32} />,
                title: "IT-команды",
                desc: "Автоматизация отчётов, анализ логов, документация, скрипты",
                color: "blue"
              },
              {
                icon: <Target className="text-purple-400" size={32} />,
                title: "Маркетинг",
                desc: "Исследования рынка, презентации, контент, аналитика",
                color: "purple"
              },
              {
                icon: <Users className="text-green-400" size={32} />,
                title: "Менеджмент",
                desc: "Принятие решений, аналитика, коммуникации",
                color: "green"
              }
            ].map((card, index) => (
              <div key={index} className="group p-10 bg-gray-900 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${card.color}-500/10 group-hover:bg-${card.color}-500/20 transition-colors`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Formats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Выберите свой формат</h2>
          <div className="overflow-x-auto rounded-3xl border border-gray-800">
            <table className="w-full min-w-[900px] border-collapse bg-gray-900/50 backdrop-blur-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-6 text-left font-semibold text-gray-400 uppercase tracking-wider text-sm">Формат</th>
                  <th className="p-6 text-left font-semibold text-gray-400 uppercase tracking-wider text-sm">Длительность</th>
                  <th className="p-6 text-left font-semibold text-gray-400 uppercase tracking-wider text-sm">Для кого</th>
                  <th className="p-6 text-left font-semibold text-gray-400 uppercase tracking-wider text-sm">Результат</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  {
                    name: "Intro-воркшоп",
                    duration: "2-3 часа",
                    audience: "Первое знакомство команды с AI",
                    result: "Понимание возможностей + базовые навыки промптинга"
                  },
                  {
                    name: "Практический воркшоп",
                    duration: "4-8 часов",
                    audience: "Команда с базовым опытом",
                    result: "Готовые промпты и решения для рабочих задач"
                  },
                  {
                    name: "AI-хакатон",
                    duration: "2-4 часа",
                    audience: "Продвинутые команды",
                    result: "Решённые бизнес-кейсы с помощью AI"
                  },
                  {
                    name: "Программа адаптации",
                    duration: "1-3 месяца",
                    audience: "Системная трансформация",
                    result: "Внедрение AI в процессы компании"
                  }
                ].map((format, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6 font-bold text-white text-lg group-hover:text-[#E76832] transition-colors">{format.name}</td>
                    <td className="p-6 text-gray-300">{format.duration}</td>
                    <td className="p-6 text-gray-300">{format.audience}</td>
                    <td className="p-6 text-gray-300">{format.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Deliverables */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Уйдёте не с записями, а с результатами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Библиотека промптов под задачи вашей команды",
              "Чек-лист безопасности работы с AI",
              "Навык верификации ответов AI (защита от «галлюцинаций»)",
              "Готовые решения для 3-5 реальных рабочих задач",
              "План внедрения AI в ежедневную работу",
              "Доступ к материалам и записям"
            ].map((item, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-[#E76832]/50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                  <Check className="text-green-400" size={16} />
                </div>
                <span className="text-gray-200 font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">3 шага к AI-команде</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Созвон (30 мин)",
                desc: "Понимаем задачи, уровень команды, ожидания"
              },
              {
                step: "02",
                title: "Подготовка",
                desc: "Адаптируем программу под вашу специфику и реальные кейсы"
              },
              {
                step: "03",
                title: "Воркшоп",
                desc: "Практика на задачах команды + материалы для продолжения"
              }
            ].map((step, index) => (
              <div key={index} className="relative p-10 rounded-3xl bg-gray-800 border border-gray-700 overflow-hidden group hover:border-[#E76832] transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl text-white select-none group-hover:opacity-20 transition-opacity">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">{step.title}</h3>
                <p className="text-gray-400 relative z-10 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 mb-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Частые вопросы</h2>
          <div className="space-y-6">
            {[
              {
                q: "Нужна ли подготовка участников?",
                a: "Нет, адаптируем под любой уровень"
              },
              {
                q: "Какие инструменты используете?",
                a: "ChatGPT, Claude, Gemini и другие под задачи"
              },
              {
                q: "Можно онлайн?",
                a: "Да, провожу как офлайн, так и онлайн"
              },
              {
                q: "Сколько человек в группе?",
                a: "Оптимально 5-15, но адаптируемся"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                <p className="text-gray-400 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
           <a 
            href="https://t.me/Ilya_Plv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-6 text-xl font-bold text-gray-900 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full hover:shadow-[0_0_40px_rgba(231,104,50,0.5)] transform hover:scale-105 transition-all duration-300"
          >
            Заказать воркшоп
            <ArrowRight className="ml-3" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
