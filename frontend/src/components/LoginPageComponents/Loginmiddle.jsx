import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // ← Import Framer Motion

const Loginmiddle = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🌈 Gradient Background */}
      <style>{`
        @layer utilities {
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradientBackground 20s ease infinite;
            background: linear-gradient(270deg, #1E3A8A, #4F46E5, #0F172A);
            background-size: 400% 400%;
          }
        }
      `}</style>

      <div className="w-full min-h-screen animate-gradient flex items-center justify-center px-4 py-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Unified Container with Motion Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-stretch justify-center bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden"
        >

          {/* Business Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-5 px-8 py-12"
          >
            <p className="bg-white text-black text-sm px-4 py-1 rounded-full">Organisation</p>
            <h2 className="text-3xl font-bold text-indigo-300">For Business</h2>
            <p className="text-gray-200 max-w-sm">
              Thousands of forward-thinking companies use our platform to recruit top talent and grow their tech teams.
            </p>
            <button
              className="bg-indigo-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-indigo-300 transition"
              onClick={() => navigate("/work/login")}
            >
              Log In
            </button>
            <div className="text-sm text-gray-300 flex flex-col gap-1">
              <p>Don't have an account?</p>
              <div className="flex gap-3 justify-center">
                <Link className="text-white underline" to="#">Contact sales</Link>
                <span>or</span>
                <Link className="text-white underline" to="#">Get free trial</Link>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20" />

          {/* Coders Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-5 px-8 py-12"
          >
            <h2 className="text-3xl font-bold text-indigo-300">For Coders</h2>
            <p className="text-gray-200 max-w-sm">
              Connect with 26+ million developers. Sharpen your skills and unlock career opportunities.
            </p>
            <button
              className="border border-indigo-300 text-indigo-200 font-semibold px-6 py-2 rounded-md hover:bg-indigo-300 hover:text-black transition"
              onClick={() => navigate("/login/developerlogin")}
            >
              Log In
            </button>
            <div className="text-sm text-gray-300 flex flex-col gap-1">
              <p>Don't have an account?</p>
              <Link className="text-white underline" to="#">Sign up</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Loginmiddle;
