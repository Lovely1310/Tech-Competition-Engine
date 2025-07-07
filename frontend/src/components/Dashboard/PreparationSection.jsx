const PreparationSection = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold text-black italic mb-6 text-center sm:text-left">Your Preparation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Interview Preparation Kit */}
          <div className="animated-card-bg rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
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
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-blue-400 hover:to-purple-400 active:from-blue-300 active:to-purple-300 focus:from-blue-300 focus:to-purple-300 transition-colors">
                View all kits
              </button>
            </div>
          </div>

          {/* Add First Skill */}
          <div className="animated-card-bg rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-primary-400 active:shadow-xl active:border-primary-400 focus:shadow-xl focus:border-primary-400 transition-shadow transition-colors">
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
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:from-blue-400 hover:to-purple-400 active:from-blue-300 active:to-purple-300 focus:from-blue-300 focus:to-purple-300 transition-colors">
                Explore Skills
              </button>
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

export default PreparationSection;