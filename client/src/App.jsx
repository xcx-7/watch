

// // src/App.jsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import WatchModel from './components/WatchModel';
// import ProductSection from './components/ProductSection';

// function App() {
//   return (
//     <div className="App bg-black min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Mobile View: Full-screen model with overlaid welcome message */}
//       <section id="home" className="relative h-screen md:hidden">
//         <WatchModel />
//         <div className="absolute top-0 left-0 right-0 p-4 text-center">
//           <h1 className="text-3xl font-bold text-white">Welcome to WatchStore</h1>
//         </div>
//       </section>

//       {/* Desktop View: Two-column layout */}
//       <section id="home" className="hidden md:flex h-screen">
//         {/* Left Column: 3D Model */}
//         <div className="w-1/2 h-full">
//           <WatchModel />
//         </div>
//         {/* Right Column: Welcome Message */}
//         <div className="w-1/2 h-full flex flex-col justify-center items-start p-12">
//           <h1 className="text-6xl font-bold text-white mb-4">Welcome to WatchStore</h1>
//           <p className="text-xl text-gray-300">
//             Discover exclusive watches and timeless designs.
//           </p>
//         </div>
//       </section>

//       {/* Other Sections */}
//       <section id="about" className="bg-gray-900 text-white py-16 px-8">
//         <h2 className="text-3xl mb-4">About</h2>
//         <p>Your watch website description goes here.</p>
//       </section>
// {/* 3. Product Section */}
// <ProductSection />
//       <section id="contact" className="bg-gray-800 text-white py-16 px-8">
//         <h2 className="text-3xl mb-4">Contact</h2>
//         <p>Contact details and/or a form go here.</p>
//       </section>

//       <footer className="bg-black text-white py-4 text-center">
//         &copy; {new Date().getFullYear()} Your Company Name
//       </footer>
//     </div>
//   );
// }

// export default App;













// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import WatchModel from './components/WatchModel';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Navbar />
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-90" />
        <h1 className="text-5xl md:text-6xl font-extrabold z-10 mb-4">Discover Timeless Elegance</h1>
        <p className="text-lg md:text-xl text-gray-300 z-10 mb-6 max-w-2xl">
          Experience luxury and precision with our exclusive collection of watches.
        </p>
        <div className="relative w-full h-96 md:h-[500px]">
          <WatchModel />
        </div>
        <a href="#products" className="z-10 bg-red-500 hover:bg-red-600 px-6 py-3 mt-6 text-lg font-bold rounded-lg transition-all duration-300">
          Explore Collection
        </a>
      </section>
      <ProductSection />
      <footer className="bg-gray-900 text-center py-6 mt-16">
        <p>&copy; {new Date().getFullYear()} WatchStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;