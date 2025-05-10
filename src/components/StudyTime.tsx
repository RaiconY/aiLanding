import React from 'react';

const StudyTime: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-2xl">
    <div className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-0.5 rounded-xl shadow-lg">
      <div className="bg-white rounded-xl px-6 py-5 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          Пару дней применения практик из гайда заменят год самостоятельного изучения
        </h3>
        <p className="text-gray-700 text-base">
          Я объединил 2 года своего опыта и сотни часов экспериментов в систему, которая работает с первого применения
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default StudyTime;