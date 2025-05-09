import React from 'react';
import SectionTitle from './SectionTitle';

const WhyChatGPT: React.FC = () => {
  const reasons = [
    {
      title: 'Полнота функций',
      description: 'У ChatGPT Больше возможностей для обычного пользователя, чем у конкурентов'
    },
    {
      title: 'Основа для понимания',
      description: 'Научившись работать с ChatGPT, легко освоите любые другие ИИ-сервисы'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Почему ChatGPT — лучший выбор для начала" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - Image */}
          <div className="md:col-span-7 flex items-center justify-center">
            <img 
              src="https://file.notion.so/f/f/164031f6-d68d-4127-88fa-7c852ed197d3/a35675b2-77b1-48e7-a10b-b62f1e5dd89a/image.png?table=block&id=1ed79816-5e3e-80b5-9d08-cb30aaf93e47&spaceId=164031f6-d68d-4127-88fa-7c852ed197d3&expirationTimestamp=1746748800000&signature=tT--AH5IJLhv-CKBcHfle4pSG-47_Qc3m5BcTGTc94Q&downloadName=image.png"
              alt="AI Technology Visualization"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChatGPT;