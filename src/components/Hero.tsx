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
                  className="bg-white/90 rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-all du
