import React from 'react';
import { Trophy } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import DesktopNav from './navigation/DesktopNav';
import MobileMenu from './navigation/MobileMenu';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
              <Trophy className="w-8 h-8" />
              <span className="font-bold text-xl">F1 Fantasy</span>
            </Link>
            <DesktopNav />
            <MobileMenu />
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;