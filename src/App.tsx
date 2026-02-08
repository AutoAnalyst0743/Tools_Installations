import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstallationGuides } from './components/InstallationGuides';
import { GuideDetail } from './components/GuideDetail';
import { Footer } from './components/Footer';
import { GuideData, guides } from './data/guides';

function App() {
  const [selectedGuide, setSelectedGuide] = useState<GuideData | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {selectedGuide ? (
        <GuideDetail
          guide={selectedGuide}
          onBack={() => setSelectedGuide(null)}
        />
      ) : (
        <>
          <Hero />
          <InstallationGuides
            guides={guides}
            onSelectGuide={setSelectedGuide}
          />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;