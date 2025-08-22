import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Isha Training Solutions</span>
          </div>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Empowering students with comprehensive software installation guides 
            for a seamless development environment setup.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400 animate-pulse" />
            <span>for students worldwide</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-400">
            <p>&copy; 2025 Isha Training Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}