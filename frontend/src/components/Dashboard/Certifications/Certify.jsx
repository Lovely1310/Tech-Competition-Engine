import React from 'react';
import DeveloperNavbar from '../../DeveloperNavbar'; // Navbar at the top of the page
import CertifyGrid from './CertifyGrid'; // Grid that shows all certification cards

const Certify = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <DeveloperNavbar />

      {/* Main Page Background and Padding */}
      <div className="min-h-screen bg-gradient-to-br from-[#1a002c] via-[#2d004d] to-[#0d001a] text-white px-4 sm:px-6 md:px-10 pt-28 pb-10">

        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#d8b4fe]">Certification Tests</h1>
          <p className="text-lg text-slate-400 mt-2">Get Certified</p>
        </div>

        {/* 3 Highlight Boxes with Purple Gradient */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-r from-[#6b21a8] to-[#3b0764] rounded-xl p-6 md:p-8 mb-12 shadow-md text-left">
          <div>
            <h3 className="text-lg font-semibold text-[#f0abfc] mb-1">🌟 Stand out from the crowd</h3>
            <p className="text-slate-200 text-sm">
              Get certified in technical skills by taking assessments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#f0abfc] mb-1">📊 Standardised Assessment</h3>
            <p className="text-slate-200 text-sm">
              Backed by real-world data and trusted by top companies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#f0abfc] mb-1">📈 Enrich your profile</h3>
            <p className="text-slate-200 text-sm">
              Add certificates to your resume or LinkedIn profile.
            </p>
          </div>
        </div>

        {/* Section Title Above the Cards */}
        <h2 className="text-center text-lg font-semibold mb-6 text-slate-300">
          Get Your Roles & Skills Certified
        </h2>

        {/* Grid of Certification Cards */}
        <CertifyGrid />

      </div>
    </>
  );
};

export default Certify;
