import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const DeveloperNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle this to false to see the Sign Up / Log In buttons
  const isLoggedIn = false;

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNavbar(scrollY < lastScrollY || scrollY <= 0);
      setLastScrollY(scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          className="navbar bg-white/10 backdrop-blur-md shadow-md px-4 sm:px-6 fixed top-0 w-full z-50"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* LEFT SIDE */}
          <div className="navbar-start flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-10 md:h-12" />
              <span className="hidden lg:inline ml-2 text-white font-mono italic tracking-widest">
                TEN Tech Engine
              </span>
            </Link>
            <ul className="hidden lg:flex menu menu-horizontal px-1">
              {['Prepare', 'Certify', 'Complete', 'Apply'].map(item => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="px-3 py-2 text-sm font-medium text-white hover:text-blue-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-end flex items-center w-full lg:w-auto">
            {/* Desktop Group: flush right */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              {/* 1) Search Input */}
              <div className="relative" title="Search">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-sm bg-white/80 text-black rounded-full pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>

              {/* 2) Hiring Techs? */}
              <span
                className="whitespace-nowrap text-sm font-semibold text-white underline"
                title="Hiring Techs?"
              >
                Hiring Techs?
              </span>

              {isLoggedIn ? (
                <>
                  {/* 3) Apps */}
                  <button className="btn btn-ghost text-white p-1" title="Apps" aria-label="Apps">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h4M4 12h4M4 18h4M10 6h10M10 12h10M10 18h10" />
                    </svg>
                  </button>

                  {/* 4) Notifications */}
                  <button
                    className="btn btn-ghost text-white p-1"
                    title="Notifications"
                    aria-label="Notifications"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0
                           00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4
                           6 11v3c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3
                           0 11-6 0v-1h6z" />
                    </svg>
                  </button>

                  {/* 5) Messages */}
                  <button className="btn btn-ghost text-white p-1" title="Messages" aria-label="Messages">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M7 8h10M7 12h6m-6 4h8M21 12c0 4.4-4 8-9
                           8-1.4 0-2.7-.3-3.8-.8L3 20l1.7-4.3A8 8 0
                           013 12c0-4.4 4-8 9-8s9 3.6 9 8z" />
                    </svg>
                  </button>

                  {/* 6) Profile */}
                  <button className="btn btn-ghost text-white p-1" title="Profile" aria-label="Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5.121 17.804A9 9 0 1117.804 
                           5.121 7 7 0 005.121 17.804z" />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  {/* Pre-login: Sign Up & Log In */}
                  <Link to="/signup">
                    <button className="btn btn-primary text-white hover:brightness-110">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login/developerlogin">
                    <button className="btn btn-outline border-white text-white hover:bg-white/10 hover:border-blue-300">
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* MOBILE: Search icon */}
            <button className="lg:hidden btn btn-ghost text-white" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M16 10a6 6 
                     0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>

            {/* MOBILE: Hamburger + Animated Dropdown */}
            <div className="relative lg:hidden">
              <button
                className="btn btn-ghost text-white"
                onClick={() => setIsDropdownOpen(o => !o)}
                title="Menu"
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-60 p-4 bg-white/90 backdrop-blur-md rounded-box shadow-lg space-y-2 text-center"
                  >
                    {['Prepare', 'Certify', 'Complete', 'Apply'].map(item => (
                      <li key={item}>
                        <Link
                          to={`#${item.toLowerCase()}`}
                          className="block text-gray-800 hover:text-blue-600 text-sm font-medium"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <span className="block text-blue-700 underline text-sm font-semibold">
                        Hiring Techs?
                      </span>
                    </li>
                    <hr className="border-gray-300" />
                    {!isLoggedIn && (
                      <>
                        <li>
                          <Link to="/login/developerlogin" className="block text-gray-800 hover:text-blue-600 text-sm font-semibold">
                            Log In
                          </Link>
                        </li>
                        <li>
                          <Link to="/signup" className="block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded">
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default DeveloperNavbar;
