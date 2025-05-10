import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Я наконец добралась до твоего гайда и решила записать тебе голосовым свои впечатления и мысли. Во-первых, это отдельное эстетическое удовольствие, которое я получаю от всего, к чему ты прикоснешься. Потому что это правда очень красиво, очень структурно то, что ты делаешь. Это такое первое впечатление, когда я в ноушене стала проходиться и по главам, и смотреть внутри. Второе, что мне очень понравилось, что ты пишешь с примерами. И где-то очень классно, что они есть, где-то мне их не хватило. И это просто так, идея на подумать. Может быть, в каких-то главах прямо добавлять еще побольше примеров или промтов прямо внутри главы.",
      highlight: "Отдельное эстетическое удовольствие",
      author: "Ирина"
    },
    {
      text: "А здесь второй отзыв",
      highlight: "Тоже может быть твой",
      author: ""
    },
    {
      text: "И конечно же третий",
      highlight: "Ну а вдруг...",
      author: ""
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="Отзывы" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:bg-gray-50 transition-all duration-300 ${index === 0 ? 'md:col-span-3 lg:col-span-2' : ''}`}
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
                  {index === 0 ? (
                    <Star className="h-6 w-6" style={{ 
                      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }} />
                  ) : (
                    <MessageSquare className="h-6 w-6" style={{ 
                      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }} />
                  )}
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg">
                    {testimonial.text}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-medium" style={{ 
                      background: 'linear-gradient(135deg, #E76832 0%, #FFC24B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {testimonial.highlight}
                    </p>
                    {testimonial.author && (
                      <p className="text-gray-600 font-medium">{testimonial.author}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;