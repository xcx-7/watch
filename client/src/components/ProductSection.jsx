

import React, { useState } from 'react';

// Example product data
const productData = [
  {
    id: 1,
    category: 'Decor',
    title: 'Soma Slim XS Wood Top',
    description: 'This amazing accent Pot is hand-crafted with a solid Stone and upper wood frame.',
    price: 699.0,
    imageUrl: 'https://via.placeholder.com/300x300?text=Product+1',
  },
  {
    id: 2,
    category: 'Office',
    title: 'Sculpture Coffee Table',
    description: 'A triumph of minimalist design that combines beauty and practicality.',
    price: 503.1,
    imageUrl: 'https://via.placeholder.com/300x300?text=Product+2',
  },
  {
    id: 3,
    category: 'Decor',
    title: 'Tuber Large',
    description: 'A simple, post-modern design with a variety of style options available.',
    price: 113.89,
    imageUrl: 'https://via.placeholder.com/300x300?text=Product+3',
  },
  {
    id: 4,
    category: 'Bath',
    title: 'Soma L All Stone',
    description: 'Experience modern art with this beautiful mid-century table.',
    price: 237.0,
    imageUrl: 'https://via.placeholder.com/300x300?text=Product+4',
  },
];

const categories = [
  'All Product',
  'Living room',
  'Office',
  'Decor',
  'Kitchen',
  'Bath',
];

function ProductSection() {
  const [activeCategory, setActiveCategory] = useState('All Product');

  const filteredProducts =
    activeCategory === 'All Product'
      ? productData
      : productData.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Products</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Have a good setup for your minimalist home
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-sm sm:text-base whitespace-nowrap transition-all duration-300 
                ${
                  activeCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="mb-4 w-full h-48 object-cover rounded-lg sm:h-56 md:h-64"
              />
              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-1 sm:text-xl">{product.title}</h3>
              {/* Product Description */}
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {product.description}
              </p>
              {/* Product Price */}
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
