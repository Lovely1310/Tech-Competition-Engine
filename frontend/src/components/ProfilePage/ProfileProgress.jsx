import React from 'react';

const ProfileProgress = ({ completion = 40 }) => (
  <div className="bg-gray-800 text-white p-6 rounded-xl flex justify-between items-center">
    <div>
      <p className="text-sm">Complete your profile</p>
      <h3 className="text-lg font-bold">Add your missing details →</h3>
      <p className="text-sm text-gray-300">This data will help to auto-fill your job applications</p>
    </div>
    <div className="w-16 h-16 relative">
      <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
        <path
          className="text-gray-500"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-white"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={`${completion}, 100`}
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
        {completion}%
      </div>
    </div>
  </div>
);

export default ProfileProgress;
