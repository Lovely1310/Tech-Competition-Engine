import React from 'react';

const PreparationSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">Your Preparation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Interview Preparation Kit */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              PREPARATION KITS
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Interview Preparation Kit
          </h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Get interview ready for top companies by solving an interview preparation kit.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-green-400 to-lime-300 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-orange-500 hover:to-yellow-400 active:from-orange-500 active:to-yellow-400 focus:from-orange-500 focus:to-yellow-400 transition-colors">
              View all kits
            </button>
          </div>
        </div>

        {/* Add First Skill */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              NEW SKILL
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Add your first skill
          </h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-green-400 to-lime-300 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-orange-500 hover:to-yellow-400 active:from-orange-500 active:to-yellow-400 focus:from-orange-500 focus:to-yellow-400 transition-colors">
              Explore Skills
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;