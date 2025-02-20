// src/App.jsx
import React from 'react';
import WatchModel from './components/WatchModel';

function App() {
  return (
    <div className="App">
      {/* Home Section */}
      <section id="home" className="h-screen bg-black">
        <div className="container mx-auto h-full flex flex-col md:flex-row">
          {/* Welcome Text */}
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-4">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
              Welcome to WatchStore
            </h1>
            {/* You can add more tagline/description here if needed */}
          </div>
          {/* 3D Watch Model */}
          <div className="md:w-1/2 h-full">
            <WatchModel />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 text-white py-16 px-8">
        <h2 className="text-3xl mb-4">About</h2>
        <p>Your watch website description goes here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-16 px-8">
        <h2 className="text-3xl mb-4">Contact</h2>
        <p>Contact details and/or a form go here.</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Your Company Name
      </footer>
    </div>
  );
}

export default App;
