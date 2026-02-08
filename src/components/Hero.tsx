import React from 'react';
import { BookOpen, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Master Software Installation
            <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">Step by Step</span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Comprehensive installation guides for essential development tools.
            Perfect for students and beginners getting started with software development.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/30 shadow-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Detailed Guides</h3>
              <p className="text-orange-50">Step-by-step instructions with screenshots and explanations</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/30 shadow-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Student Friendly</h3>
              <p className="text-orange-50">Designed specifically for learning and educational purposes</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/30 shadow-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Quick Setup</h3>
              <p className="text-orange-50">Get your development environment ready in no time</p>
            </div>
          </div>

          <a
            href="#guides"
            className="inline-flex items-center bg-white text-orange-600 hover:bg-orange-50 font-bold px-10 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-900/30"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
  );
}