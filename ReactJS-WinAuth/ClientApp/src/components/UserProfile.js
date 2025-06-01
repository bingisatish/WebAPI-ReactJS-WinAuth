import React, { useState, useEffect } from 'react';

const getInitials = (fullName) => {
  if (!fullName) return '';
  const names = fullName.split(' ');
  const initials = names.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        setError('Failed to load user information. Please make sure the API is running.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const logout = () => {
    alert('Logout functionality not implemented yet.');
  };

  if (loading) {
    return <p className="loading">Loading user information...</p>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div
      className="user-info"
      style={{
        background: 'rgba(44,62,80,0.97)', // Same as side navigation
        color: '#ecf0f1',
        padding: '1.5rem',
        boxShadow: '0 4px 24px 0 rgba(37, 73, 109, 0.13)',
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <div
        className="profile-container"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="profile-circle"
          onClick={toggleProfileDropdown}
        >
          {getInitials(userData.fullName)}
        </div>
      </div>
      <h3 style={{ color: '#fff' }}>Welcome, {userData.fullName}!</h3>
      <p>{userData.email || 'Not Available'}</p>
    </div>
  );
};

export default UserProfile; 