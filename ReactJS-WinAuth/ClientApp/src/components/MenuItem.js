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
    <div className="menu-item" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <i className={iconClass}></i>
      <span>{label}</span>
      {hasSubmenu && (
        <i className={`fas fa-chevron-right arrow ${isOpen ? 'rotate' : ''}`}></i>
      )}
    </div>
  );
};

export default MenuItem;