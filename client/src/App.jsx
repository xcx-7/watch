


// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WatchModel from './components/WatchModel';
import ProductSection from './components/ProductSection';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [content, setContent] = useState({
    title: "Discover Timeless Elegance",
    description: "Experience luxury and precision with our exclusive collection of watches.",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  });

  return (
    <div className="App bg-black min-h-screen text-white">
      <Navbar />
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="absolute inset-0 bg-black opacity-90" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{content.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">{content.description}</p>
          <div className="relative w-full h-96 md:h-[500px]">
            <WatchModel />
          </div>
          <a href="#products" className="bg-red-500 hover:bg-red-600 px-6 py-3 mt-6 text-lg font-bold rounded-lg transition-all duration-300">
            Explore Collection
          </a>
        </div>
      </section>
      <ProductSection />
      <AdminDashboard onUpdate={setContent} />
      <footer className="bg-gray-900 text-center py-6 mt-16">
        <p>&copy; {new Date().getFullYear()} WatchStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
