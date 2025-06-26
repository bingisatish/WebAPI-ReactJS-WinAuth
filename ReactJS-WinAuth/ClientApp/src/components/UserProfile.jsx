import React, { useState, useEffect, useRef } from 'react';

const getInitials = (fullName) => { // Helper function to get initials from a full name
  if (!fullName) return '';
  const names = fullName.split(' ');
  const initials = names.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

const UserProfile = ({ showWelcomeAdjacent }) => { // Added showWelcomeAdjacent prop
  const [userData, setUserData] = useState(null); // State to store fetched user data (e.g., from API)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref for detecting clicks outside the dropdown

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

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    alert('Logout functionality not implemented yet.');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-400 animate-pulse text-sm">Loading...</p>
      </div> // Smaller placeholder for navbar
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
    <div className="relative flex items-center" ref={dropdownRef}> {/* Added flex items-center for horizontal alignment */}
      {showWelcomeAdjacent && userData && (
        <span className="mr-3 text-lg text-gray-300 hidden md:block">Welcome, {userData.fullName}!</span>
      )}
      <div
        className="w-10 h-10 bg-indigo-500 text-white font-bold rounded-full flex items-center justify-center text-lg cursor-pointer shadow-md
                   transition-all duration-200 hover:bg-indigo-600 hover:scale-105 flex-shrink-0" // flex-shrink-0 to prevent shrinking
          onClick={toggleProfileDropdown}
        >
          {getInitials(userData.fullName)}
        </div>

      {profileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-700">
          <div className="px-4 py-2 border-b border-gray-700"> {/* Changed border color for consistency */}
            <p className="text-white font-semibold truncate">{userData.fullName}</p>
            <p className="text-gray-400 text-sm truncate">{userData.email || 'Not Available'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;