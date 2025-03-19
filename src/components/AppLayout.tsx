
import React from 'react';
import AppSidebar from './AppSidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AppSidebar />
      <div className="flex-1 pl-[220px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
