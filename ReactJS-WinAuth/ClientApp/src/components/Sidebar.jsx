import React, { useState } from 'react';

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (menuKey) => {
    setOpenSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <aside className="w-48 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl flex flex-col border-r border-slate-700">
      <nav className="flex-1 p-3 space-y-1">
        <button className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-700/70 transition-all duration-300 text-m">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          <span className="font-medium">Home</span>
        </button>

        <div>
          <button
            onClick={() => handleMenuClick('workflow')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-700/70 transition-all duration-300 text-m"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">Workflow</span>
            </span>
            <svg className={`w-3 h-3 transform transition-all duration-300 ${openSubmenu === 'workflow' ? 'rotate-90 text-blue-400' : 'text-slate-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
          {openSubmenu === 'workflow' && (
            <div className="ml-6 mt-1 space-y-1 animate-slide-down">
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Outstanding</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Productivity</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Capacity Utilisation</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Extras</a>
            </div>
          )}

          {/* FITE */}
          
          <button
            onClick={() => handleMenuClick('fite')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-700/70 transition-all duration-300 text-m"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">FITE</span>
            </span>
            <svg className={`w-3 h-3 transform transition-all duration-300 ${openSubmenu === 'fite' ? 'rotate-90 text-blue-400' : 'text-slate-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
          {openSubmenu === 'fite' && (
            <div className="ml-6 mt-1 space-y-1 animate-slide-down">
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Outstanding</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Productivity</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Capacity Utilisation</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Extras</a>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => handleMenuClick('settings')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-700/70 transition-all duration-300 text-m"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">Settings</span>
            </span>
            <svg className={`w-3 h-3 transform transition-all duration-300 ${openSubmenu === 'settings' ? 'rotate-90 text-blue-400' : 'text-slate-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
          {openSubmenu === 'settings' && (
            <div className="ml-6 mt-1 space-y-1 animate-slide-down">
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Profile</a>
              <a href="#" className="block px-3 py-1 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all duration-200">Security</a>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;