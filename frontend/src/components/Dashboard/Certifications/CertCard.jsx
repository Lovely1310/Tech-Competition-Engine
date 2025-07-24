import React, { useState } from 'react';

// CertCard component: Used to display each certification in a 3D flip card style
const CertCard = ({ title, description, icon, duration, passingScore }) => {
  const [flipped, setFlipped] = useState(false); // Handles flip state (front/back)

  return (
    // Main wrapper with perspective for 3D effect
    <div className="group perspective w-full min-w-[220px] h-[240px] mx-auto">

      
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? 'rotate-y-180' : '' // Adds 180° rotation when flipped
        }`}
        style={{ transformStyle: 'preserve-3d' }} 
      >

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-purple-600/20 blur-2xl z-0 rounded-xl" />

        {/* ---------- FRONT SIDE ---------- */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#1f1b2e] to-[#221c3a] rounded-xl border border-purple-700 shadow-md z-10 p-5 flex flex-col justify-between">

          {/* Info icon to trigger flip */}
          <span
            className="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer z-20 text-xl"
            onMouseEnter={() => setFlipped(true)}   // Flip to back on hover
            onMouseLeave={() => setFlipped(false)}  // Flip back to front on leave
          >
            ℹ️
          </span>

          {/* Title and Description */}
          <div>
            <h3 className="text-lg font-bold text-purple-200">{title}</h3>
            <p className="text-slate-400 text-sm mt-2 leading-snug line-clamp-3">{description}</p>
          </div>

          {/* Action Button and Icon */}
          <div className="flex items-center justify-between mt-4">
            <button className="px-3 py-1 rounded-full border border-purple-500 text-white hover:bg-purple-700 transition-all">
              Get Certified
            </button>

            {/* Tech icon (from Simple Icons CDN) */}
            {icon && (
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon.toLowerCase()}.svg`}
                alt={title}
                className="w-10 h-10 opacity-80 filter invert"
              />
            )}
          </div>
        </div>

        {/* ----- BACK SIDE ------ */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#1f1b2e] rounded-xl border border-purple-700 z-0 p-5 flex flex-col justify-center items-center text-center text-purple-200">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm mb-2">
            ⏱ Duration: <span className="text-white">{duration}</span>
          </p>
          <p className="text-sm">
            🎯 Passing Score: <span className="text-white">{passingScore}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
