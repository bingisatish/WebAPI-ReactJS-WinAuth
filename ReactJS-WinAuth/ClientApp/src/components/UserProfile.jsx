import React, { useState } from 'react';

const getInitials = (fullName) => {
  if (!fullName) return '';
  const names = fullName.split(' ');
  const initials = names.map((name) => name[0]).join('');
  return initials.toUpperCase();
};

const UserProfile = ({ userData }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!userData) {
    return null;
  }

  return (
    <div 
      className="bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 text-white p-8 rounded-2xl shadow-2xl border border-purple-500/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      </div>
  );
};

export default UserProfile;