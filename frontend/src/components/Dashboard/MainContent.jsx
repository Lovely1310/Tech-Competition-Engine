import React, { useState } from 'react';
import { FaRobot, FaCode, FaBrain, FaTrophy } from 'react-icons/fa';
import PreparationSection from './PreparationSection';
import CertificationSection from './CertificationSection';
import TopicsSection from './TopicsSection';
import PreparationKits from './PreparationKits';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('practice');

  const tabClass = (tab) =>
    `px-4 py-2 font-semibold transition-colors duration-200 focus:outline-none ${
      activeTab === tab
        ? 'text-blue-600 underline'
        : 'text-black hover:text-green-500'
    }`;

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 animated-gradient-bg">
      {/* Tabs */}
      <div className="flex justify-center space-x-2 mb-6 bg-transparent shadow-none p-0">
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
      {/* Tab Content */}
      <div>
        {activeTab === 'ai' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform">
              <FaBrain className="text-3xl mb-2" />
              <span className="font-bold">AI Code Helper</span>
              <span className="text-xs mt-1 opacity-80">Get instant code suggestions</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform">
              <FaRobot className="text-3xl mb-2" />
              <span className="font-bold">AI Quiz Generator</span>
              <span className="text-xs mt-1 opacity-80">Generate quizzes on any topic</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105 transition-transform">
              <FaCode className="text-3xl mb-2" />
              <span className="font-bold">AI Interview Simulator</span>
              <span className="text-xs mt-1 opacity-80">Practice mock interviews</span>
            </button>
          </div>
        )}
        {activeTab === 'practice' && (
          <div className="w-full space-y-8">
            <PreparationSection />
            <CertificationSection />
            <TopicsSection />
            <PreparationKits />
          </div>
        )}
        {activeTab === 'leaderboard' && (
          <div className="relative flex flex-col items-center justify-center h-40 text-gray-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-60 blur-2xl" style={{backgroundSize: '200% 200%'}} />
            {/* Floating shapes */}
            <div className="absolute left-10 top-4 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-float-slow" />
            <div className="absolute right-16 bottom-2 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-float-medium" />
            <div className="absolute left-1/2 top-1/2 w-12 h-12 bg-purple-300 rounded-full opacity-30 animate-float-fast" style={{transform: 'translate(-50%, -50%)'}} />
            {/* Leaderboard Content */}
            <FaTrophy className="relative z-10 text-5xl mb-2 text-yellow-400" />
            <span className="relative z-10 font-bold text-lg">Leaderboard coming soon!</span>
            {/* Animations */}
            <style>{`
              @keyframes gradient-move {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-gradient-move {
                animation: gradient-move 8s ease-in-out infinite;
              }
              @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              .animate-float-slow {
                animation: float-slow 7s ease-in-out infinite;
              }
              @keyframes float-medium {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
              }
              .animate-float-medium {
                animation: float-medium 5s ease-in-out infinite;
              }
              @keyframes float-fast {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
              .animate-float-fast {
                animation: float-fast 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        )}
      </div>
      {/* Add animated gradient background style */}
      <style>{`
        .animated-gradient-bg {
          background: linear-gradient(270deg,rgb(73, 35, 101),rgb(38, 73, 90),rgb(44, 120, 85),rgb(27, 38, 79), #a4508b);
          background-size: 600% 600%;
          animation: gradientBG 16s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default MainContent;
