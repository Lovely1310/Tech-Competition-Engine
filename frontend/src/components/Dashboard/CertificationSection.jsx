import React from 'react';
import { motion } from 'framer-motion';

const CertificationSection = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-extrabold italic font-serif text-black mb-6 text-center">Certification</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Problem Solving Basic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-gradient-to-br from-lime-900 via-blue-400 to-red-300 bg-opacity-90 rounded-lg shadow-md p-6 border border-lime-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors flex flex-col justify-between"
            
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font- italic font-serif text-black mb-6 text-center">
                Problem Solving (Basic)
              </h3>
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-600">!</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center mt-4">
              
              <button className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg font-medium shadow hover:from-gray-700 hover:to-gray-900 active:from-gray-600 active:to-gray-800 focus:from-gray-600 focus:to-gray-800 transition-colors w-32 text-center">
                Get Certified
              </button>
            </div>
          </motion.div>

          {/* Python Basic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="bg-gradient-to-br from-lime-900 via-blue-400 to-red-300 bg-opacity-90 rounded-lg shadow-md p-6 border border-lime-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors flex flex-col justify-between"
            
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font- italic font-serif text-black mb-6 text-center">
                Python (Basic)
              </h3>
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-600">!</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center mt-4">
              
              <button className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg font-medium shadow hover:from-gray-700 hover:to-gray-900 active:from-gray-600 active:to-gray-800 focus:from-gray-600 focus:to-gray-800 transition-colors w-32 text-center">
                Get Certified
              </button>
            </div>
          </motion.div>

          {/* Stand out from the crowd */}
          <div className="bg-gradient-to-br from-purple-800 to-slate-900 rounded-lg p-6 text-white flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:ring-4 hover:ring-green-400/60 hover:scale-105 active:shadow-2xl active:ring-4 active:ring-green-400/60 active:scale-105 focus:shadow-2xl focus:ring-4 focus:ring-green-400/60 focus:scale-105">
            <h3 className="text-lg font-semibold mb-3">
              Stand out from the crowd
            </h3>
            
            <p className="text-300 font- italic font-serif text-gray mb-6 text-center">
              Take the HackerRank Certification Test and make your profile stand out
            </p>
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-blue-400 hover:to-purple-400 active:from-blue-300 active:to-purple-300 focus:from-blue-300 focus:to-purple-300 transition-colors border-0 w-48 mx-auto block text-center mt-4">
              View all certifications
            </button>
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

export default CertificationSection;
