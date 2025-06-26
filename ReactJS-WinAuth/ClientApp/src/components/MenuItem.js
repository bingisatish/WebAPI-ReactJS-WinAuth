import React from 'react';

const MenuItem = ({
  iconClass,
  label,
  isOpen,
  onClick,
  hasSubmenu,
  rightAlign,
}) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200 text-gray-200 hover:text-white" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <i className={iconClass}></i>
      <span className="ml-3 flex-grow">{label}</span>
      {hasSubmenu && (
        <i className={`fas fa-chevron-right ml-auto transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}></i>
      )}
    </div>
  );
};

export default MenuItem;