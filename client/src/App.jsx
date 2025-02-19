// // src/App.jsx
// import React from 'react';
// import WatchModel from './assets/apple_watch';

// function App() {
//   return (
//     <div className="App">
//       {/* 3D Watch Section */}
//       <section id="home" className="h-screen">
//         <WatchModel />
//       </section>
      
//       {/* About Section */}
//       <section id="about" className="bg-gray-900 text-white py-16 px-8">
//         <h2 className="text-3xl mb-4">About</h2>
//         <p>Your watch website description goes here.</p>
//       </section>
      
//       {/* Contact Section */}
//       <section id="contact" className="bg-gray-800 text-white py-16 px-8">
//         <h2 className="text-3xl mb-4">Contact</h2>
//         <p>Contact details and/or a form go here.</p>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-black text-white py-4 text-center">
//         &copy; {new Date().getFullYear()} Your Company Name
//       </footer>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import WatchModel from './components/WatchModel'; // Correct path

function App() {
  return (
    <div className="App">
      <section id="home" className="h-screen">
        <WatchModel />
      </section>

      <section id="about" className="bg-gray-900 text-white py-16 px-8">
        <h2 className="text-3xl mb-4">About</h2>
        <p>Your watch website description goes here.</p>
      </section>

      <section id="contact" className="bg-gray-800 text-white py-16 px-8">
        <h2 className="text-3xl mb-4">Contact</h2>
        <p>Contact details and/or a form go here.</p>
      </section>

      <footer className="bg-black text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Your Company Name
      </footer>
    </div>
  );
}

export default App;
