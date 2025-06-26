import React, { useState, useEffect, useRef } from 'react';
import adpLogo from '../assets/adp-logo.png';

const getInitials = (fullName) => {
  if (!fullName) return '?';
  const names = fullName.split(' ');
  const initials = names.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

const Navbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    alert('Logout functionality not implemented yet.');
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg h-16 flex items-center justify-between px-8 z-10 flex-shrink-0 border-b border-slate-700">
      <div className="flex items-center space-x-4">
        <img src={adpLogo} alt="ADP Logo" className="h-8 w-auto" />
        <h1 className="text-lg md:text-xl font-bold text-white">Dashboard</h1>
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center space-x-3 cursor-pointer hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all duration-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-slate-200 font-medium hidden md:block">Welcome, {user.fullName}</span>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-200">
                {getInitials(user.fullName)}
              </div>
            </div>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 animate-slide-down">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{user.fullName}</p>
                  <p className="text-sm text-gray-500">{user.email || 'No email available'}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-slate-300">
            <div className="w-4 h-4 border-2 border-slate-400 border-t-white rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;