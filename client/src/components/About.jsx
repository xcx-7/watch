import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div 
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to **WatchStore**, where timeless elegance meets modern craftsmanship. Our passion for precision and design drives us to bring you a collection of watches that redefine sophistication.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Whether you're looking for a classic timepiece or a bold statement watch, we curate only the finest selections to ensure quality and style.
        </p>
        <p className="text-lg text-gray-300">
          Join us in celebrating the art of watchmaking and experience luxury like never before.
        </p>
        <Link to="/" className="mt-8 inline-block bg-red-500 px-6 py-3 text-lg font-bold rounded-lg hover:bg-red-600 transition">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
