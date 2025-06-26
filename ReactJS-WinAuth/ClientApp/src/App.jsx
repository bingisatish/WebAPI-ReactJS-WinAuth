import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Use the proxy defined in vite.config.js
        const response = await fetch('http://localhost:5001/api/user', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-slate-100 font-sans">
      <Navbar user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent user={user} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;