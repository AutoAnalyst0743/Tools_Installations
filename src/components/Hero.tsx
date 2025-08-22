import React from 'react';
import { BookOpen, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Software Installation
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Step by Step</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive installation guides for essential development tools. 
            Perfect for students and beginners getting started with software development.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-xl">
                <BookOpen className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Guides</h3>
              <p className="text-gray-300">Step-by-step instructions with screenshots and explanations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-xl">
                <Users className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Friendly</h3>
              <p className="text-gray-300">Designed specifically for learning and educational purposes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-xl">
                <Zap className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-300">Get your development environment ready in no time</p>
            </div>
          </div>

          <a
            href="#guides"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
  );
}