import React from 'react';

const Navigation = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Products</a></li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Solutions</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Resources</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">For Developers</a>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hidden sm:inline">TechCompetitionEmgine</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#" className="text-gray-300 hover:text-gray-900 px-3 py-2 text-sm font-medium">Products</a></li>
        <li>
          <a href="#" className="text-gray-300 hover:text-gray-900 px-3 py-2 text-sm font-medium">Solutions</a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-gray-900 px-3 py-2 text-sm font-medium">Resources</a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-gray-900 px-3 py-2 text-sm font-medium">For Developers</a>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"> Create a free account</a>
  </div>
</div>
  );
};

export default Navigation;