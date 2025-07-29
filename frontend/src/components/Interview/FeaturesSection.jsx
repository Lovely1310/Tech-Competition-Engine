import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cardGradient = [
  'linear-gradient(135deg,rgb(47, 144, 192) 0%, #414345 100%)',
  'linear-gradient(225deg, #232526 0%, #414345 100%)',
  'linear-gradient(315deg, #232526 0%, #414345 100%)',
  'linear-gradient(45deg, #232526 0%, #414345 100%)',
];

// Aurora SVG background component (double band, more bokeh, twinkling stars)
const AuroraBackground = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden hidden md:block">
    {/* Main horizontal band */}
    <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <motion.rect
        x="0"
        y="180"
        width="1440"
        height="320"
        rx="80"
        fill="url(#aurora1)"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(80px)' }}
      />
      <motion.rect
        x="0"
        y="100"
        width="1440"
        height="180"
        rx="60"
        fill="url(#aurora2)"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(100px)' }}
      />
      <defs>
        <linearGradient id="aurora1" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0aaff" stopOpacity="0.9" />
          <stop offset="0.3" stopColor="#cdb4fd" stopOpacity="0.8" />
          <stop offset="0.7" stopColor="#fbc2eb" stopOpacity="0.8" />
          <stop offset="1" stopColor="#e0aaff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="aurora2" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbc2eb" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#b983ff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#e0aaff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
    {/* Magical bokeh orbs (increased) */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 70 + Math.random() * 80,
          height: 70 + Math.random() * 80,
          left: `${5 + i * 7 + Math.random() * 5}%`,
          top: `${120 + Math.random() * 350}px`,
          background: `radial-gradient(circle, #fff6 0%, #e0aaff55 60%, transparent 100%)`,
          filter: 'blur(10px)',
          zIndex: 2,
        }}
        initial={{ opacity: 0.13, scale: 0.9 }}
        animate={{ opacity: [0.13, 0.28, 0.13], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 7 + i, repeat: Infinity, repeatType: 'mirror', delay: i * 0.5 }}
      />
    ))}
<<<<<<< HEAD
    {/* Twinkling stars */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={100 + i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 2.5 + Math.random() * 1.5,
          height: 2.5 + Math.random() * 1.5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: '#fff',
          filter: 'blur(0.5px)',
          zIndex: 1,
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5 + i * 0.1, repeat: Infinity, repeatType: 'mirror', delay: i * 0.2 }}
      />
    ))}
=======
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa
  </div>
);

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677f28ecc1812cfdbb9a736d_Maze.webp" alt="Hard skills, meet soft skills" className="w-24 h-24 object-contain rounded-full shadow-2xl bg-white/10 p-2 animate-pulse" />,
      title: "Hard skills, meet soft skills",
      description: "Add empirical evidence to your toughest hiring decisions. Problem-solve live in a collaborative IDE to get a feeling for what it would be like to work together"
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677f28ec61ef6347b36a41a1_Save%20time.webp" alt="Use with ease and speed" className="w-24 h-24 object-contain rounded-full shadow-2xl bg-white/10 p-2 animate-pulse" />,
      title: "Use with ease and speed",
      description: "Cut down on clunky setups and awkward downtime so that you and your candidate can jump right in and spend more time coding."
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677f28eda4b7fdc1775a957b_Repeat.webp" alt="Rinse and repeat" className="w-24 h-24 object-contain rounded-full shadow-2xl bg-white/10 p-2 animate-pulse" />, 
      title: "Rinse and repeat",
      description: "Build a standardized process with ready-made templates and scorecards to deliver the best candidate experience, every time."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      className="relative py-24 text-white overflow-hidden"
      initial={{ background: 'linear-gradient(120deg, #0a0d13 0%, #181c22 100%)' }}
      animate={{ background: [
        'linear-gradient(120deg, #0a0d13 0%, #181c22 100%)',
        'linear-gradient(120deg, #10131a 0%, #232526 100%)',
        'linear-gradient(120deg, #0a0d13 0%, #181c22 100%)'
      ] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      style={{ minHeight: '100vh' }}
    >
      <AuroraBackground />
      <div style={{ fontFamily: 'Merriweather, serif' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Interviews that mirror the<br />
              daily work of a developer
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow">
              It's important that your interview environment is measuring the next generation of skills
              while maintaining trust in the results. Review code, fix bugs, build a feature, and see the
              result, all within an environment built for technical hiring.
            </p>
          </div>
          <div ref={ref} className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 shadow-xl backdrop-blur-lg group rounded-3xl"
                style={{
                  background: 'rgba(30, 30, 50, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 12px 50px 0 rgba(147, 112, 219, 0.3)',
                  background: 'rgba(45, 45, 70, 0.7)',
                }}
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;