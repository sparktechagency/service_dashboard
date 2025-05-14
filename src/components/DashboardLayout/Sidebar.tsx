import React, { useEffect } from 'react';
import { 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  X,
  FileText,
  MessageSquare,
  LayoutDashboard,
  UserCheck,
  BookA,
  ChartBarStacked,
  Mail,
  Rss
} from 'lucide-react';

import SidebarLink from './SidebarLink';

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
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-6 w-6 text-emerald-400" />
            <span className="text-xl font-bold">Dashflow</span>
          </div>
          <button 
            onClick={closeSidebar}
            className="md:hidden p-1 rounded-md hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          <SidebarLink icon={<LayoutDashboard size={18} />} href="/" label="Dashboard" active />
          <SidebarLink icon={<UserCheck size={18} />} href="/employers" label="Employers" />
          <SidebarLink icon={<BookA size={18} />} href="/candidates" label="Candidates" />
          <SidebarLink icon={<ChartBarStacked size={18} />} href="/category" label="Category" />
          <SidebarLink icon={<Mail size={18} />} href="/contacts" label="Contact" />
          <SidebarLink icon={<Rss size={18} />} href="/blogs" label="Blog" />
          <SidebarLink icon={<Users size={18} />} href="#" label="Team" />

          <div className="pt-4 mt-4 border-t border-slate-700">
            <SidebarLink icon={<Settings size={18} />} href="#" label="Settings" />
            <SidebarLink icon={<HelpCircle size={18} />} href="#" label="Help" />
          </div>
        </nav>

        {/* User Profile Area */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-slate-600 flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">admin@dashflow.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;