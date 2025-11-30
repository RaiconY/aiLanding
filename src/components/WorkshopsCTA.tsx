import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const WorkshopsCTA: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E76832]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC24B]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles size={16} className="text-[#FFC24B]" />
          <span className="text-sm font-medium text-gray-200">Для команд и компаний</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Хотите внедрить AI в <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E76832] to-[#FFC24B]">рабочие процессы</span>?
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Проводим практические воркшопы для IT, маркетинга и менеджмента. 
          80% практики на ваших реальных задачах.
        </p>
        
        <NavLink 
          to="/workshops"
          className="inline-flex items-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-[#E76832] to-[#FFC24B] rounded-full hover:shadow-[0_0_20px_rgba(231,104,50,0.5)] transform hover:scale-105 transition-all duration-300"
        >
          Изучить
          <ArrowRight className="ml-2" size={20} />
        </NavLink>
      </div>
    </section>
  );
};

export default WorkshopsCTA;
