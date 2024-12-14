import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  label: string;
  icon: LucideIcon;
  className?: string;
  onClick?: () => void;
  showLabel?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  label, 
  icon: Icon, 
  className = '', 
  onClick,
  showLabel = false 
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center ${
        isActive ? 'text-[#e10600]' : 'text-white hover:text-[#e10600]'
      } transition-colors ${className}`}
    >
      <Icon className="w-5 h-5" />
      {(showLabel || window.innerWidth >= 768) && (
        <span className="ml-2">{label}</span>
      )}
    </Link>
  );
};

export default NavLink;