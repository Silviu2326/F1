import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../../config/navigation';
import NavLink from './NavLink';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-white hover:text-gray-200 transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-black border-t border-[#e10600] shadow-lg z-50">
            <div className="flex flex-col divide-y divide-gray-800">
              {navigationLinks.map((link) => (
                <div key={link.to} className="px-4">
                  <NavLink 
                    {...link} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-4 text-base font-medium"
                    showLabel
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;