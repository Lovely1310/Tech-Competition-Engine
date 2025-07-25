import React from 'react';
import { motion } from 'framer-motion';

const MagicalBackground = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          'radial-gradient(ellipse at 60% 40%, #1a1a2e 0%, #16213e 100%)',
          'radial-gradient(ellipse at 40% 60%,rgb(61, 31, 79) 0%,rgb(93, 15, 96) 100%)',
          'radial-gradient(ellipse at 50% 50%,rgb(42, 26, 46) 0%,rgb(76, 28, 77) 100%)',
          'radial-gradient(ellipse at 50% 50%,rgb(26, 46, 26) 0%,rgb(17, 69, 42) 100%)',
          'radial-gradient(ellipse at 50% 50%,rgb(53, 31, 24) 0%,rgb(67, 48, 12) 100%)'
        ],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    />
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/80"
        style={{
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden" style={{ minHeight: '100vh' }}>
      <MagicalBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-16">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Code, create, and innovate with live coding interviews
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium select-none bg-clip-text text-transparent"
          style={{ fontFamily: 'Merriweather, serif' }}
          initial={{
            background: 'linear-gradient(90deg, #e0e7ff, #fbc2eb, #f8bbd0, #b2eaff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
          animate={{
            background: [
              'linear-gradient(90deg,rgb(151, 169, 227),rgb(234, 152, 211),rgb(208, 112, 146),rgb(136, 210, 237))',
              'linear-gradient(90deg,rgb(243, 155, 186),rgb(118, 139, 206),rgb(120, 176, 197),rgb(223, 143, 200))',
              'linear-gradient(90deg, #b2eaff, #fbc2eb, #e0e7ff, #f8bbd0)',
              'linear-gradient(90deg, #e0e7ff, #fbc2eb, #f8bbd0, #b2eaff)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          Get an accurate sense for what it would be like to work together by pair programming with candidates.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <button
            className="px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105"
          >
            Try for Free
          </button>
          <button
            className="px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105"
          >
            Book a Demo
          </button>
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          <motion.img
            src="https://life.trivago.com/wp-content/uploads/2022/07/OXm6JAhw-1024x576.jpeg"
            alt="Collaborative coding session"
            className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
            style={{
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;