import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BusinessLogin = () => {
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', { email, rememberMe });

    try {
      const response = await fetch('http://localhost:8000/api/company/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          remember_me: rememberMe,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Optionally store token or redirect
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-20"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl font-bold text-gray-900">
              TECH Competition Engine<span className="text-green-600">/Work</span>
            </h1>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Login to TECH Competition Engine for Work
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                    placeholder="Your work email"
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">Remember me</label>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
              >
                Next
              </motion.button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34-4.7-50.1H272v95h146.9c-6.3 33.6-25 61.9-53.3 81l86.1 67.1c50.2-46.3 81.8-114.7 81.8-193z" />
                    <path fill="#34A853" d="M272 544.3c71.6 0 131.8-23.7 175.7-64.2l-86.1-67.1c-23.9 16-54.6 25.5-89.6 25.5-68.9 0-127.3-46.5-148.2-109.1H35.3v68.7C78.9 486.6 168.7 544.3 272 544.3z" />
                    <path fill="#FBBC05" d="M123.8 329.4c-10.1-30.1-10.1-62.5 0-92.6V168h-88.5c-38.9 77.8-38.9 169.4 0 247.1l88.5-85.7z" />
                    <path fill="#EA4335" d="M272 107.7c37.9 0 71.9 13 98.6 38.5l73.9-73.9C397.8 27.3 337.6 0 272 0 169.3 0 79.5 59.6 35.3 146.2l88.5 68.7C144.7 154.2 203.1 107.7 272 107.7z" />
                  </svg>
                  Continue with Google
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <div className="w-5 h-5 mr-3 grid grid-cols-2 gap-0.5">
                    <div className="bg-red-500 w-full h-full" />
                    <div className="bg-green-500 w-full h-full" />
                    <div className="bg-blue-500 w-full h-full" />
                    <div className="bg-yellow-500 w-full h-full" />
                  </div>
                  Continue with Microsoft
                </motion.button>
              </div>

              {/* Sign Up Prompt */}
              <div className="text-center text-sm text-gray-600 mt-6">
                <p>Don't have an account?</p>
                <p>
                  Contact your administrator or{' '}
                  <button className="text-blue-600 hover:text-blue-500 font-medium underline">
                    sign up for a free trial
                  </button>
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side poster */}
      <div className="hidden lg:flex lg:flex-1">
        <img
          src="/Poster.png"
          alt="TECH Competition Engine"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BusinessLogin;

