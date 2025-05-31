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
            onClick={() => {}}
            hasSubmenu={false}
          />
        </div>

        {/* User info and logout at the bottom */}
        <div style={{
          marginTop: 'auto',
          padding: '1.5rem 1rem 1.5rem 1rem',
          borderTop: '1px solid #2c3e50',
          background: 'rgba(44,62,80,0.97)'
        }}>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
            {fullName}
          </div>
          <div style={{ color: '#bdc3c7', fontSize: 14, marginBottom: 12 }}>
            {email}
          </div>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: '#e74c3c',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              padding: 0
            }}
          >
            <i className="fas fa-sign-out-alt" style={{ marginRight: 8 }}></i>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the React Sidebar</h1>
        <p>This is a clean, modular React implementation with exclusive submenus and right-aligned submenu items.</p>
      </div>

      {/* CSS styles */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .layout {
          display: flex;
        }
        /* Sidebar styles */
        .sidebar {
          width: 250px;
          background-color: #34495e;
          color: #ecf0f1;
          transition: width 0.3s;
          height: 100vh;
          position: fixed;
          display: flex;
          flex-direction: column;
        }
        /* Collapsed styles */
        .layout.collapsed .sidebar {
          width: 60px;
        }

        /* Toggle button */
        .toggle-btn {
          position: absolute;
          top: 10px;
          right: -40px;
          background-color: #34495e;
          border: none;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          color: #ecf0f1;
          z-index: 10;
        }
        .toggle-btn:hover {
          background-color: #3b5998;
        }

        /* Profile styles */
        .profile-section {
          padding: 20px 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .profile-icon {
          width: 60px;
          height: 60px;
          background-color: #2c3e50;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          border-radius: 50%;
          margin-bottom: 10px;
          user-select: none;
          color: #fff;
        }

        /* Menu styles */
        .menu {
          margin-top: 20px;
        }
        .menu-item {
          padding: 12px 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .menu-item:hover {
          background-color: #3b5998;
        }
        .menu-item i {
          margin-right: 15px;
          min-width: 20px;
          text-align: center;
        }

        /* Arrow icon rotation */
        .arrow {
          margin-left: auto;
          transition: transform 0.3s;
        }
        .rotate {
          transform: rotate(90deg);
        }

        /* Submenu styles (right aligned) */
        .sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: #2c3e50;
        }
        .sub-menu.show {
          max-height: 500px;
        }
        /* Submenu items right aligned */
        .sub-menu a {
          padding: 12px 40px;
          display: block;
          color: #ecf0f1;
          text-decoration: none;
          text-align: right;
        }
        .sub-menu a:hover {
          background-color: #3b5998;
        }

        /* Main content styling */
        .main-content {
          margin-left: 250px;
          padding: 20px;
          transition: margin-left 0.3s;
          width: calc(100% - 250px);
        }
        .layout.collapsed .main-content {
          margin-left: 60px;
          width: calc(100% - 60px);
        }

        /* Responsive adjustments */
        @media(max-width: 768px) {
          .sidebar {
            width: 200px;
          }
          .layout.collapsed .sidebar {
            width: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;