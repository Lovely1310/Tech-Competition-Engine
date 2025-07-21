import React from 'react';

const BadgeSection = ({ badges = [] }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-2">🎖 My Badges</h3>
    {badges.length === 0 ? (
      <p>You have not unlocked any badges yet. <span className="text-blue-600 cursor-pointer">Get Badges</span></p>
    ) : (
      <ul className="list-disc ml-6">{badges.map((badge, idx) => <li key={idx}>{badge}</li>)}</ul>
    )}
  </div>
);

export default BadgeSection;
