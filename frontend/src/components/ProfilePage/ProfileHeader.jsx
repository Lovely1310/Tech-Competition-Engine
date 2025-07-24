import React from 'react';

const ProfileHeader = ({ name, username }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center text-gray-500 text-3xl">
          {name?.charAt(0) || 'U'}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name} 🇮🇳</h2>
          <p className="text-gray-600">{username}</p>
        </div>
      </div>
      <i className="ri-edit-line text-gray-500 text-xl"></i>
    </div>
  );
};

export default ProfileHeader;
