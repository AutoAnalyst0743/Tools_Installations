import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/testing_professor.png"
              alt="Testing Professor"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold">Testing Professor</span>
              <span className="text-xs text-gray-400">Powered by Isha Training Solutions</span>
            </div>
          </div>

          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm">
            Empowering students with comprehensive software installation guides for a seamless development environment setup.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span>for students worldwide</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Testing Professor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}