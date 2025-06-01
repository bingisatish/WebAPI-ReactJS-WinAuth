import React, { useState } from 'react';
import UserProfile from './UserProfile';
import MenuItem from './MenuItem';

const Sidebar = ({ fullName, email }) => {
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

  return (
    <div className={`layout${isCollapsed ? ' collapsed' : ''}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section" >
          <UserProfile
            fullName={fullName}
            email={email}
            logout={handleLogout}
          />
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
          <div className={`sub-menu${openSubmenu === 'home' ? ' show' : ''}`}>
            <a href="#">Dashboard</a>
            <a href="#">Activity</a>
          </div>

          {/* Settings with submenu */}
          <MenuItem
            iconClass="fas fa-cog"
            label="Settings"
            isOpen={openSubmenu === 'settings'}
            onClick={() => handleMenuClick('settings')}
            hasSubmenu={true}
          />
          <div className={`sub-menu${openSubmenu === 'settings' ? ' show' : ''}`}>
            <a href="#">Profile</a>
            <a href="#">Security</a>
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
        <div
          style={{
            marginTop: 'auto',
            padding: '1.5rem 0 0 0',
            borderTop: '1px solid #2c3e50',
            background: 'rgba(44,62,80,0.97)'
          }}
        >
          <div className="sidebar-bottom">
            <div className="sidebar-user-name">{fullName}</div>
            <div className="sidebar-user-email">{email}</div>
            <button className="logout-btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt" style={{ marginRight: 10 }}></i>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the React Web API Win Authention</h1>
        <p>This is a clean, modular React implementation with exclusive submenus and right-aligned submenu items.</p>
      </div>
    </div>
  );
};

export default Sidebar;