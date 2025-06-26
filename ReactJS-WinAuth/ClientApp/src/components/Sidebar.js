import React, { useState } from 'react';
import UserProfile from './UserProfile';
import MenuItem from './MenuItem';

const Sidebar = () => { // Removed fullName, email props as UserProfile fetches its own
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleMenuClick = (menuKey) => {
    setOpenSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleLogout = () => {
    alert('Logout functionality not implemented yet.');
  };

  // Dynamic classes for sidebar and main content
  const sidebarClasses = `bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`;
  const mainContentClasses = `flex-1 p-8 transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-20' : 'ml-64'}`;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="p-4 border-b border-gray-700">
          <UserProfile /> {/* UserProfile now fetches its own data */}
        </div>

        <div className="menu">
          {/* Menu with submenu */}
          <MenuItem
            iconClass="fas fa-home"
            label="Home"
            isOpen={openSubmenu === 'home'}
            onClick={() => handleMenuClick('home')}
            hasSubmenu={true}
          />
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === 'home' ? 'max-h-screen' : 'max-h-0'}`}>
            <a href="#" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Activity</a>
          </div>

          {/* Settings with submenu */}
          <MenuItem
            iconClass="fas fa-cog"
            label="Settings"
            isOpen={openSubmenu === 'settings'}
            onClick={() => handleMenuClick('settings')}
            hasSubmenu={true}
          />
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === 'settings' ? 'max-h-screen' : 'max-h-0'}`}>
            <a href="#" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Profile</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Security</a>
          </div>

          {/* No submenu */}
          <MenuItem
            iconClass="fas fa-info-circle"
            label="About"
            isOpen={false}
            onClick={() => { }}
            hasSubmenu={false}
          />
        </div>

        {/* User info and logout at the bottom */}
        <div className="mt-auto p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex flex-col items-center">
            {/* These might be redundant if UserProfile is already showing details */}
            {/* <div className="text-sm text-gray-400">{fullName}</div>
            <div className="text-sm text-gray-400">{email}</div> */}
            <button className="w-full mt-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center transition-colors duration-200" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={mainContentClasses}>
        <h1>Welcome to the React Web API Win Authention</h1>
        <p>This is a clean, modular React implementation with exclusive submenus and right-aligned submenu items.</p>
      </div>
    </div>
  );
};

export default Sidebar;