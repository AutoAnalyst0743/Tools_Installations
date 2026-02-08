import React from 'react';
import { GuideData } from '../data/guides';
import { ArrowRight } from 'lucide-react';

interface InstallationGuidesProps {
  guides: GuideData[];
  onSelectGuide: (guide: GuideData) => void;
}

export function InstallationGuides({ guides, onSelectGuide }: InstallationGuidesProps) {
  return (
    <section id="guides" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Installation Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive collection of software installation tutorials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 cursor-pointer group"
              onClick={() => onSelectGuide(guide)}
            >
              <div className="p-6">
                <div className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center ${guide.bgColor}`}>
                  <guide.icon className={`h-7 w-7 ${guide.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2.5 py-1 rounded-md font-medium ${guide.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' : guide.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-gray-500">{guide.estimatedTime}</span>
                </div>

                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  View Guide
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}