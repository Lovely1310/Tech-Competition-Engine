import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperNavbar from '../DeveloperNavbar'; // Assuming Navbar is in a separate file

const CreateContest = () => {
  const [contestName, setContestName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [orgType, setOrgType] = useState('');
  const [orgName, setOrgName] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <DeveloperNavbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto p-8 pt-20 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-semibold text-white mb-6"
        >
          Create New Contest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 mb-8 leading-relaxed"
        >
          Organize a professional coding contest on Ten Tech Engine. Collaborate and compete with colleagues or
          classmates from your organization or school. Select from our extensive library of over 1,500 coding challenges
          or craft your own custom problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-400 mb-8"
        >
          Please provide the following details to get started.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <label className="block text-red-400 font-medium mb-2">Contest Name *</label>
            <input
              type="text"
              value={contestName}
              onChange={(e) => setContestName(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter contest name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <label className="block text-red-400 font-medium mb-2">Start Time *</label>
            <div className="flex items-center">
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-4 text-gray-500">IST</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <label className="block text-red-400 font-medium mb-2">End Time *</label>
            <div className="flex items-center">
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-4 text-gray-500">IST</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">This contest has no end time (optional).</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <label className="block text-red-400 font-medium mb-2">Organization Type *</label>
            <select
              value={orgType}
              onChange={(e) => setOrgType(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-gray-500">Select Type</option>
              <option value="school">School</option>
              <option value="organization">Organization</option>
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <label className="block text-red-400 font-medium mb-2">Organization Name *</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter organization name"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Launch Contest
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreateContest;