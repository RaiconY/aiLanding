import React from 'react';

interface FullWidthImageProps {
  imageUrl: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ imageUrl }) => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <img
            src={imageUrl}
            alt="ChatGPT Interface"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;