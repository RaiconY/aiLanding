import React from 'react';

const FullWidthImage: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens_with_circle.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVuc193aXRoX2NpcmNsZS5wbmciLCJpYXQiOjE3NDY5MDM4OTEsImV4cCI6MTc3ODQzOTg5MX0.Jt-yXvakfADzbHRBdllz0vqSE1TE8oyjspjMM0I0YW4"
              alt="ChatGPT Interface"
              className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Интерфейс нового поколения
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Познакомься с будущим технологий уже сегодня. ChatGPT предоставляет интуитивно понятный интерфейс, который делает взаимодействие с ИИ простым и эффективным.
            </p>
            <ul className="space-y-4">
              {[
                'Умные подсказки для более точных результатов',
                'Контекстное обучение для персонализированных ответов',
                'Мгновенная обратная связь и корректировки'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E76832] to-[#FFC24B]" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;