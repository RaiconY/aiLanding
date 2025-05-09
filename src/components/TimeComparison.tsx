import React from 'react';
import SectionTitle from './SectionTitle';

interface TimeComparisonRow {
  task: string;
  withoutAI: string;
  withChatGPT: string;
  savingsPercent: string;
  savingsRubles: string;
}

const TimeComparison: React.FC = () => {
  const comparisons: TimeComparisonRow[] = [
    {
      task: 'Написать e-mail',
      withoutAI: '15-20 мин',
      withChatGPT: '3-5 мин',
      savingsPercent: '75%',
      savingsRubles: '1,100₽'
    },
    {
      task: 'Небольшой пост',
      withoutAI: '30-45 мин',
      withChatGPT: '5-10 мин',
      savingsPercent: '75%',
      savingsRubles: '2,400₽'
    },
    {
      task: 'Исследование',
      withoutAI: '2-3 часа',
      withChatGPT: '30-45 мин',
      savingsPercent: '75%',
      savingsRubles: '9,300₽'
    },
    {
      task: 'ТЗ на сложную задачу',
      withoutAI: '30-40 минут',
      withChatGPT: '5-10 мин',
      savingsPercent: '75%',
      savingsRubles: '2,200₽'
    },
    {
      task: 'Контент-план',
      withoutAI: '1-2 часа',
      withChatGPT: '15-20 мин',
      savingsPercent: '80%',
      savingsRubles: '6,000₽'
    },
    {
      task: 'Генерация идей',
      withoutAI: '45-60 мин',
      withChatGPT: '7-10 мин',
      savingsPercent: '85%',
      savingsRubles: '3,700₽'
    },
    {
      task: 'Презентации',
      withoutAI: '12-14 часов',
      withChatGPT: '2-2.5 часа',
      savingsPercent: '85%',
      savingsRubles: '27,600₽'
    },
    {
      task: 'Анализ отзывов',
      withoutAI: '2-3 часа',
      withChatGPT: '30-45 мин',
      savingsPercent: '75%',
      savingsRubles: '4,700₽'
    },
    {
      task: 'Большая статья',
      withoutAI: '10-12 часов',
      withChatGPT: '3-4 часа',
      savingsPercent: '65%',
      savingsRubles: '17,900₽'
    },
    {
      task: 'Создание сайта',
      withoutAI: '18-20 часов',
      withChatGPT: '2-3 часа',
      savingsPercent: '90%',
      savingsRubles: '45,000₽'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Сколько времени мне экономит ChatGPT" />
        
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg overflow-x-auto">
          <div className="min-w-[768px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold">Задача</th>
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold">Сам</th>
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold">С ИИ</th>
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold">Экономия в %</th>
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold">Экономия в ₽*</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : ''}
                  >
                    <td className="py-4 px-4 text-gray-700">{row.task}</td>
                    <td className="py-4 px-4 text-gray-700">{row.withoutAI}</td>
                    <td className="py-4 px-4 text-gray-700">{row.withChatGPT}</td>
                    <td className="py-4 px-4" style={{ color: '#E76832', fontWeight: '500' }}>{row.savingsPercent}</td>
                    <td className="py-4 px-4" style={{ color: '#E76832', fontWeight: '500' }}>{row.savingsRubles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-gray-500 text-sm">
            <p>* При средней стоимости часа 5000₽</p>
            <p>Это прям супер простые примеры</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeComparison;