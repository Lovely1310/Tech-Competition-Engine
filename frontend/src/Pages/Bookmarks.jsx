import React from 'react';
import DevelopersNavbar from '../components/DeveloperNavbar';

const Bookmarks = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#0c0c1e] to-[#1b1c2e] text-white">
      <DevelopersNavbar />

      {/* Content */}
      <div className="flex flex-col lg:flex-row px-4 md:px-8 py-10 gap-8">
        {/* Main Panel */}
        <div className="w-full lg:flex-1 bg-[#20233b] border border-[#2e314e] rounded-xl p-6 md:p-10 text-center shadow-xl">
          <p className="text-gray-400 text-base md:text-lg">
            You haven't bookmarked any challenges yet.
          </p>
        </div>

        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex flex-col gap-6">
          {/* Status */}
          <div className="bg-[#1a1d34] p-4 rounded-xl border border-[#2c2f4a] shadow">
            <h3 className="text-cyan-400 font-semibold mb-2">STATUS</h3>
            <label className="block mb-1 text-gray-300">
              <input type="checkbox" className="mr-2" /> Solved
            </label>
            <label className="block text-gray-300">
              <input type="checkbox" className="mr-2" /> Unsolved
            </label>
          </div>

          {/* Difficulty */}
          <div className="bg-[#1a1d34] p-4 rounded-xl border border-[#2c2f4a] shadow">
            <h3 className="text-cyan-400 font-semibold mb-2">DIFFICULTY</h3>
            <label className="block mb-1 text-gray-300">
              <input type="checkbox" className="mr-2" /> Easy
            </label>
            <label className="block mb-1 text-gray-300">
              <input type="checkbox" className="mr-2" /> Medium
            </label>
            <label className="block text-gray-300">
              <input type="checkbox" className="mr-2" /> Hard
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
