import React from 'react';

const CertificationSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">Certification</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problem Solving Basic */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Problem Solving (Basic)
            </h3>
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">!</span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-green-400 to-lime-300 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-orange-500 hover:to-yellow-400 active:from-orange-500 active:to-yellow-400 focus:from-orange-500 focus:to-yellow-400 transition-colors border-0">
              Get Certified
            </button>
          </div>
        </div>

        {/* Python Basic */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Python (Basic)
            </h3>
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">!</span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-green-400 to-lime-300 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-orange-500 hover:to-yellow-400 active:from-orange-500 active:to-yellow-400 focus:from-orange-500 focus:to-yellow-400 transition-colors border-0">
              Get Certified
            </button>
          </div>
        </div>

        {/* Stand out from the crowd */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-white transition-all duration-300 hover:shadow-2xl hover:ring-4 hover:ring-green-400/60 hover:scale-105 active:shadow-2xl active:ring-4 active:ring-green-400/60 active:scale-105 focus:shadow-2xl focus:ring-4 focus:ring-green-400/60 focus:scale-105">
          <h3 className="text-lg font-semibold mb-3">
            Stand out from the crowd
          </h3>
          
          <p className="text-gray-300 text-sm mb-6">
            Take the HackerRank Certification Test and make your profile stand out
          </p>
          
          <button className="bg-gradient-to-r from-green-400 to-lime-300 text-white px-4 py-2 rounded-lg font-medium w-full shadow hover:from-orange-500 hover:to-yellow-400 active:from-orange-500 active:to-yellow-400 focus:from-orange-500 focus:to-yellow-400 transition-colors border-0">
            View all certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;