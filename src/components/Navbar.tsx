import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/testing_professor.png"
              alt="Testing Professor"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Testing Professor</span>
              <span className="text-xs text-gray-500">Powered by Isha Training Solutions</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#guides" className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium">
              Installation Guides
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#guides"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Installation Guides
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}