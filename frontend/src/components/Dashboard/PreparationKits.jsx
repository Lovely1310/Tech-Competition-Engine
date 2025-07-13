import React from 'react';

const PreparationKits = () => {
  return (
    <>
      <section className="sm:pl-12">
        
        <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontFamily: '"Press Start 2P", cursive' }} className="text-2xl text-black mb-4 text-center">PREPARATION KITS</h2>
          <a href="#" className="text-white hover:text-green-500 text-sm font-medium transition-colors">
            View all kits
          </a>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* 1 Week Preparation Kit */}
          <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              1 Week Preparation Kit
            </h3>
            
            {/* Responsive stats for mobile/desktop with bullets */}
            <div className="text-gray-600 text-sm mb-4">
              <div className="flex items-start md:inline"><span className="mr-1">•</span>Challenges: 21</div>
              <div className="flex items-start md:inline md:ml-2"><span className="mr-1">•</span>Attempts: 109697</div>
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
          <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-200">
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
      <style>{`
        .animated-card-bg {
          background: linear-gradient(120deg, #f3e7fa 0%, #e0eafc 50%, #f9f9f9 100%);
          background-size: 200% 200%;
          animation: cardGradientMove 8s ease-in-out infinite;
        }
        @keyframes cardGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default PreparationKits;
