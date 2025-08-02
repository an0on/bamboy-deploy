import React from 'react';
import { HomePage } from './components/HomePage';
import { DemoPage } from './components/DemoPage';

function App() {
  // Use DemoPage to test AnimatedHeroSection
  const isDemoMode = window.location.search.includes('demo');
  
  if (isDemoMode) {
    return <DemoPage />;
  }
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-700 via-blue-600 via-green-500 to-orange-500">
      <HomePage />
    </div>
  );
}

export default App;