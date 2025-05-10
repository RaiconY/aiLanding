import React from 'react';

const StudyTime: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-r from-[#E76832] to-[#FFC24B] p-[1px] rounded-2xl">
            <div className="bg-white rounded-2xl px-6 py-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-800">
                За неделю неспешного изучения гайда поймёте больше, чем за год самотыкания
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-600 italic">
                так как я изучил все за вас
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTime;