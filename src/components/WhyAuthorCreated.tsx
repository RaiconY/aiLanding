import React from 'react';
import SectionTitle from './SectionTitle';

const WhyAuthorCreated: React.FC = () => {
  const reasons = [
    {
      number: '1',
      title: 'Вера в технологию',
      description: 'За последние месяцы я написал более 30 статей про ИИ. Считаю эту технологию ключевой для будущего'
    },
    {
      number: '2',
      title: 'Личный опыт',
      description: 'Моя эффективность с ИИ выросла в 2-3 раза. Даже минимальные улучшения в использовании дают огромный эффект'
    },
    {
      number: '3',
      title: 'Миссия',
      description: 'Через гайд я делюсь знаниями с тысячами людей вместо десятков на консультациях. Через год этот навык станет критически важным'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Зачем я написал этот гайд" />
        
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
                  <span style={{ 
                    background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold'
                  }}>
                    {reason.number}
                  </span>
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

export default WhyAuthorCreated;