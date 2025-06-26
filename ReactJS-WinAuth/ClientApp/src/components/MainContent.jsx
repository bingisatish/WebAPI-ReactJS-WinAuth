import React from 'react';

const MainContent = ({ user, loading, error }) => {
  return (
    <main className="flex-1 p-4 md:p-8 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen overflow-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-center min-h-full">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
            Welcome
          </h1>
          {user && (
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {user.fullName}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;