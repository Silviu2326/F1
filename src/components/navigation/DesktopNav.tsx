import React from 'react';
import { navigationLinks } from '../../config/navigation';
import NavLink from './NavLink';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigationLinks.map((link) => (
        <NavLink key={link.to} {...link} />
      ))}
    </div>
  );
};

export default DesktopNav;