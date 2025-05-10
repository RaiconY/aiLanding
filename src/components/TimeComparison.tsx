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
      <div className="container mx-auto max-w-5xl"> {/* Уменьшили с max-w-6xl до max-w-5xl */}
        <SectionTitle title="Сколько времени мне экономит ChatGPT" />
        
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg overflow-x-auto">
          <div className="max-w-3xl mx-auto"> {/* Добавили ограничение ширины таблицы */}
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold w-2/5">Задача</th> {/* Определили ширину */}
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold w-3/10">Экономия времени</th>
                  <th className="py-4 px-4 text-left text-gray-900 font-semibold w-3/10">Экономия в ₽</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : ''}
                  >
                    <td className="py-4 px-4 text-gray-700">{row.task}</td>
                    <td 
                      className="py-4 px-4 font-medium"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {row.timeSaved}
                    </td>
                    <td 
                      className="py-4 px-4 font-medium"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {row.moneySaved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-gray-500 text-sm text-center">
            <p>* При средней стоимости часа 5000₽</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeComparison;