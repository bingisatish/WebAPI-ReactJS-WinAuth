import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white"> {/* Changed to h-screen and bg-white */}
      <Navbar toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className={`flex-1 p-8 transition-all duration-300 ease-in-out overflow-y-auto h-full ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}> {/* Added overflow-y-auto and h-full */}
          <h1>Welcome to the React Web API Win Authention</h1>
          <p>This is a clean, modular React implementation with exclusive submenus and right-aligned submenu items.</p>
        </div>
      </div>
    </div>
  );
}

export default App;