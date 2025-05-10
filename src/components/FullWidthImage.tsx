import React from 'react';

interface FullWidthImageProps {
  imageUrl: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ imageUrl }) => {
  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <img
            src={imageUrl}
            alt="ChatGPT Interface"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;