
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessagesSquare, 
  FileText, 
  ShoppingCart, 
  LineChart, 
  Settings, 
  LogOut, 
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AppSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: MessagesSquare, label: 'Messages', path: '/messages' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: ShoppingCart, label: 'Products', path: '/products' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-[220px] border-r border-gray-200 bg-white shadow-sm z-40 animate-slideInFromLeft">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-brand-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <h1 className="text-lg font-bold">PandemicNet</h1>
        </div>
      </div>
      
      <nav className="py-6 px-3 space-y-1">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <NavLink 
            key={path} 
            to={path} 
            className={({ isActive }) => cn(
              "sidebar-item", 
              isActive && "active"
            )}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
        
        <div className="pt-6 mt-6 border-t border-gray-200">
          <button className="sidebar-item text-gray-500 hover:text-red-500 w-full justify-start">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default AppSidebar;
