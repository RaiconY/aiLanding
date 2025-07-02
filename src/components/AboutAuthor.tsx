import React from 'react';
import { MessageCircle, Sparkles, Zap, CheckCircle, Users, Rocket, TrendingUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutAuthor: React.FC = () => {
  const ilyaFacts = [
    { text: 'Продуктовый дизайнер, 6 лет помогаю стартапам запускать продукты', highlight: '6 лет' },
    { text: 'Провожу воркшопы по ИИ для компаний', highlight: 'воркшопы' },
    { text: 'Пишу статьи про ИИ и дизайн', highlight: false },
    { text: 'Провёл 30+ консультаций — клиенты экономят 15+ часов в неделю', highlight: '15+ часов' },
    { text: 'Специализация: превращаю сложное в понятные пошаговые системы', highlight: 'пошаговые системы' }
  ];

  const artemFacts = [
    { text: '5 лет работал в маркетинге P&G', highlight: 'P&G' },
    { text: 'За год набрал 800,000 подписчиков используя ChatGPT', highlight: '800,000' },
    { text: 'Создал 5000+ рилс с 400+ млн просмотров', highlight: '400+ млн' },
    { text: 'Разработал Telegram-бота для автоматизации контента', highlight: 'автоматизации' },
    { text: 'Специализация: масштабирование контента и автоматизация', highlight: 'масштабирование' }
  ];

  const benefits = [
    { icon: <Sparkles className="h-5 w-5" />, text: 'Поймёшь, как правильно работать с ChatGPT' },
    { icon: <Rocket className="h-5 w-5" />, text: 'Научишься применять его в реальных задачах — от написания кода до создания контента' },
    { icon: <TrendingUp className="h-5 w-5" />, text: 'Сэкономишь время на экспериментах — мы уже проверили, что работает, а что нет' }
  ];

  const highlightText = (text: string, highlight: string | false) => {
    if (!highlight) return text;
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="font-bold text-gray-900">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-blue-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#E76832]/5 to-[#042989]/5" />
      
      {/* Multiple animated floating elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-20 -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#042989] to-[#4A90E2] rounded-full filter blur-[128px] opacity-20 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-[#FFC24B] to-[#E76832] rounded-full filter blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-[#042989] to-[#4A90E2] rounded-full filter blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E76832] to-[#FFC24B] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce">
            <Users className="h-4 w-4" />
            <span>Авторы гайда</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Мы — Илья и Артём.{' '}
            <span className="bg-gradient-to-r from-[#E76832] to-[#042989] bg-clip-text text-transparent">
              Два человека, которые давно работают с ИИ
            </span>
          </h2>
          <div 
            className="h-1 w-32 rounded mx-auto"
            style={{
              background: 'linear-gradient(90deg, #E76832 0%, #FFC24B 50%, #042989 100%)'
            }}
          />
        </div>
        
        {/* Main content card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
          <div className="space-y-12">
            {/* Author cards with enhanced design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Илья - Orange theme */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Card with gradient border */}
                <div className="relative bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[3px] rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-6 h-full">
                    {/* Header with avatar */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[2px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                          <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                            <img 
                              src="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/MyImage.png"
                              alt="Илья"
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full flex items-center justify-center animate-pulse">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
                          Илья
                        </h4>
                        <p className="text-gray-600 font-medium">Системность и ясность</p>
                      </div>
                    </div>
                    
                    {/* Facts with enhanced styling */}
                    <ul className="space-y-3">
                      {ilyaFacts.map((fact, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 text-sm sm:text-base group/item hover:translate-x-1 transition-transform duration-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center flex-shrink-0 mt-0.5 transform group-hover/item:rotate-12 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span>{highlightText(fact.text, fact.highlight)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Артём - Blue theme */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#042989] to-[#4A90E2] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Card with gradient border */}
                <div className="relative bg-gradient-to-br from-[#042989] to-[#4A90E2] p-[3px] rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-6 h-full">
                    {/* Header with avatar */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#042989] to-[#4A90E2] p-[2px] shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                          <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <span className="text-2xl font-bold text-[#042989]">А</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#042989] to-[#4A90E2] rounded-full flex items-center justify-center animate-pulse">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#042989] to-[#4A90E2] bg-clip-text text-transparent">
                          Артём
                        </h4>
                        <p className="text-gray-600 font-medium">Масштаб и автоматизация</p>
                      </div>
                    </div>
                    
                    {/* Facts with enhanced styling */}
                    <ul className="space-y-3">
                      {artemFacts.map((fact, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 text-sm sm:text-base group/item hover:translate-x-1 transition-transform duration-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#042989] to-[#4A90E2] flex items-center justify-center flex-shrink-0 mt-0.5 transform group-hover/item:rotate-12 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span>{highlightText(fact.text, fact.highlight)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Synergy section with enhanced design */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] via-[#FFC24B] to-[#042989] rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-transparent bg-clip-padding" 
                   style={{ backgroundImage: 'linear-gradient(to right, rgb(254 243 199), rgb(254 243 199), rgb(219 234 254)), linear-gradient(90deg, #E76832 0%, #FFC24B 50%, #042989 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Почему мы объединились
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  Илья отвечает за системность и понятные объяснения. Артём — за практическое применение и масштабирование. 
                  <span className="font-semibold"> Вместе покрываем весь путь от теории до реальных результатов.</span>
                </p>
              </div>
            </div>

            {/* Benefits section with cards */}
            <div className="space-y-8">
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Что ты получишь
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative animate-scale-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E76832]/10 to-[#042989]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] border border-gray-100">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                          <div className="text-[#E76832]">
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="text-center pt-8">
              <a 
                href="https://t.me/Ilya_Plv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E76832] to-[#FFC24B] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Написать в Telegram</span>
                <div className="w-2 h-2 bg-white/30 rounded-full animate-ping" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;