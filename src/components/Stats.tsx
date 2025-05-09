import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "+50",
      text: "готовых промптов"
    },
    {
      number: "+20",
      text: "готовых шаблонов по генерации картинок"
    },
    {
      number: "+10",
      text: "GPTs под ваши задачи"
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 opacity-70" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-[#E76832] to-[#FFC24B] rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden w-full md:w-auto transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E76832] to-[#FFC24B] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-[#E76832] to-[#FFC24B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="relative p-6 flex items-center gap-4">
                <span 
                  className="text-4xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.number}
                </span>
                <span className="text-gray-700 font-medium text-lg">
                  {stat.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;