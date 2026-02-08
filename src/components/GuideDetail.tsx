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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-6 font-medium text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guides
          </button>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${guide.bgColor}`}>
                <guide.icon className={`h-7 w-7 ${guide.iconColor}`} />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{guide.title}</h1>
                <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                <div className="flex items-center space-x-3 text-sm">
                  <span className={`px-2.5 py-1 rounded-md font-medium ${guide.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' : guide.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-gray-500">{guide.estimatedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OS Selector */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6 border border-gray-200">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Select Your Operating System</h2>
          <div className="flex space-x-3">
            {Object.keys(guide.steps).map((os) => (
              <button
                key={os}
                onClick={() => setSelectedOS(os)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedOS === os
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Prerequisites</h2>
            <ul className="space-y-2">
              {guide.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-amber-600 mt-1">•</span>
                  <span className="text-gray-700">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Installation Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Installation Steps</h2>

          {guide.steps[selectedOS]?.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-5">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <div className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {step.description.split(/(\*\*\[.*?\]\(.*?\)\*\*|"[^"]*")/).map((part, index) => {
                        const linkMatch = part.match(/\*\*\[(.*?)\]\((.*?)\)\*\*/);
                        if (linkMatch) {
                          return (
                            <strong key={index}>
                              <a
                                href={linkMatch[2]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-700 underline"
                              >
                                {linkMatch[1]}
                              </a>
                            </strong>
                          );
                        }

                        const quoteMatch = part.match(/"([^"]*)"/);
                        if (quoteMatch) {
                          return (
                            <strong
                              key={index}
                              className="bg-amber-100 px-1 rounded font-medium text-gray-900"
                            >
                              {quoteMatch[1]}
                            </strong>
                          );
                        }

                        return <span key={index}>{part}</span>;
                      })}
                    </div>

                    {step.code && (
                      <div className="bg-gray-900 rounded-lg p-3 relative">
                        <code className="text-green-400 font-mono text-sm whitespace-pre-wrap break-all">{step.code}</code>
                        <button
                          onClick={() => copyToClipboard(step.code, index)}
                          className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
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
                      <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-amber-900 text-sm">
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
          <div className="mt-10 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <div className="space-y-4">
              {guide.troubleshooting.map((item, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.issue}</h3>
                  <p className="text-gray-600 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}