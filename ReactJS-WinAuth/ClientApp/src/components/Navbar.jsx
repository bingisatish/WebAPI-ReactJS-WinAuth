import React from 'react';
import UserProfile from './UserProfile';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex justify-between items-center shadow-md"> {/* Reduced vertical padding */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 mr-4"
        >
          <i className="fas fa-bars text-xl"></i> {/* Hamburger icon */}
        </button>
        <div className="text-xl font-bold text-indigo-400 ml-4">My App</div> {/* Reduced font size */}
      </div>
      <div className="flex items-center">
        <UserProfile showWelcomeAdjacent={true} /> {/* Pass prop to show welcome message next to icon */}
      </div>
    </nav>
  );
};

export default Navbar;