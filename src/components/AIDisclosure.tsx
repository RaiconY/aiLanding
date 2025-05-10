import React from 'react';
import SectionTitle from './SectionTitle';

const AIDisclosure: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Написан ли этот гайд с помощью ИИ?" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="text-2xl font-semibold mb-4" style={{ 
              background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Да, при создании я активно использовал 4 разных LLM — ChatGPT, Claude, Gemini и NotebookLM
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-xl font-medium mb-2 text-gray-900">
                Стал ли гайд после этого менее ценным?
              </p>
              <p>
                Если твой ответ да, то это естественно — придерживаться привычных способов мышления
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-xl font-medium mb-4 text-gray-900">
               Главная идея гайда
              </p>
              <p className="mb-4">
                Научиться воспринимать ИИ как партнера
              </p>
              <p>
                То, что у многих с ИИ получается плохой результат и у читателей возникает отторжение — проблема в использовании инструмента, 
                а не в самом ИИ. Именно это я и хочу исправить
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDisclosure;