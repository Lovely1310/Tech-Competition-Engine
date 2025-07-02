
import React from "react";
import logo from '../../../public/logo.svg'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("Tech Competition Engine");
  const [isAnimating, setIsAnimating] = useState(false);

  const fullText = "Tech Competition Engine";
  const shortText = "TCE";

  useEffect(() => {
    if (isAnimating) return;

    let timeoutId;
    
    if (isHovered && displayText === fullText) {
      // Start backspace animation
      setIsAnimating(true);
      let currentText = fullText;
      
      const backspaceInterval = setInterval(() => {
        currentText = currentText.slice(0, -1);
        setDisplayText(currentText);
        
        if (currentText === "") {
          clearInterval(backspaceInterval);
          
          // Type TCE
          let index = 0;
          const typeInterval = setInterval(() => {
            setDisplayText(shortText.slice(0, index + 1));
            index++;
            
            if (index === shortText.length) {
              clearInterval(typeInterval);
              setIsAnimating(false);
            }
          }, 100);
        }
      }, 50);
      
    } else if (!isHovered && displayText === shortText) {
      // Start backspace animation for TCE
      setIsAnimating(true);
      let currentText = shortText;
      
      const backspaceInterval = setInterval(() => {
        currentText = currentText.slice(0, -1);
        setDisplayText(currentText);
        
        if (currentText === "") {
          clearInterval(backspaceInterval);
          
          // Type full text
          let index = 0;
          const typeInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            
            if (index === fullText.length) {
              clearInterval(typeInterval);
              setIsAnimating(false);
            }
          }, 80);
        }
      }, 50);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHovered, displayText, isAnimating]);

  return (
    <div className="navbar bg-base-300 pl-6 pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>

            

          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                For Developers
              </a>
            </li>
          </ul>
        </div>
        <div>
      <img
  src={logo}
  alt="TechCompetitionEngine Logo"
  className="h-12 hidden md:block lg:block "
/>
        </div>
        

        <div className="font-bold ml-3 text-2xl hidden  lg:inline">
  TechCompetitionEngine
</div>

        <a 
          className=" font-bold ml-3 text-2xl hidden sm:inline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {displayText}
          {(isHovered || isAnimating) && <span className="animate-pulse">|</span>}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Resources
            </a>
            </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              For Developers
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-neutral">
          <a
            href="#"
            className="text-gray-300 hover:text-gray-300 px-3 py-2 text-sm font-medium"
          >
            Create a free account
          </a>
        </button>

        <button className="btn btn-neutral ml-5">
          <Link
            to="/login"
            className="text-gray-300 hover:text-gray-300 px-3 py-2 text-sm font-medium"
          >
            Log In
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
