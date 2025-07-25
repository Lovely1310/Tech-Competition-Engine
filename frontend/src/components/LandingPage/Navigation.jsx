import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll < lastScrollY || currentScroll <= 0);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          className="navbar bg-black/30 backdrop-blur-md shadow-md px-4 sm:px-6 fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* LEFT: Logo with link */}
          <div className="navbar-start">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="TEN TECH ENGINE Logo"
                className="h-10 md:h-12"
                style={{ filter: "invert(1) brightness(2)" }} // <-- Makes logo white
              />
              <span
                className="ml-2 text-xl font-black text-white tracking-tight select-none drop-shadow-sm hidden lg:inline"
                style={{
                  letterSpacing: "0.01em",
                  fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
                }}
              >
                TEN Tech Engine
              </span>
            </Link>
          </div>

          {/* CENTER: Main Nav (Only for large screens) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {["Products", "Solutions", "Resources", "Pricing"].map(
                (item, i) => (
                  <li key={i}>
                    {item !== "Pricing" ? (
                      <div className="dropdown dropdown-hover">
                        <div tabIndex={0} className="text-white mr-2">
                          {item}
                        </div>

                        {item == "Products" && (
                          <div
                            tabIndex={0}
                            className="dropdown-content gap-6 bg-base-100 rounded-box z-1 shadow-sm flex flex-row justify-between"
                          >
                            {/* Products Column */}

                            <div className="flex flex-col p-3 gap-3 ">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Products
                              </h3>
                              {["Screen", "Interview", "Engage", "SkillUp"].map(
                                (item, idx) => (
                                  <Link
                                    to={`/${item.toLowerCase()}`}
                                    key={idx}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className="flex p-2 items-center gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                  >
                                    {hoveredItem === item && (
                                      <FaArrowRightLong />
                                    )}{" "}
                                    {item}
                                  </Link>
                                )
                              )}
                            </div>

                            {/* Features Column */}

                            <div className="flex flex-col p-3 gap-3 min-w-[230px]">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Features
                              </h3>
                              {[
                                "Certified Assessments",
                                "Plagiarism Detection",
                                "Real-World Question",
                                "Integration",
                              ].map((item, idx) => (
                                <Link
                                  to={`/${item
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")}`}
                                  key={idx}
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onMouseLeave={() => setHoveredItem("")}
                                  className="flex items-center p-2 gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                >
                                  {hoveredItem === item && <FaArrowRightLong />}{" "}
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {item == "Solutions" && (
                          <div
                            tabIndex={0}
                            className="dropdown-content gap-2 bg-base-100 rounded-box z-1 shadow-sm flex flex-row justify-between"
                          >
                            {/* Products Column */}

                            <div className="flex flex-col p-3 gap-3 min-w-[260px]">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                What We Do
                              </h3>
                              {[
                                "Set Up Your Skills Strategy",
                                "Showcase Your Tech Brand",
                                "Optimize Your Hirirng Process",
                                "Mobilize your internal talent",
                                "AI data services",
                              ].map((item, idx) => (
                                <Link
                                  to={`/${item
                                    .toLowerCase()
                                    .split(" ")
                                    .slice(-2)
                                    .join("-")}`}
                                  key={idx}
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  className="flex p-2 items-center gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                >
                                  {hoveredItem === item && <FaArrowRightLong />}{" "}
                                  {item}
                                </Link>
                              ))}
                            </div>

                            {/* Features Column */}

                            <div className="flex flex-col p-3 gap-3 min-w-[250px]">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Use Cases
                              </h3>
                              {["Remote Hiring", "University Hiring"].map(
                                (item, idx) => (
                                  <Link
                                    to={`/${item
                                      .toLowerCase()
                                      .split(" ")
                                      .join("-")}`}
                                    key={idx}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem("")}
                                    className="flex items-center p-2 gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                  >
                                    {hoveredItem === item && (
                                      <FaArrowRightLong />
                                    )}{" "}
                                    {item}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {item == "Resources" && (
                          <div
                            tabIndex={0}
                            className="dropdown-content gap-6 bg-base-100 rounded-box z-1 shadow-sm flex flex-row justify-between"
                          >
                            {/* Products Column */}

                            <div className="flex flex-col p-3 gap-3 min-w-[190px]">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Learn
                              </h3>
                              {[
                                "Blog",
                                "Roles Directory",
                                "Resource Library",
                                "Customer Stories",
                                "Devloper Skills Report",
                              ].map((item, idx) => (
                                <Link
                                  to={`/${item
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")}`}
                                  key={idx}
                                  onMouseEnter={() => setHoveredItem(item)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  className="flex p-2 items-center gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                >
                                  {hoveredItem === item && <FaArrowRightLong />}{" "}
                                  {item}
                                </Link>
                              ))}
                            </div>

                            {/* Features Column */}

                            <div className="flex flex-col p-3 gap-3 min-w-[230px]">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Product Help
                              </h3>
                              {["What is new", "Partners", "Support"].map(
                                (item, idx) => (
                                  <Link
                                    to={`/${item
                                      .toLowerCase()
                                      .split(" ")
                                      .join("-")}`}
                                    key={idx}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem("")}
                                    className="flex items-center p-2 gap-2 rounded-1xl text-gray-600 hover:bg-gray-200 px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer"
                                  >
                                    {hoveredItem === item && (
                                      <FaArrowRightLong />
                                    )}{" "}
                                    {item}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href="#"
                        className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                )
              )}

              {["Products", "Solutions", "Resources"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/pricing"
                  className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/DeveloperDashboard"
                  className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
                >
                  For Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Desktop buttons + Mobile hamburger */}
          <div className="navbar-end flex items-center gap-2">
            {/* Buttons (Large screens only) */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="btn btn-primary text-white hover:brightness-110">
                <span className="px-3 py-2 text-sm font-semibold">
                  Create a free account
                </span>
              </button>
              <Link to="/login">
                <button className="btn btn-outline border-white text-white hover:bg-white/10 hover:border-blue-300">
                  <span className="px-3 py-2 text-sm font-semibold">
                    Log In
                  </span>
                </button>
              </Link>
            </div>

            {/* Hamburger (Small screens) */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-4 shadow bg-white/90 backdrop-blur-md rounded-box w-60 text-center items-center gap-2"
              >
                {["Products", "Solutions", "Resources"].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-800 hover:text-blue-600 text-sm font-medium px-2 py-1">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-800 hover:text-blue-600 text-sm font-medium px-2 py-1"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    to="/DeveloperLogin"
                    className="text-gray-800 hover:text-blue-600 text-sm font-medium px-2 py-1"
                  >
                    For Developers
                  </Link>
                </li>
                <hr className="my-2 w-full" />
                <li>
                  <Link
                    to="/login"
                    className="text-black text-sm font-semibold px-2 py-1"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <button className="text-sm font-semibold bg-blue-600 text-white px-3 py-1 rounded">
                    Create a free account
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
