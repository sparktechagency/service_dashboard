import React, { useEffect } from 'react';

import SidebarLink from './SidebarLink';
import logo from "../../assets/images/logo.png";
import { menuItems } from '../../data/sidebar.data';
import { X } from 'lucide-react';
import { MdLogout } from 'react-icons/md';
import { logout } from '../../helper/SessionHelper';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // If screen becomes larger than md breakpoint, ensure menu doesn't stay closed
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } flex flex-col`}
      >
        {/* Sidebar Header */}
    
        <div className="flex items-center justify-center h-24 px-4 border-slate-700 relative">
          <div className="flex items-center justify-center space-x-2 bg-white">
            <img src={logo} alt="logo" className="h-18 w-32"/>
            </div>
          <button 
            onClick={closeSidebar}
            className="md:hidden p-1 rounded-md hover:bg-slate-700 text-slate-400 hover:text-white transition-colors absolute right-4"
          >
            <X size={20} />
          </button>
        </div> 


        {/* Sidebar Links */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {
            menuItems?.map((item, index)=> (
              <SidebarLink menuItem={item} key={index}/>
            ))
          }
        </nav>

        {/* User Profile Area */}
        <div className="p-4 border-t border-slate-700">
          <div onClick={()=>logout()} className="flex items-center space-x-2 cursor-pointer hover:bg-slate-700 hover:text-white p-2 rounded-md duration-200">
            <MdLogout/>
            <span className="text-semibold">Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;