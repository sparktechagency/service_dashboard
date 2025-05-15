import React from 'react';
import { Search, Bell, User } from 'lucide-react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-white text-white h-16 flex items-center justify-between px-4 z-10 border-b">
      {/* Left side - Menu Button + Title on Mobile */}
      <div className="flex items-center">
        {children}
        <h1 className="md:hidden text-lg font-semibold text-white">Dashflow</h1>
      </div>

      {/* Right side - Notifications & User Profile */}
      <div className="flex items-center space-x-4">
        {/* Search button on mobile */}
        <button className="md:hidden p-2 rounded-md text-primary hover:bg-slate-700 transition-colors">
          <Search size={18} />
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-md text-black hover:bg-primary hover:text-white transition-colors duration-200">
            <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <Bell size={18} />
          </button>
        </div>
        
        {/* User Menu */}
        <div className="relative hidden md:block">
          <button className="flex items-center space-x-2 p-2 rounded-md text-black transition-colors duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-lg font-medium">John Doe</span>
              {/* <ChevronDown size={16} /> */}
            </div>
          </button>
        </div>
        
        {/* User Avatar (mobile) */}
        <button className="md:hidden w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-600 transition-colors">
          <User size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;