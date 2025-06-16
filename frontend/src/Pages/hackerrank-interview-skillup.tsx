import React, { useState } from 'react';

const HackerRankSkillup = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50 p-8 lg:p-16 min-h-screen">
      {/* Left Content */}
      <div className="flex-1 max-w-lg mr-8">
        <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          HACKERRANK SKILLUP
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Find skills inside your company
        </h1>
        
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Empower developers to showcase their skills, earn certifications, and gain 
          recognition - while helping you strengthen your organization. Our AI Tutor helps 
          developers learn as they go, while our advanced insights help you understand 
          the skillsets of your organization.
        </p>
        
        <button className="flex items-center text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors">
          Learn more 
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Right Video/Demo Area */}
      <div className="flex-1 max-w-2xl">
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 mx-4 text-sm text-gray-500">
              hackerrank.com/skillup
            </div>
          </div>

          {/* Video/Content Area */}
          <div className="aspect-video bg-gray-50 flex items-center justify-center relative">
            {/* Placeholder for video */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100">
              <div className="absolute inset-4 bg-white rounded shadow-sm">
                {/* Mock interface elements */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex-1 h-8 bg-blue-500 rounded"></div>
                    <div className="w-16 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video placeholder overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Video will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HackerRankInterview = () => {
  const [activeTab, setActiveTab] = useState('Test Results');

  return (
    <div className="flex items-center justify-between bg-white p-8 lg:p-16 min-h-screen">
      {/* Left Video/Demo Area */}
      <div className="flex-1 max-w-2xl mr-8">
        <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          {/* IDE Chrome */}
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-300 text-sm ml-4">Untitled</div>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">AI</div>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Exit</button>
            </div>
          </div>

          {/* IDE Content */}
          <div className="flex h-96">
            {/* Sidebar */}
            <div className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
              <div className="w-6 h-6 text-green-400">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
              <div className="w-6 h-6 text-gray-400">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-6 h-6 text-gray-400">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 bg-gray-900 relative">
              {/* Video placeholder overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Live coding video will be added here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="bg-gray-800 border-t border-gray-700">
            <div className="flex">
              {['Test Results', 'Help'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="flex-1"></div>
              <div className="flex items-center space-x-2 px-4">
                <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm">Run Tests</button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 max-w-lg">
        <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          HACKERRANK INTERVIEW
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Pair-programming interviews on demand
        </h1>
        
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Get an accurate sense for what it would be like to work together by pair 
          programming with candidates on real-world scenarios. Review code, fix bugs, 
          build a feature, and see the result, all within an interview setting using pre-set 
          repos or one of your own.
        </p>
        
        <button className="flex items-center text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors">
          Learn more 
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      {/* First Component - SkillUp */}
      <HackerRankSkillup />
      
      {/* Second Component - Interview */}
      <HackerRankInterview />
    </div>
  );
};

export default App;