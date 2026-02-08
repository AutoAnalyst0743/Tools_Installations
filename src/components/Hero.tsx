import React from 'react';
import { BookOpen, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-400 to-yellow-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Master Software Installation
            <span className="block text-amber-100 mt-2">Step by Step</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Comprehensive installation guides for essential development tools. Perfect for students and beginners.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Guides</h3>
              <p className="text-sm text-white/80">Step-by-step instructions with clear explanations</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Friendly</h3>
              <p className="text-sm text-white/80">Designed for learning and education</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-sm text-white/80">Get ready in no time</p>
            </div>
          </div>

          <a
            href="#guides"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
  );
}