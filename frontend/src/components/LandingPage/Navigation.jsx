import React from 'react';

const Navigation = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">HackerRank</span>
              <div className="w-3 h-3 bg-hr-green ml-1 rounded-sm"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Solutions
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                For Developers
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Log In
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Request Demo
              </a>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Create a free account
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-gray-100 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;