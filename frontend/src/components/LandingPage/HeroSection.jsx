import React from "react";
import Globe from "./Globe";
import ProfilePopups from "./ProfilePopups";
import DynamicText from "./DynamicText";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px]">
          {/* Left Content - pushed further down */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mt-10">
            <h1 className="text-5xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3">
                <span className="relative inline-flex items-center font-semibold text-green-600 whitespace-nowrap">
                  <DynamicText />
                  <span className="ml-1 w-4 h-8 bg-green-100 inline-block rounded-sm"></span>
                </span>
                <span className="font-light text-white">the next</span>
              </span>

              <div className="mt-1 font-light text-white">
                generation developer
              </div>
            </h1>

            <p className="text-base text-gray-500 leading-relaxed">
              We help thousands of companies hire and upskill the next
              generation of developers, and millions of developers to become
              one.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-3">
              <button className="bg-slate-300 hover:bg-gray-800 text-black font-semibold px-6 py-3 rounded-md text-base transition duration-200">
                Start a free trial
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-black font-semibold px-6 py-3 rounded-md text-base transition duration-200">
                For developers
              </button>
            </div>
          </div>
          {/* Right Content - Globe pulled up */}
         
          {/* Right Content - Globe pulled up */}
          <div className="relative -mt-13 h-[500px] lg:h-[500px] items-center justify-center hidden md:flex ml-[-30px]">
            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
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
