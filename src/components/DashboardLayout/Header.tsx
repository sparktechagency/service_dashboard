import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 text-white h-16 flex items-center justify-between px-4 z-10">
      {/* Left side - Menu Button + Title on Mobile */}
      <div className="flex items-center">
        {children}
        <h1 className="md:hidden text-lg font-semibold text-white">Dashflow</h1>
      </div>

      {/* Search Bar - Hidden on Mobile */}
      {/* <div className="hidden md:flex relative mx-auto max-w-md w-full px-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-slate-400" />
          </div>
          <input 
            type="text" 
            className="bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-md focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 pr-4 py-2" 
            placeholder="Search..." 
          />
        </div>
      </div> */}

      {/* Right side - Notifications & User Profile */}
      <div className="flex items-center space-x-4">
        {/* Search button on mobile */}
        <button className="md:hidden p-2 rounded-md text-slate-200 hover:bg-slate-700 transition-colors">
          <Search size={18} />
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-md text-slate-200 hover:bg-slate-700 transition-colors">
            <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <Bell size={18} />
          </button>
        </div>
        
        {/* User Menu */}
        <div className="relative hidden md:block">
          <button className="flex items-center space-x-2 p-2 rounded-md text-slate-200 hover:bg-slate-700 transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDown size={16} />
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