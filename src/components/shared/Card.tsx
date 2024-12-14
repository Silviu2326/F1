import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const Card = ({ title, icon: Icon, children }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        {Icon && <Icon className="w-6 h-6 text-[#e10600]" />}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;