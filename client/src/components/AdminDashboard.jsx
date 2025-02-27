// src/components/AdminDashboard.jsx
import React, { useState } from 'react';

const AdminDashboard = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "Discover Timeless Elegance",
    description: "Experience luxury and precision with our exclusive collection of watches.",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [name]: value }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
        </div>
        <div>
          <label className="block">Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 rounded bg-gray-700"></textarea>
        </div>
        <div>
          <h3 className="text-xl">Social Media Links</h3>
          <label className="block">Facebook:</label>
          <input type="text" name="facebook" value={formData.socialLinks.facebook} onChange={handleSocialChange} className="w-full p-2 rounded bg-gray-700" />
          <label className="block">Twitter:</label>
          <input type="text" name="twitter" value={formData.socialLinks.twitter} onChange={handleSocialChange} className="w-full p-2 rounded bg-gray-700" />
          <label className="block">Instagram:</label>
          <input type="text" name="instagram" value={formData.socialLinks.instagram} onChange={handleSocialChange} className="w-full p-2 rounded bg-gray-700" />
        </div>
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminDashboard;