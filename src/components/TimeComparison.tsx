import React from 'react';
import SectionTitle from './SectionTitle';

interface TimeComparisonRow {
  task: string;
  timeSaved: string;
  moneySaved: string;
}

const TimeComparison: React.FC = () => {
  const comparisons: TimeComparisonRow[] = [
    {
      task: 'Написать e-mail',
      timeSaved: '15 минут быстрее',
      moneySaved: '1 100 ₽'
    },
    {
      task: 'ТЗ на сложную задачу',
      timeSaved: '30 минут быстрее',
      moneySaved: '2 200 ₽'
    },
    {
      task: 'Небольшой пост',
      timeSaved: '30 минут быстрее',
      moneySaved: '2 400 ₽'
    },
    {
      task: 'Генерация идей',
      timeSaved: '40 минут быстрее',
      moneySaved: '3 700 ₽'
    },
    {
      task: 'Анализ отзывов',
      timeSaved: '2 часа быстрее',
      moneySaved: '4 700 ₽'
    },
    {
      task: 'Контент-план',
      timeSaved: '1.5 часа быстрее',
      moneySaved: '6 000 ₽'
    },
    {
      task: 'Исследование',
      timeSaved: '2 часа быстрее',
      moneySaved: '9 300 ₽'
    },
    {
      task: 'Большая статья',
      timeSaved: '7 часов быстрее',
      moneySaved: '17 900 ₽'
    },
    {
      task: 'Презентации',
      timeSaved: '10 часов быстрее',
      moneySaved: '27 600 ₽'
    },
    {
      task: 'Создание сайта',
      timeSaved: '15 часов быстрее',
      moneySaved: '45 000 ₽'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Сколько времени мне экономит ChatGPT" />
        
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <div className="w-full">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-left text-gray-900 font-semibold w-1/2">Задача</th>
                  <th className="py-3 sm:py-4 px-2 sm:px-4 text-right text-gray-900 font-semibold w-1/2">Экономия времени</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : ''}
                  >
                    <td className="py-2 sm:py-4 px-2 sm:px-4 text-gray-700">{row.task}</td>
                    <td 
                      className="py-2 sm:py-4 px-2 sm:px-4 font-medium text-right"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {row.timeSaved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-gray-500 text-sm">
            <p>* При средней стоимости часа 5000₽</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeComparison;