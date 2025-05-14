import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, href }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const active = pathname===href;
  return (
    <Link
      to={href}
      className={`flex items-center px-4 py-2.5 text-sm rounded-md transition-colors group ${
        active 
          ? 'bg-slate-700 text-white' 
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      <span className={`mr-3 ${active ? 'text-emerald-400' : 'text-slate-400 group-hover:text-white'}`}>
        {icon}
      </span>
      {label}
    </Link>
  );
};

export default SidebarLink;