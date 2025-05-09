import React from 'react';
import { XCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const NotForWho: React.FC = () => {
  const items = [
    'Ты ищешь готовую бизнес-модель "под ключ" или волшебную кнопку — гайд о навыках работы с инструментом, а не о конкретных бизнес-схемах',
    'Ты не готов потратить хотя бы час на практику. Просто читать и не применять — бесполезно'
  ];

  return (
    <section className="section-gradient py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle title="Кому НЕ подойдет" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start group hover:bg-gray-50 rounded-xl transition-all duration-300 p-4"
              >
                <XCircle className="h-6 w-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-lg" style={{ 
              background: 'linear-gradient(135deg, #ffa500, #ff6b81, #800080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Если ты хочешь научиться использовать ИИ и ChatGPT как инструмент для решения твоих задач, 
              а не ищешь готовые рецепты успеха — гайд для тебя
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotForWho;