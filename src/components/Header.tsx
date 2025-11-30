import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-[#E76832] to-[#FFC24B] bg-clip-text text-transparent">
              AI Guide
            </NavLink>
          </div>
          <nav className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-[#E76832]' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              Гайд
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
