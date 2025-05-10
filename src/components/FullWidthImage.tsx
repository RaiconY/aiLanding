import React from 'react';

const FullWidthImage: React.FC = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <img
            src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens_with_circle.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVuc193aXRoX2NpcmNsZS5wbmciLCJpYXQiOjE3NDY5MDM4OTEsImV4cCI6MTc3ODQzOTg5MX0.Jt-yXvakfADzbHRBdllz0vqSE1TE8oyjspjMM0I0YW4"
            alt="ChatGPT Interface"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;