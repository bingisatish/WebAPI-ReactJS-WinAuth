import React, { useState } from 'react';

const MenuItem = ({ // Functional component for a menu item
  iconClass,
  label,
  isOpen,
  onClick,
  hasSubmenu,
  isSidebarCollapsed, // New prop
  submenuItems, // New prop for pop-up content
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200 text-gray-200 hover:text-white
        ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i className={`${iconClass} ${isSidebarCollapsed ? 'mx-auto' : ''}`}></i> {/* Center icon when collapsed */}
      {!isSidebarCollapsed && ( // Conditionally render label
        <span className="ml-3 flex-grow transition-opacity duration-300">{label}</span>
      )}
      {hasSubmenu && !isSidebarCollapsed && ( // Only show arrow if not collapsed
        <i className={`fas fa-chevron-right ml-auto transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}></i>
      )}

      {/* Pop-up Submenu for Collapsed Sidebar */}
      {isSidebarCollapsed && hasSubmenu && isHovered && (
        <div className="absolute left-full top-0 ml-2 w-48 bg-gray-700 rounded-md shadow-lg py-2 z-50 border border-gray-600">
          {/* Caret Indicator */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 transform rotate-45 border-l border-b border-gray-600"></div>
          {submenuItems.map((subItem, index) => (
            <a
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors duration-200"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;