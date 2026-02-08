import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/testing_professor.png"
              alt="Testing Professor"
              className="h-14 w-14 rounded-full shadow-lg border-2 border-orange-200"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Testing Professor</span>
              <span className="text-xs text-orange-600 font-medium">Powered by Isha Training Solutions</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#guides" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              Installation Guides
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#guides"
                className="block px-3 py-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"
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