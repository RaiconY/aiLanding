import React from 'react';
import { BookOpen, RefreshCw, Timer } from 'lucide-react';
import SectionTitle from './SectionTitle';

const WhyGuide: React.FC = () => {
  const reasons = [
    {
      icon: <BookOpen className="h-6 w-6" style={{ 
        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }} />,
      title: 'Структурированное знание',
      description: 'От простого к сложному. И только то, что реально работает'
    },
    {
      icon: <RefreshCw className="h-6 w-6" style={{ 
        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }} />,
      title: 'Проверенный опыт',
      description: 'Почти все техники я использую для себя и внутри своих проектов'
    },
    {
      icon: <Timer className="h-6 w-6" style={{ 
        background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }} />,
      title: 'Экономия времени',
      description: 'Готовые решения вместо бесконечных экспериментов и поиска в интернете'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Почему гайд как способ подачи материала" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'white',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box'
                  }}
                >
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGuide;