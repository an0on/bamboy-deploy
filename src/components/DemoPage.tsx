import React from 'react';
import AnimatedHeroSection from './AnimatedHeroSection';

export const DemoPage = () => {
  return (
    <div>
      <AnimatedHeroSection
        title="BAMBOY"
        subtitle="Experience the smooth radial gradient that follows your cursor"
        buttonText="Click Me"
        onButtonClick={() => console.log('Button clicked!')}
      />
      
      <AnimatedHeroSection
        title="Another Demo"
        subtitle="This shows multiple sections working independently"
        buttonText="Test Button"
        onButtonClick={() => alert('Second section button!')}
        className="bg-gradient-to-br from-purple-600 to-blue-600"
      />
    </div>
  );
};