import React, { useState } from 'react';
import { Heart, ShoppingCart, Menu, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-xl font-bold">Vibha Collection</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Hand Chains</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Pendants</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Rings</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Combos</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Bracelets</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Hand Chains</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Pendants</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Rings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Combos</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Bracelets</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;