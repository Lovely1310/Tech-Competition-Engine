import React from 'react';
import { motion } from 'framer-motion';

const SpeakWithExpert = () => {
  return (
    <>
      <section
        id="integrity"
        className="relative z-10 bg-white py-28 px-6 md:px-16 lg:px-32 font-[Urbanist,Inter,system-ui,sans-serif]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Give developers what they want
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-8 max-w-3xl mx-auto mb-12">
           Static job posts can’t capture the energy of your team or the depth of your tech. Show developers the real challenges, real impact, and the inspiring culture waiting for them.
          </p>
          <motion.a
            href="#Request-a-demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl hover:shadow-2xl transition duration-300"
          >
            Speak with an expert
          </motion.a>
        </motion.div>
        <div className="h-24" /> {/* bottom breathing space */}
      </section>

      {/* Full-width background gradient at bottom */}
      <div className="w-full">
        <img
          src="/gradient3.png"
          alt="Background decoration"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default SpeakWithExpert;
