import React from 'react';
import { GuideData } from '../data/guides';

interface InstallationGuidesProps {
  guides: GuideData[];
  onSelectGuide: (guide: GuideData) => void;
}

export function InstallationGuides({ guides, onSelectGuide }: InstallationGuidesProps) {
  return (
    <section id="guides" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Installation Guides
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose from our comprehensive collection of software installation tutorials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 cursor-pointer group hover:-translate-y-2 hover:shadow-purple-500/20"
              onClick={() => onSelectGuide(guide)}
            >
              <div className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${guide.bgColor} shadow-lg relative z-10`}>
                  <guide.icon className={`h-8 w-8 ${guide.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed relative z-10">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${guide.difficulty === 'Beginner' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' : guide.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800' : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800'}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{guide.estimatedTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}