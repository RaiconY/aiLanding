import React from 'react';

const FullWidthImage: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/ChatGPT%20Interface.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvQ2hhdEdQVCBJbnRlcmZhY2UucG5nIiwiaWF0IjoxNzQ2ODAxNzE2LCJleHAiOjE3NzgzMzc3MTZ9.Z8txhmHG9lf_-9-V2-3Z-VU0s0Z7CRYA99uqmPJVRiE"
        alt="ChatGPT Interface"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Интерфейс нового поколения
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Познакомься с будущим технологий уже сегодня
        </p>
      </div>
    </section>
  );
};

export default FullWidthImage;