import React from 'react';
import { motion } from 'framer-motion';

const PreparationSection = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-extrabold italic font-serif text-black mb-6 text-center">Your Preparation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Interview Preparation Kit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-gradient-to-br from-lime-900 via-blue-400 to-red-300 bg-opacity-90 rounded-lg shadow-md p-6 border border-lime-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors flex flex-col justify-between"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                PREPARATION KITS
              </span>
            </div>
            
            <h3 className="text-xl font- italic font-serif text-black mb-6 text-center">
              Interview Preparation Kit
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              Get interview ready for top companies by solving an interview preparation kit.
            </p>
            
            <div className="flex justify-center items-end h-full mt-4">
              
              <button className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg font-medium shadow hover:from-gray-700 hover:to-gray-900 active:from-gray-600 active:to-gray-800 focus:from-gray-600 focus:to-gray-800 transition-colors w-32 text-center">
                View all kits
              </button>
            </div>
          </motion.div>

          {/* Add First Skill */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="bg-gradient-to-br from-lime-900 via-blue-400 to-red-300 bg-opacity-90 rounded-lg shadow-md p-6 border border-lime-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors flex flex-col justify-between"
          >
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                NEW SKILL
              </span>
            </div>
            
            <h3 className="text-xl font- italic font-serif text-black mb-6 text-center">
              Add your first skill
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.
            </p>
            
            <div className="flex justify-center items-end h-full mt-4">
              
              <button className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg font-medium shadow hover:from-gray-700 hover:to-gray-900 active:from-gray-600 active:to-gray-800 focus:from-gray-600 focus:to-gray-800 transition-colors w-32 text-center">
                Explore Skills
              </button>
            </div>
          </motion.div>
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

export default PreparationSection;
