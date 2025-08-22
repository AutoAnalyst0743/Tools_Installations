import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Monitor, Apple, Smartphone } from 'lucide-react';
import { GuideData } from '../data/guides';

interface GuideDetailProps {
  guide: GuideData;
  onBack: () => void;
}

export function GuideDetail({ guide, onBack }: GuideDetailProps) {
  const [selectedOS, setSelectedOS] = useState('windows');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = async (text: string, stepIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getOSIcon = (os: string) => {
    switch (os) {
      case 'windows': return <Monitor className="h-4 w-4" />;
      case 'macos': return <Apple className="h-4 w-4" />;
      case 'linux': return <Smartphone className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 mb-6 font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Guides
          </button>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
            <div className="flex items-start space-x-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${guide.bgColor} shadow-lg`}>
                <guide.icon className={`h-8 w-8 ${guide.iconColor}`} />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{guide.title}</h1>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${guide.difficulty === 'Beginner' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' : guide.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800' : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800'}`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">⏱️ {guide.estimatedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OS Selector */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/50">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Your Operating System</h2>
          <div className="flex space-x-4">
            {Object.keys(guide.steps).map((os) => (
              <button
                key={os}
                onClick={() => setSelectedOS(os)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-sm ${
                  selectedOS === os
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {getOSIcon(os)}
                <span className="capitalize">{os}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        {guide.prerequisites && guide.prerequisites.length > 0 && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h2>
            <ul className="space-y-2">
              {guide.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Installation Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Installation Steps</h2>
          
          {guide.steps[selectedOS]?.map((step, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <div className="text-gray-600 mb-4 leading-relaxed prose prose-sm max-w-none">
                      {step.description.split(/(\*\*\[.*?\]\(.*?\)\*\*|"[^"]*")/).map((part, index) => {
                        // Handle bold links: **[text](url)**
                        const linkMatch = part.match(/\*\*\[(.*?)\]\((.*?)\)\*\*/);
                        if (linkMatch) {
                          return (
                            <strong key={index}>
                              <a 
                                href={linkMatch[2]} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                {linkMatch[1]}
                              </a>
                            </strong>
                          );
                        }
                        
                        // Handle quoted text: "text"
                        const quoteMatch = part.match(/"([^"]*)"/);
                        if (quoteMatch) {
                          return (
                            <strong 
                              key={index} 
                              className="bg-yellow-100 px-1 rounded font-semibold text-gray-900"
                            >
                              {quoteMatch[1]}
                            </strong>
                          );
                        }
                        
                        // Regular text
                        return <span key={index}>{part}</span>;
                      })}
                    </div>
                    
                    {step.code && (
                      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 relative shadow-lg">
                        <code className="text-green-400 font-mono text-sm">{step.code}</code>
                        <button
                          onClick={() => copyToClipboard(step.code, index)}
                          className="absolute top-2 right-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          {copiedStep === index ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    )}
                    
                    {step.note && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl shadow-sm">
                        <p className="text-blue-800 text-sm">
                          <strong>Note:</strong> {step.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        {guide.troubleshooting && guide.troubleshooting.length > 0 && (
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Common Issues & Solutions</h2>
            <div className="space-y-6">
              {guide.troubleshooting.map((item, index) => (
                <div key={index} className="border-l-4 border-gradient-to-b from-orange-500 to-pink-500 pl-6 bg-gradient-to-r from-orange-50/50 to-pink-50/50 py-3 rounded-r-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.issue}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}