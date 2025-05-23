// Hero.tsx
import React from 'react';
import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 flex items-center py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* ---- TEXT SIDE -------------------------------------------------- */}
          <div className="flex flex-col space-y-6 md:space-y-8 animate-slide-up text-center md:text-left order-2 md:order-1">
            {/* label */}
            <div className="flex items-center space-x-2 mb-2 animate-pulse justify-center md:justify-start">
              <Sparkles size={20} className="text-accent" />
              <span className="font-semibold text-sm sm:text-base text-accent">
                Гайд по ChatGPT
              </span>
            </div>

            {/* headline */}
            <h1 className="max-w-[38rem] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              <span>
                Научись работать с ChatGPT —
              </span>
              <br className="hidden sm:block" />
              <span>
                и экономь до&nbsp;
                <span className="text-accent">100&nbsp;000&nbsp;₽</span>
                &nbsp;в месяц
              </span>
            </h1>

            {/* sub-headline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Пошаговое руководство для тех, кто хочет внедрить ИИ в свою жизнь
              и получать реальные результаты
            </p>

            {/* benefit cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              {[
                { top: 'Освободи', value: '+ 3 ч в день' },
                { top: 'Экономь в месяц', value: '– 100 000 ₽' },
                { top: 'Автоматизируй', value: '– 80 % рутины' },
              ].map(({ top, value }) => (
                <div
                  key={value}
                  className="bg-white/90 rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-xs sm:text-sm text-gray-600">{top}</div>
                  <span
                    className="text-lg sm:text-xl font-semibold block mb-1 text-accent"
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <CTAButton />
              <p className="mt-1 text-xs text-gray-500">
                14-дневная гарантия возврата денег
              </p>
            </div>
          </div>

          {/* ---- IMAGE SIDE ------------------------------------------------- */}
          <div className="flex justify-center items-center animate-fade-in order-1 md:order-2 -mx-4 sm:mx-0">
            <div className="relative w-full md:w-[135%] transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Spiral%20Chapters.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU3BpcmFsIENoYXB0ZXJzLnBuZyIsImlhdCI6MTc0NjgwMTA5NCwiZXhwIjoxNzc4MzM3MDk0fQ.1u992xTmfzKWeyuOxWjvLsKaBBtb39r03uEIT7Y50Do"
                alt="Обложки глав гайда"
                loading="eager"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
