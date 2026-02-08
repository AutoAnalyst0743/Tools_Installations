import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-orange-900 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/testing_professor.png"
              alt="Testing Professor"
              className="h-12 w-12 rounded-full shadow-lg border-2 border-orange-300"
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">Testing Professor</span>
              <span className="text-sm text-orange-300">Powered by Isha Training Solutions</span>
            </div>
          </div>

          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Empowering students with comprehensive software installation guides
            for a seamless development environment setup.
          </p>

          <div className="flex items-center justify-center space-x-2 text-orange-100">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-orange-300 animate-pulse" />
            <span>for students worldwide</span>
          </div>

          <div className="mt-8 pt-8 border-t border-orange-700/50 text-center text-orange-200">
            <p>&copy; 2025 Testing Professor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}