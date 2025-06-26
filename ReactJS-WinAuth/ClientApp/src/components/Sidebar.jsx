import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Sidebar = ({ isCollapsed }) => { // Accept isCollapsed prop from parent
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Define your menu items as a data structure
  const menuItems = [
    {
      key: 'home',
      iconClass: 'fas fa-home',
      label: 'Home',
      hasSubmenu: true,
      submenu: [
        { label: 'Dashboard', href: '#' },
        { label: 'Activity', href: '#' },
      ],
    },
    {
      key: 'settings',
      iconClass: 'fas fa-cog',
      label: 'Settings',
      hasSubmenu: true,
      submenu: [
        { label: 'Profile', href: '#' },
        { label: 'Security', href: '#' },
      ],
    },
    {
      key: 'about',
      iconClass: 'fas fa-info-circle',
      label: 'About',
      hasSubmenu: false,
      onClick: () => alert('About clicked!'), // Example onClick for items without submenu
    },
  ];

  const handleMenuClick = (menuKey) => {
    setOpenSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  // Dynamic classes for sidebar. Added h-full and border-r.
  const sidebarClasses = `bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out h-full border-r border-gray-700 ${isCollapsed ? 'w-20' : 'w-64'}`;

  return (
    <aside className={sidebarClasses}>
      {/* Logo/App Title at the top of the sidebar */}
      <div className={`p-4 border-b border-gray-700 flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
        <i className="fas fa-cube text-indigo-400 text-2xl"></i>
        {!isCollapsed && <span className="ml-3 text-xl font-bold text-white whitespace-nowrap">App Name</span>}
      </div>

        <div className="menu flex-1 overflow-y-auto"> {/* Added flex-1 and overflow-y-auto */}
          {menuItems.map((item) => (
            <React.Fragment key={item.key}>
              <MenuItem
                iconClass={item.iconClass}
                label={item.label}
                isOpen={openSubmenu === item.key}
                onClick={item.hasSubmenu ? () => handleMenuClick(item.key) : item.onClick}
                hasSubmenu={item.hasSubmenu}
                isSidebarCollapsed={isCollapsed}
                submenuItems={item.submenu} // Pass submenu items for pop-up
              />
              {item.hasSubmenu && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === item.key && !isCollapsed ? 'max-h-96' : 'max-h-0'}`}>
                  {item.submenu.map((subItem, index) => (
                    <a key={index} href={subItem.href} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white text-right">{subItem.label}</a>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
    </aside>
  );
};

export default Sidebar;