import React from 'react';
import { motion } from 'framer-motion';

const PreparationSection = () => {
  return (
    <>
      <section className="py-20 bg-[#1c2232] text-white">
        <h2
          style={{ fontFamily: '"Press Start 2P", cursive' }}
          className="text-xl sm:text-2xl tracking-widest text-center mb-14 text-cyan-300"
        >
          YOUR PREPARATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          {/* Interview Prep Kit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[#2c3449] rounded-xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col"
          >
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Preparation Kits
            </span>
            <h3 className="text-xl font-semibold mb-4 text-center text-white">
              Interview Preparation Kit
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Get interview ready for top companies with curated preparation kits crafted to sharpen your skills.
            </p>
            <div className="flex justify-center mt-auto pt-6">
              <button className="bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-lg text-sm font-medium transition">
                View Kits
              </button>
            </div>
          </motion.div>

          {/* Add Skill Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="bg-[#2c3449] rounded-xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col"
          >
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
              New Skill
            </span>
            <h3 className="text-xl font-semibold mb-4 text-center text-white">
              Add Your First Skill
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore a variety of skills, tracks, and tutorials tailored to help you grow and start building your tech foundation.
            </p>
            <div className="flex justify-center mt-auto pt-6">
              <button className="bg-purple-600 hover:bg-purple-500 px-5 py-2 rounded-lg text-sm font-medium transition">
                Explore Skills
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PreparationSection;
