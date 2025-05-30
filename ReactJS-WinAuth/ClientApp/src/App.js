import React, { useState, useEffect } from 'react';
import './App.css'; // Import custom CSS for styling

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
      <nav className="navbar">
        <h1 className="navbar-title">Windows Authentication Demo</h1>
        {userData && (
          <div className="profile-container">
            <div className="profile-circle" onClick={toggleDropdown}>
              {getInitials(userData.fullName)}
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p><strong>Email:</strong> {userData.email || 'Not Available'}</p>
                <button className="logout-button" onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </nav>

      <div className="side-nav">
        <ul>
          <li className="accordion" onClick={() => toggleAccordion(0)}>
            Dashboard
          </li>
          <li className="accordion" onClick={() => toggleAccordion(1)}>
            Settings
            <ul className={`submenu ${activeAccordion === 1 ? 'active' : ''}`}>
              <li>Profile</li>
              <li>Account</li>
            </ul>
          </li>
          <li className="accordion" onClick={() => toggleAccordion(2)}>
            Help
          </li>
        </ul>
      </div>

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