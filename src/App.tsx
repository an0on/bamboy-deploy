import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DemoPage } from './components/DemoPage';
import { Impressum } from './components/Impressum';

function App() {
  // Use DemoPage to test AnimatedHeroSection
  const isDemoMode = window.location.search.includes('demo');
  
  if (isDemoMode) {
    return <DemoPage />;
  }
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-700 via-blue-600 via-green-500 to-orange-500">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
  );
}

export default App;