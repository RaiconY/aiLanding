import React from 'react';
import { Bot, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Кто я" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex-shrink-0">
              <div 
                className="w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E76832] to-[#FFC24B] p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Bot className="h-20 w-20 text-[#E76832]" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-6 max-w-2xl">
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Меня зовут Илья, и я — продуктовый дизайнер и AI-консультант. Уже более 6 лет я помогаю стартапам запускать продукты, делаю интерфейсы и строю системы, которые действительно работают 💫
                </p>
                
                <p>
                  Последние полтора года я глубоко погружён в искусственный интеллект — не на уровне «поиграться», а как полноценный инструмент, который экономит время, деньги и нервы.
                </p>
                
                <p>
                  В этом гайде я собрал всё то, что реально помогает мне и моим клиентам. И добавил достаточно теории, чтобы после прочтения у тебя осталось полноценное понимание того, как работают такие интерфейсы, почему они устроены именно так и как использовать их с максимальной пользой.
                </p>

                <p>
                  Этот гайд — результат сотен часов экспериментов, консультаций, запусков продуктов и личных наблюдений. Надеюсь, он сэкономит тебе месяцы самостоятельного поиска 🫡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;