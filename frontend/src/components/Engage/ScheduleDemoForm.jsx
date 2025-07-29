import React from 'react';
import { motion } from 'framer-motion';


const ScheduleDemoForm = () => {
  return (
    <section
      className="w-full py-16 px-4 md:px-12 lg:px-24"
      style={{
        background: 'radial-gradient(circle at 20% 30%, #000000, #010014, #020229, #080813, #000000)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Experience the Tech Competition Engine in Action
        </h2>
        <p className="text-center mb-10 text-gray-300 max-w-2xl mx-auto">
          We’ve empowered companies to hire millions of developers. Explore how a tailored hiring process can elevate your success rate.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Business Email*</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">First Name*</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Last Name*</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Company Name*</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Job Title*</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Company Size*</label>
            <select
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Please select...</option>
              <option>1–100</option>
              <option>101–200</option>
              <option>201–500</option>
              <option>500+</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Country*</label>
            <select
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Please select...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Interested Products*</label>
            <select
              required
              className="w-full px-4 py-2 bg-[#0f0f1f] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Please select...</option>
              <option>Interview</option>
              <option>Skills Assessment</option>
              <option>Remote Hiring</option>
            </select>
          </div>
        </form>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300 shadow-md"
          >
            Schedule a Demo
          </button>
        
        </div>
      </motion.div>
    </section>
  );
};

export default ScheduleDemoForm;
