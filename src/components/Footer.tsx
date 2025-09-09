import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Гайд по ChatGPT</h2>
            <p className="text-gray-700 max-w-md">
              Пошаговое руководство для эффективного использования ИИ в повседневной жизни и работе
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Контакты</h3>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                <MessageCircle className="h-5 w-5 mr-2" style={{ color: '#40A7E3' }} />
                <a 
                  href="https://t.me/Ilya_Plv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#40A7E3] transition-colors"
                >
                  Телеграм @Ilya_Plv
                </a>
              </div>
            </div>
          </div>
          
          {/* Информация о поставщике услуг */}
          <div className="border-t border-gray-100 pt-6">
            <div className="text-center text-gray-400 text-xs">
              <p>Поставщик услуг: Плужников Илья Валентинович</p>
              <p>ИНН: 231002238598</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="absolute right-8 bottom-8 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-5 w-5" style={{ color: '#800080' }} />
      </button>
    </footer>
  );
};

export default Footer;
