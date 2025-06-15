import React from 'react';
import { MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Consultations: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-[128px] opacity-10 translate-x-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle title="По поводу консультаций — вам сюда" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Если ты хочешь быстрее освоить ИИ или адаптировать его под свой бизнес — я провожу индивидуальные консультации и разборы.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Обычно за одну сессию мы:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0" />
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Находим 3–5 точек роста, где ИИ может быть полезен
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0" />
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Подбираем подходящие инструменты под твои задачи
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0" />
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Настраиваем рабочий процесс под тебя или команду
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B] flex-shrink-0" />
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Ты уходишь с конкретным планом и ощущением «ого, а так можно было?!»
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-gray-700">📩 Написать мне можно в Telegram —</span>
                <a 
                  href="https://t.me/Ilya_Plv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-[#E76832] hover:text-[#FFC24B] transition-colors duration-300 font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>@Ilya_Plv</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultations;