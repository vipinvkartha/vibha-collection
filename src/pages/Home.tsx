import React from 'react';
import { allProducts as products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">Vibha Collection</h1>
            <p className="text-xl mb-8 animate-fade-in-delay">Exquisite jewelry for every occasion</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      {['Hand Chains', 'Pendants', 'Rings', 'Combos', 'Bracelets'].map((category) => (
        <div key={category} className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(product => product.category === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home; 