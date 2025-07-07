import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../LandingPage/Navigation';

function DeveloperLogin() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* 🔝 Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Navigation />
      </div>

      {/* 🔐 Page Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col md:flex-row min-h-screen pt-16 bg-black text-white"
      >
        {/* 🌍 Left Earth Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full md:w-1/2 bg-cover bg-center relative h-64 md:h-auto"
          style={{ backgroundImage: "url('/Developerlogin_images/Earth.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 space-y-4 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold"
            >
              Welcome to Tech Competition Engine Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-lg text-gray-200"
            >
              Home to 20 Million developers worldwide
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="#"
              className="underline text-indigo-300 hover:text-indigo-100 text-sm md:text-base transition duration-300"
            >
              Know more
            </motion.a>
          </div>
        </motion.div>

        {/* 🧩 Right Form Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-10 py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white text-black rounded-lg shadow-lg w-full max-w-md px-6 py-8 space-y-6"
          >
            <div className="space-y-1 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Welcome back!</h3>
              <h4 className="text-base text-gray-600">Login to your account</h4>
              <p className="text-sm text-gray-800">It's nice to see you again. Ready to code?</p>
            </div>

            <form className="space-y-4">
              <motion.input
                type="text"
                placeholder="Your username or email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              />
              <motion.input
                type="password"
                placeholder="Your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              />
              <motion.button
                type="button"
                onClick={() => navigate('/DeveloperDashboard')}
                className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Log in
              </motion.button>
              <motion.div
                className="flex items-center justify-between text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                  Forgot password?
                </a>
              </motion.div>
            </form>

            {/* 🌐 Social Auth Buttons */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <button
                onClick={() => window.location.href = '/auth/google'}
                className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <img src="/Developerlogin_images/Google logo.png" alt="Google" className="w-5 h-5 mr-2" />
                <span className="hidden lg:inline">Continue with Google</span>
              </button>
              <div className="flex justify-between space-x-3">
                {[
                  { label: 'LinkedIn', icon: 'LinkedIn_logo.png', link: '/auth/linkedin' },
                  { label: 'GitHub', icon: 'GitHub_Logo.png', link: '/auth/github' },
                  { label: 'Facebook', icon: 'Facebook_logo.png', link: '/auth/facebook' },
                ].map(({ label, icon, link }, i) => (
                  <motion.button
                    key={label}
                    onClick={() => window.location.href = link}
                    className="w-1/3 p-2 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                  >
                    <img
                      src={`/Developerlogin_images/${icon}`}
                      alt={`${label} logo`}
                      className="w-5 h-5"
                    />
                    <span className="hidden lg:inline ml-2">{label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="text-center text-sm text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Don&apos;t have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">Sign up</a>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DeveloperLogin;
