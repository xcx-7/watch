

// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 p-4 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">WatchStore</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#products" className="hover:text-gray-400">Products</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-2 py-4">
          <li><a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#products" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
