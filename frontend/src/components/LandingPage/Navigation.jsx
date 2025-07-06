import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../public/logo.svg';
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll < lastScrollY || currentScroll <= 0);
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          className="navbar bg-white/10 backdrop-blur-md shadow-md pl-6 pr-6 fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white/90 backdrop-blur-md rounded-box w-52"
              >
                {['Products', 'Solutions', 'Resources', 'Pricing', 'For Developers'].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-blue-600 hover:bg-white/40 px-3 py-2 text-sm font-medium rounded-md"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="TechCompetitionEngine Logo" className="h-12 hidden md:block" />
<span className="text-white font-mono italic text-base tracking-widest hidden lg:inline">
  TEN Tech Engine
</span>




            </div>
          </div>

          {/* Center Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {['Products', 'Solutions', 'Resources', 'Pricing', 'For Developers'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <button className="btn btn-primary text-white hover:brightness-110">
              <a className="px-3 py-2 text-sm font-semibold">Create a free account</a>
            </button>

            <button className="btn btn-outline ml-3 border-white text-white hover:bg-white/10 hover:border-blue-300">
              <Link to="/login" className="px-3 py-2 text-sm font-semibold">
                Log In
              </Link>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
