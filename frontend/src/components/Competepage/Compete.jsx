import React from 'react';
import { FaTrophy, FaPlus, FaCog } from 'react-icons/fa';
import DeveloperNavbar from '../DeveloperNavbar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Compete = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="w-full fixed top-0 z-50 shadow-md">
        <DeveloperNavbar />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100">Competitions</h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <motion.button
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <FaCog className="mr-2" />
              Manage Contests
            </motion.button>
            <motion.button
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-teal-900 text-white font-medium hover:bg-teal-800 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/compete/create')}
            >
              <FaPlus className="mr-2" />
              Create Contest
            </motion.button>
          </div>
        </motion.div>

        {/* Highlighted Contest */}
        <motion.div
          className="rounded-xl bg-gray-800 p-5 md:p-6 shadow-lg mb-8 transition-transform hover:scale-105 hover:shadow-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-2">UKG India Pioneers Challenge</h3>
              <p className="text-teal-400 font-medium mb-2">Join the UKG India Pioneers Challenge</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-300 mb-1">Registrations open until July 26, 2025</p>
              <p className="text-gray-400 text-sm">Event Date: Sunday, July 27, 2025</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <motion.button
              className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-900 to-indigo-900 text-white font-medium hover:from-teal-800 hover:to-indigo-800 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <FaTrophy className="mr-2" />
              Register Now
            </motion.button>
          </div>
        </motion.div>

        {/* Active Contests */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Active Contests</h3>
          <motion.div
            className="rounded-xl bg-gray-800 p-5 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <p className="text-gray-100 font-medium">ProjectEuler+</p>
              <p className="text-gray-400 text-sm">Open Indefinitely</p>
            </div>
            <motion.button
              className="flex items-center px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <FaTrophy className="mr-2" />
              View Details
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Upcoming Contests */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Upcoming Contests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Become an Agent of Change @ Salesforce",
              "UKG India Pioneers Challenge"
            ].map((title, i) => (
              <motion.div
                key={i}
                className="rounded-xl bg-gray-800 p-5 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-transform hover:scale-105 hover:shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 3}
              >
                <p className="text-gray-100 font-medium">{title}</p>
                <motion.button
                  className="flex items-center px-4 py-2 rounded-lg bg-teal-900 text-white font-medium hover:bg-teal-800 transition-colors shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTrophy className="mr-2" />
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Archived Contests */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Archived Contests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ServiceNow Tech Hiring Challenge", date: "Sep 20, 2023" },
              { title: "Hack to Secure Challenge", date: "Mar 26, 2023" },
              { title: "DTCC CODE-A-THON", date: "Aug 12, 2022" },
              { title: "Akamai Edge Hackathon", date: "Jul 30, 2022" }
            ].map((contest, i) => (
              <motion.div
                key={i}
                className="rounded-xl bg-gray-800 p-5 shadow-lg flex flex-col justify-between text-center transition-transform hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 5}
              >
                <div>
                  <p className="text-gray-100 font-medium">{contest.title}</p>
                  <p className="text-gray-400 text-sm mt-2">Ended on {contest.date}</p>
                </div>
                <motion.button
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-teal-900 text-white font-medium hover:bg-teal-800 transition-colors shadow-sm mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTrophy className="mr-2" />
                  View Challenges
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* College Content */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">College Content</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CS101 Lecture Notes", date: "June 15, 2023" },
              { title: "Math 202 Exam Papers", date: "May 10, 2023" },
              { title: "Physics Lab Reports", date: "April 5, 2023" },
              { title: "History 301 Slides", date: "March 20, 2023" }
            ].map((content, i) => (
              <motion.div
                key={i}
                className="rounded-xl bg-gray-800 p-5 shadow-lg flex flex-col justify-between text-center transition-transform hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 10}
              >
                <div>
                  <p className="text-gray-100 font-medium">{content.title}</p>
                  <p className="text-gray-400 text-sm mt-2">Updated {content.date}</p>
                </div>
                <motion.button
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors shadow-sm mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTrophy className="mr-2" />
                  View Content
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compete;
