import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../redux/features/admin/adminApi';
import { useAppSelector } from '../../redux/hooks/hooks';
import UserLoading from '../loader/UserLoading';
import profile_placeholder from "../../assets/images/profile_placeholder.png";
import { baseUrl } from '../../redux/features/api/apiSlice';


interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery(undefined);
  const { admin } = useAppSelector((state) => state.admin);


  return (
    <header className="bg-white text-white h-16 flex items-center justify-between px-4 z-10 border-b">
      <div className="flex items-center">
        {children}
        <h1 className="md:hidden text-lg font-semibold text-white">Dashflow</h1>
      </div>

      <div className="flex items-center space-x-3" onClick={() => navigate("/profile")}>   
        {isLoading ? (
            <UserLoading />
          ) : (
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={admin?.profile_image ? baseUrl+admin?.profile_image : profile_placeholder }
                alt="Profile"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = profile_placeholder;
                }}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">{admin?.name}</span>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;