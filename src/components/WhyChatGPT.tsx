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
              src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/ChatGPT%20Interface.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvQ2hhdEdQVCBJbnRlcmZhY2UucG5nIiwiaWF0IjoxNzQ2ODAxNzE2LCJleHAiOjE3NzgzMzc3MTZ9.Z8txhmHG9lf_-9-V2-3Z-VU0s0Z7CRYA99uqmPJVRiE"
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