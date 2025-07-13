import React, { useState } from 'react';
import { FaRobot, FaCode, FaBrain, FaTrophy } from 'react-icons/fa';
import PreparationSection from './PreparationSection';
import CertificationSection from './CertificationSection';
import TopicsSection from './TopicsSection';
import PreparationKits from './PreparationKits';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('practice');

  const tabClass = (tab) =>
    `text-base sm:text-lg px-4 py-2 font-semibold tracking-wide border-b-2 transition-colors duration-300 ${
      activeTab === tab
        ? 'border-cyan-400 text-white'
        : 'border-transparent text-slate-200 hover:text-cyan-300 hover:border-cyan-300'
    }`;

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 relative overflow-hidden bg-white">

      {/* 🌌 Wave Header */}
      <div className="relative w-full h-80 bg-gradient-to-br from-[#0f172a] via-[#1e1e2f] to-[#1a1a40] z-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            fill="#f8fafc"
            d="M0,160 C480,80 960,240 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* 🧭 Tabs */}
      <div className="relative z-10 -mt-36 px-4 sm:px-6 lg:px-12">
        <div className="flex justify-center space-x-6 pb-4 mb-16">
          <button className={tabClass('practice')} onClick={() => setActiveTab('practice')}>
            <FaCode className="inline mr-2" /> Practice
          </button>
          <button className={tabClass('ai')} onClick={() => setActiveTab('ai')}>
            <FaRobot className="inline mr-2" /> AI Tools
          </button>
          <button className={tabClass('leaderboard')} onClick={() => setActiveTab('leaderboard')}>
            <FaTrophy className="inline mr-2" /> Leaderboard
          </button>
        </div>
      </div>

      {/* 🔧 Tab Content */}
      <div className="relative z-10">
        {activeTab === 'practice' && (
          <div className="w-full">

            {/* 🔹 Preparation Section */}
            <div className="w-full bg-gradient-to-b from-[#f8fafc] to-[#1c2232]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
                <PreparationSection />
              </div>
            </div>

            {/* 🟣 Certification Section */}
            <div className="w-full bg-gradient-to-b from-[#1c2232] to-[#2b1f37]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
                <CertificationSection />
              </div>
            </div>

            {/* 🟢 Topics Section */}
            <div className="w-full bg-gradient-to-b from-[#2b1f37] to-[#172830]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
                <TopicsSection />
              </div>
            </div>

            {/* 🟠 Preparation Kits Section */}
            <div className="w-full bg-gradient-to-b from-[#172830] to-[#2b2e1f]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
                <PreparationKits />
              </div>
            </div>
          </div>
        )}

        {/* 🤖 AI Tools Section */}
        {activeTab === 'ai' && (
          <div className="w-full bg-gradient-to-b from-[#101010] via-[#0e0e14] to-[#1a1a1a] py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-white">
              <div className="bg-[#0f172a] p-8 rounded-md hover:shadow-lg hover:scale-105 transition">
                <FaBrain className="text-4xl mb-2 mx-auto text-teal-400" />
                <h3 className="text-lg font-semibold">AI Code Helper</h3>
                <p className="text-sm mt-1 text-slate-300">Get instant code suggestions</p>
              </div>
              <div className="bg-[#1e293b] p-8 rounded-md hover:shadow-lg hover:scale-105 transition">
                <FaRobot className="text-4xl mb-2 mx-auto text-fuchsia-400" />
                <h3 className="text-lg font-semibold">AI Quiz Generator</h3>
                <p className="text-sm mt-1 text-slate-300">Generate quizzes on any topic</p>
              </div>
              <div className="bg-[#0f172a] p-8 rounded-md hover:shadow-lg hover:scale-105 transition">
                <FaCode className="text-4xl mb-2 mx-auto text-amber-400" />
                <h3 className="text-lg font-semibold">AI Interview Simulator</h3>
                <p className="text-sm mt-1 text-slate-300">Practice mock interviews</p>
              </div>
            </div>
          </div>
        )}

        {/* 🏆 Leaderboard Section */}
        {activeTab === 'leaderboard' && (
          <div className="w-full bg-gradient-to-b from-[#101010] to-[#1a1a25] text-white text-center py-24 px-4 sm:px-6 lg:px-12">
            <FaTrophy className="text-6xl text-yellow-400 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Leaderboard Coming Soon</h2>
            <p className="text-slate-400">Stay tuned for exciting competitions and top performers</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
