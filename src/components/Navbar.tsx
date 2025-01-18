import React, { useState } from 'react';
import { Heart, ShoppingCart, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hand Chains', path: '/category/hand-chains' },
    { name: 'Pendants', path: '/category/pendants' },
    { name: 'Rings', path: '/category/rings' },
    { name: 'Combos', path: '/category/combos' },
    { name: 'Bracelets', path: '/category/bracelets' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vibha Collection
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors ${
                  location.pathname === link.path ? 'font-semibold' : ''
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-100 transition-transform" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <SearchBar />
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;