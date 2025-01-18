import React from 'react';
import { Heart, ShoppingCart, Menu, Search } from 'lucide-react';
import { products } from './data';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Vibha Collection</h1>
            <p className="text-xl mb-8">Exquisite jewelry for every occasion</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
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
            {products.filter(product => product.category === category).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Vibha Collection brings you timeless pieces that celebrate life's precious moments.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@vibhacollection.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;