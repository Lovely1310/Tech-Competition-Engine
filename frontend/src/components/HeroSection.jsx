import React from 'react';
import Globe from './Globe';
import ProfilePopups from './ProfilePopups';
import DynamicText from './DynamicText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <h1 className="text-6xl lg:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
              <DynamicText /> the next{' '}
              <span className="block font-light">generation developer</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
              We help thousands of companies hire and upskill the next 
              generation of developers, and millions of developers to become one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-lg text-base transition-all duration-200">
                Start a free trial
              </button>
              <button className="bg-transparent hover:bg-gray-50 text-gray-700 font-medium px-8 py-4 rounded-lg border border-gray-300 transition-all duration-200 text-base">
                For developers
              </button>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg max-h-lg">
              <Globe />
              <ProfilePopups />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;