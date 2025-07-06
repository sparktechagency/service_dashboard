import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../redux/features/admin/adminApi';
import { useAppSelector } from '../../redux/hooks/hooks';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery(undefined);
  const { admin } = useAppSelector((state) => state.admin);


  return (
    <header className="bg-white text-white h-16 flex items-center justify-between px-4 z-10 border-b">
      {/* Left side - Menu Button + Title on Mobile */}
      <div className="flex items-center">
        {children}
        <h1 className="md:hidden text-lg font-semibold text-white">Dashflow</h1>
      </div>

      {/* Right side - Notifications & User Profile */}
      <div className="flex items-center space-x-3" onClick={() => navigate("/profile")}>   
         {/* User Avatar */}
        <button className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-600 transition-colors">
          <User size={16} />
        </button>     
        {/* User Menu */}
        <div className="relative hidden md:block">
          <button className="flex items-center space-x-2 p-2 rounded-md text-black transition-colors duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-lg font-medium">John Doe</span>
              {/* <ChevronDown size={16} /> */}
            </div>
          </button>
        </div>
        
       
      </div>
    </header>
  );
};

export default Header;