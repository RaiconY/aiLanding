import React from 'react';
import { MessageCircle, Zap, Target, Settings, Lightbulb } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Consultations: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="h-5 w-5" />,
      text: 'Находим 3–5 точек роста, где ИИ может быть полезен'
    },
    {
      icon: <Settings className="h-5 w-5" />,
      text: 'Подбираем подходящие инструменты под твои задачи'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: 'Настраиваем рабочий процесс под тебя или команду'
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      text: 'Ты уходишь с конкретным планом и ощущением «ого, а так можно было?!»'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background with more dramatic effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#E76832]/5 to-[#FFC24B]/5" />
      
      {/* Multiple floating elements for depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-20 -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-20 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#FFC24B] to-[#E76832] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E76832] to-[#FFC24B] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce">
            <MessageCircle className="h-4 w-4" />
            <span>Персональные консультации</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            А если хотите консультацию по ИИ —{' '}
            <span 
              className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent"
            >
              то вам сюда
            </span>
          </h2>
          <div 
            className="h-1 w-32 rounded mx-auto"
            style={{
              background: 'linear-gradient(135deg, #E76832, #FFC24B)'
            }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                Если ты хочешь быстрее освоить ИИ или адаптировать его под свой бизнес — я провожу индивидуальные консультации и разборы.
              </p>
              
              <div className="rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </span>
                  Обычно за одну сессию мы:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[2px] flex-shrink-0 transform group-hover:rotate-12 transition-all duration-300">
                        <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                          <div className="text-[#E76832]">
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[3px] rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 w-full max-w-md">
              <div className="bg-white rounded-2xl p-8 text-center space-y-6 h-full">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[3px] animate-pulse">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-[#E76832]" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Готов начать?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Напиши мне в Telegram и расскажи о своих задачах
                  </p>
                </div>
                
                <a 
                  href="https://t.me/Ilya_Plv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E76832] to-[#FFC24B] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group w-full justify-center"
                >
                  <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>@Ilya_Plv</span>
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-ping" />
                </a>
                
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  📩 Обычно отвечаю в течение нескольких часов
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultations;