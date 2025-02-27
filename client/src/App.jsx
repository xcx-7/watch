import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WatchModel from './components/WatchModel';
import ProductSection from './components/ProductSection';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [content, setContent] = useState({
    title: "Discover Timeless Elegance",
    description: "Experience luxury and precision with our exclusive collection of watches.",
    aboutTitle: "About Us",
    aboutDescription: "Welcome to WatchStore, where timeless elegance meets modern craftsmanship. Our passion for precision and design drives us to bring you a collection of watches that redefine sophistication. Whether you're looking for a classic timepiece or a bold statement watch, we curate only the finest selections to ensure quality and style. Experience luxury like never before.",
    contactTitle: "Contact Us",
    contactDescription: "Have a question? Want to collaborate? Reach out to us through our social channels.",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  });

  // Load saved content from local storage when the app starts
  useEffect(() => {
    const savedContent = localStorage.getItem("siteContent");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  // Function to update content and save to local storage
  const updateContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem("siteContent", JSON.stringify(newContent));
  };

  return (
    <Router>
      <div className="App bg-black min-h-screen text-white">
        <Routes>
          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<AdminDashboard onUpdate={updateContent} />} />
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Navbar />
              {/* Hero Section */}
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
              {/* About Section */}
              <section id="about" className="bg-black text-white py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">{content.aboutTitle}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">{content.aboutDescription}</p>
              </section>
              <ProductSection />
              {/* Contact Section */}
              <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">{content.contactTitle}</h2>
                <p className="text-gray-300 max-w-lg mx-auto mb-8">{content.contactDescription}</p>
                <div className="flex justify-center space-x-6">
                  <a href={content.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500">Facebook</a>
                  <a href={content.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500">Twitter</a>
                  <a href={content.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500">Instagram</a>
                </div>
              </section>
              <footer className="bg-gray-900 text-center py-6 mt-16">
                <p>&copy; {new Date().getFullYear()} WatchStore. All Rights Reserved.</p>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
