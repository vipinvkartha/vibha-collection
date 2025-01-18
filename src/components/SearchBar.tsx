import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data';

interface SearchResult {
  id: number;
  name: string;
  category: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 1) {
      const searchResults = products
        .filter(product =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase())
        )
        .map(({ id, name, category }) => ({ id, name, category }))
        .slice(0, 5);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    const category = result.category.toLowerCase().replace(' ', '-');
    navigate(`/category/${category}`);
    setIsOpen(false);
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Search className="h-6 w-6" />
        </button>
      ) : (
        <div className="absolute right-0 top-0 w-screen max-w-md bg-white rounded-lg shadow-lg p-4 animate-slide-in">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 outline-none text-gray-700"
              autoFocus
            />
            <button
              onClick={() => {
                setIsOpen(false);
                setSearchTerm('');
                setResults([]);
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {results.length > 0 && (
            <div className="mt-4 divide-y">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <p className="text-gray-900">{result.name}</p>
                    <p className="text-sm text-gray-500">{result.category}</p>
                  </div>
                  <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </button>
              ))}
            </div>
          )}

          {searchTerm.length > 1 && results.length === 0 && (
            <div className="mt-4 text-center text-gray-500 py-8">
              No products found matching "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 