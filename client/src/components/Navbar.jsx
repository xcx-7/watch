// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-1000 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">WatchStore</div>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
      {/* Optionally, add a hamburger menu for mobile here */}
    </nav>
  );
};

export default Navbar;
