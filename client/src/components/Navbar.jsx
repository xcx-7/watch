
// src/components/Navbar.jsx
import React, { useState } from 'react';
import ProductSection from './ProductSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold">WatchStore</div>
      {/* Desktop Menu */}
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
            <a
              href="#products"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              products
            </a>
          </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // X icon when open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col space-y-2 p-4">
          <li>
            <a
              href="#home"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <li>
            <a
              href=""
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          </li>
      
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
