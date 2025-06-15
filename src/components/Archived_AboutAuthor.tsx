import React from 'react';
import { User, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="Кто я" />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex-shrink-0">
              <div 
                className="w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-[#800080] to-[#ff6b81] p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <User className="h-20 w-20 text-[#800080]" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-6 max-w-2xl">
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Последние 6 лет занимаюсь продуктовым и UX дизайном — создаю приложения и сайты, работаю в стартапах
                </p>
                
                <p>
                 В последний год сильно увлёкся ИИ темой и решил, что буду делиться со всеми
                </p>
                
                <p>
                  Этот гайд — результат этого увлечения
                </p>

              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <a 
                  href="https://t.me/Ilya_Plv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-[#800080] hover:text-[#ff6b81] transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">@Ilya_Plv</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;