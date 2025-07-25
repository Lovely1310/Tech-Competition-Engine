import React, { useEffect, useState } from 'react';
import { RiMedalLine } from 'react-icons/ri';

const LOCAL_KEY = 'profile_badges';

const BadgesCard = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      setBadges(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="bg-[#f9f9fc] rounded-2xl p-6 shadow-sm border border-[#e4e4e7]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <RiMedalLine className="text-xl text-[#111827]" />
          <h2 className="text-base font-semibold text-[#111827]">My Badges</h2>
        </div>
      </div>

      {/* Content */}
      {badges.length === 0 ? (
        <p className="text-sm text-[#6b7280]">
          You have not unlocked any badges yet.{' '}
          <a
            href="/get-badges"
            className="text-[#2563eb] hover:underline font-medium"
          >
            Get Badges
          </a>
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={badge.icon}
                alt={badge.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-[#111827] font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BadgesCard;
