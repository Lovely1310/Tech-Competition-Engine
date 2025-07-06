import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Prepare');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const links = [
    { name: 'Prepare', path: '/dashboard' },
    { name: 'Certify', path: '/skills-verification' },
    { name: 'Compete', path: '#' },
    { name: 'Apply', path: '/apply' }
  ];

  // Update active tab based on current location
  useEffect(() => {
    const currentLink = links.find(link => link.path === location.pathname);
    if (currentLink) {
      setActiveTab(currentLink.name);
    }
  }, [location.pathname]);

  const handleClick = (name, path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <nav className='bg-[#0f1117] text-white px-4 py-3 w-full shadow-md'>
      <div className='flex justify-between items-center'>

        {/* Left Section: Logo + Tabs */}
        <div className='flex items-center space-x-6'>
          {/* Logo (desktop) */}
          <div className='flex items-center space-x-3 hidden max-[766px]:hidden md:flex'>
            <img src='/logo.png' alt='Logo' className='h-5' />
            <span className='text-sm font-medium'>TECH COMPETITION ENGINE</span>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className='md:hidden max-[766px]:block focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Tabs (visible on desktop and lap) */}
          <div className='hidden md:flex space-x-6'>
            {links.map(link => (
              <div key={link.name} className='relative'>
                <button
                  onClick={() => handleClick(link.name, link.path)}
                  className={`text-sm hover:text-gray-300 focus:outline-none ${activeTab === link.name ? 'text-white' : 'text-gray-300'}`}
                >
                  {link.name}
                </button>
                {activeTab === link.name && (
                  <div className='absolute bottom-[-6px] left-0 w-full h-[2px] bg-green-500'></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center: Logo (only on mobile) */}
        <div className='absolute left-1/2 transform -translate-x-1/2 md:hidden'>
          <div className='flex items-center space-x-2'>
            <img src='/logo.png' alt='Logo' className='h-5' />
            <span className='text-xs font-medium'>TECH COMPETITION ENGINE</span>
          </div>
        </div>

        {/* Right section (search + auth) */}
        <div className='hidden md:flex items-center space-x-4 ml-auto'>

          {/* Search */}
          <div className="flex items-center bg-[#2d2f36] text-white px-3 py-1 rounded border border-gray-600">
            <FiSearch className="mr-2 text-white" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search"
              className="bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none w-32"
            />
          </div>

          {/* Hiring developers: hide below 1059px */}
          <button className='text-sm underline underline-offset-4 text-white hover:text-green-400 hidden [@media(min-width:1060px)]:inline'>
            Hiring developers?
          </button>

          {/* Login / Signup */}
          <button 
            onClick={() => navigate('/login')}
            className='bg-white text-black px-4 py-1 rounded'
          >
            Log In
          </button>
          <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded'>Sign Up</button>
        </div>
      </div>

      {/* Mobile Dropdown (tabs + auth) */}
      {menuOpen && (
        <div className='md:hidden mt-4 space-y-2'>
          {links.map(link => (
            <button
              key={link.name}
              onClick={() => handleClick(link.name, link.path)}
              className={`block w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-800 ${activeTab === link.name ? 'text-green-400' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}

          {/* Search bar in mobile dropdown */}
          <div className="flex items-center bg-[#2d2f36] text-white px-3 py-2 rounded border border-gray-600 mt-2">
            <FiSearch className="mr-2 text-white" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search"
              className="bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none w-full"
            />
          </div>

          {/* Log In / Sign Up in mobile dropdown */}
          <div className="pt-2 border-t border-gray-700 mt-2 space-y-2">
            <button 
              onClick={() => navigate('/login')}
              className='block w-full text-left px-2 py-1 text-white hover:bg-gray-800'
            >
              Log In
            </button>
            <button className='block w-full text-left px-2 py-1 text-white hover:bg-gray-800'>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
