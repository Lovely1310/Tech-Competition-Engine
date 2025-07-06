import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Globe from "./Globe";
import ProfilePopups from "./ProfilePopups";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-black text-white overflow-hidden h-screen flex items-center"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient z-0"></div>
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🧩 Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* 👈 Left Side */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {/* Line 1: Typewriter */}
              <div className="flex justify-center lg:justify-start">
                <span className="relative inline-flex font-semibold text-green-400 w-[120px] min-w-[120px] text-left">
                  <Typewriter
                    options={{
                      strings: ["Forge", "Build", "Empower"],
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 30,
                    }}
                  />
                  <span className="ml-1 w-4 h-8 bg-green-200 inline-block rounded-sm animate-pulse"></span>
                </span>
              </div>

              {/* Line 2: Static */}
              <div className="mt-2 text-white font-light text-center lg:text-left">
                the next generation developer
              </div>
            </h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base text-gray-300 leading-relaxed"
            >
              We help thousands of companies hire and upskill the next generation of developers, and millions of developers to become one.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-green-400 text-black font-semibold px-6 py-3 rounded-md text-base shadow-md"
              >
                Start a free trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-transparent border border-gray-400 text-white font-semibold px-6 py-3 rounded-md text-base"
              >
                For developers
              </motion.button>
            </div>
          </motion.div>

          {/* 👉 Right Side: Globe + Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[480px] hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[420px] max-h-[420px]">
              <Globe />
              <ProfilePopups />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🎨 Inject Tailwind-style Keyframe Utility */}
      <style>{`
        @layer utilities {
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradientBackground 16s ease infinite;
            background: linear-gradient(270deg, #6EE7B7, #3B82F6, #9333EA);
            background-size: 400% 400%;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;
