import React from 'react';

const FullWidthImage: React.FC = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <img
            src="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens_with_circle%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVuc193aXRoX2NpcmNsZSAoMSkucG5nIiwiaWF0IjoxNzQ2OTA0MzUwLCJleHAiOjE3Nzg0NDAzNTB9.fTllEdp66BfVieoSTuX2RpUKJJWI04_ar-xXQdroVhQ"
            alt="ChatGPT Interface"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;