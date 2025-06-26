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
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-400 animate-pulse text-sm">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-md text-xs" role="alert">
        {error}
      </div>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="text-gray-100">
      <div className="relative flex items-center justify-center">
        <div
          className="w-16 h-16 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-2xl cursor-pointer shadow-md transition-all duration-200 hover:bg-blue-700 hover:scale-105"
          onClick={toggleProfileDropdown}
        >
          {getInitials(userData.fullName)}
        </div>
      </div>
      <h3 className="text-white text-base font-semibold mt-3 text-center truncate">{userData.fullName}</h3>
      <p className="text-gray-400 text-xs text-center truncate">{userData.email || 'Not Available'}</p>
    </div>
  );
};

export default UserProfile; 