import React from 'react';

const PreparationKits = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Preparation Kits</h2>
        <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View all kits
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1 Week Preparation Kit */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            1 Week Preparation Kit
          </h3>
          
          {/* Responsive stats for mobile/desktop with bullets */}
          <div className="text-gray-600 text-sm mb-4">
            <div className="flex items-start md:inline"><span className="mr-1">•</span>Challenges: 21</div>
            <div className="flex items-start md:inline md:ml-2"><span className="mr-1">•</span>Attempts: 1096697</div>
            <div className="flex items-start md:inline md:ml-2"><span className="mr-1">•</span>Mock Test: 0</div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              Problem Solving (Basic)
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              Problem Solving (Intermediate)
            </span>
            <span className="text-gray-500 text-xs">+1</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              </div>
            <span className="text-xs text-gray-500">1 week ago</span>
          </div>
        </div>

        {/* 1 Month Preparation Kit */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            1 Month Preparation Kit
          </h3>
          
          {/* Responsive stats for mobile/desktop with bullets */}
          <div className="text-gray-600 text-sm mb-4">
            <div className="flex items-start md:inline"><span className="mr-1">•</span>Challenges: 54</div>
            <div className="flex items-start md:inline md:ml-2"><span className="mr-1">•</span>Attempts: 514604</div>
            <div className="flex items-start md:inline md:ml-2"><span className="mr-1">•</span>Mock Test: 0</div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              Problem Solving (Basic)
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              Problem Solving (Intermediate)
            </span>
            <span className="text-gray-500 text-xs">+1</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              </div>
            <span className="text-xs text-gray-500">1 month ago</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationKits;