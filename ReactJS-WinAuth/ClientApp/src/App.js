import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/user', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user information. Please make sure the API is running.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(prev => !prev);
  };

  // Toggle only when clicking the parent menu item
  const toggleAccordion = (index) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const logout = () => {
    alert('Logout functionality not implemented yet.');
  };

  const getInitials = (fullName) => {
    if (!fullName) return '';
    const names = fullName.split(' ');
    const initials = names.map((name) => name[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Windows Authentication Demo</h1>
        {userData && (
          <div className="profile-container" style={{ position: 'relative' }}>
            {/* Profile circle */}
            <div className="profile-circle" onClick={toggleProfileDropdown}>
              {getInitials(userData.fullName)}
            </div>
            {/* Profile Dropdown */}
            {profileDropdownOpen && (
              <div className="dropdown-menu">
                <div style={{ padding: '0.5rem 1rem' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Name:</p>
                  <p style={{ marginBottom: '0.5rem' }}>{userData.fullName}</p>
                  <p><strong>Email:</strong> {userData.email || 'Not Available'}</p>
                </div>
                <button className="logout-button" onClick={logout}>
                  <span className="icon">
                    <i className="fas fa-sign-out-alt"></i> {/* Font Awesome logout icon */}
                  </span>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Side Navigation */}
      <div className="side-nav">
        <ul>
          {/* Main menu item */}
          <li className="accordion" onClick={() => toggleAccordion(0)}>
            Dashboard
          </li>
          {/* Parent menu with submenu */}
          <li className="accordion" onClick={() => toggleAccordion(1)}>
            Settings
            <ul className={`submenu ${activeAccordion === 1 ? 'active' : ''}`}>
              {/* Submenu items - clicking these won't toggle the submenu */}
              <li>Profile</li>
              <li>Account</li>
            </ul>
          </li>
          {/* Another main menu item */}
          <li className="accordion" onClick={() => toggleAccordion(2)}>
            Help
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {loading && <p className="loading">Loading user information...</p>}
        {error && <div className="error">{error}</div>}
        {userData && (
          <div className="user-info">
            <h2>Welcome, {userData.fullName}!</h2>
            <p><strong>Username:</strong> {userData.userName}</p>
            <p><strong>Domain:</strong> {userData.domain}</p>
            <p><strong>Email:</strong> {userData.email || 'Not Available'}</p>
            <p><strong>Authentication Status:</strong> {userData.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;