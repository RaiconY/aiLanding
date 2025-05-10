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
          {/* Заголовок */}
          <div className="flex items-center font-semibold text-gray-900 mb-4 px-4 py-3 bg-gray-50 rounded">
            <div className="w-4/12 sm:w-5/12 text-left">Задача</div>
            <div className="w-4/12 sm:w-4/12 text-center">Экономия времени</div>
            <div className="w-4/12 sm:w-3/12 text-right">Экономия в ₽</div>
          </div>
          
          {/* Строки таблицы */}
          {comparisons.map((row, index) => (
            <div 
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'bg-gray-50' : ''} mb-2 rounded px-4 py-3`}
            >
              <div className="w-4/12 sm:w-5/12 text-left text-gray-700">{row.task}</div>
              <div
                className="w-4/12 sm:w-4/12 text-center font-medium"
                style={{ 
                  background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {row.timeSaved}
              </div>
              <div
                className="w-4/12 sm:w-3/12 text-right font-medium"
                style={{ 
                  background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {row.moneySaved}
              </div>
            </div>
          ))}
          
          <div className="mt-4 text-gray-500 text-sm">
            <p>* При средней стоимости часа 5000₽</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeComparison;