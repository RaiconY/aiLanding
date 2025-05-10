import React from 'react';
import SectionTitle from './SectionTitle';

const TimeComparison: React.FC = () => {
  const comparisons = [
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
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="Сколько времени мне экономит ChatGPT" />
        
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 px-6 text-left text-gray-900 font-semibold">Задача</th>
                  <th className="py-4 px-6 text-left text-gray-900 font-semibold">Экономия времени</th>
                  <th className="py-4 px-6 text-left text-gray-900 font-semibold">Экономия в ₽</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 text-gray-700">{row.task}</td>
                    <td 
                      className="py-4 px-6 font-medium"
                      style={{ 
                        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {row.timeSaved}
                    </td>
                    <td 
                      className="py-4 px-6 font-medium"
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
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            * При средней стоимости часа 5000₽
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeComparison;