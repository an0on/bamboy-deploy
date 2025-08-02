import React from 'react';
import TextPressure from './TextPressure';
import SplashCursor from './SplashCursor';
import ShapeBlur from './ShapeBlur';

export const HomePage = () => {
  return (
    <>
      {/* Fluid Splash Effect - Full Screen Overlay */}
      <SplashCursor />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative from-purple-700 pt-20" id="home">
        {/* Extended mouse detection area covering full section */}
        <div className="absolute inset-0 w-full h-full">
          <div className="flex flex-col items-center h-full justify-center">
            <div style={{ 
              width: '90%', 
              maxWidth: '900px', 
              height: '20vh', 
              minHeight: '120px',
              maxHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <TextPressure
                text="BAMBOY"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={32}
                scale={true}
                extendedDetectionArea={true}
              />
            </div>
          </div>
        </div>
        
        {/* Content positioned above TextPressure */}
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10 pointer-events-none">
          <div style={{ 
            width: '90%', 
            margin: '0 auto 2rem auto', 
            height: '20vh',
            minHeight: '120px',
            maxHeight: '200px'
          }}>
            {/* Space for BAMBOY text */}
          </div>
          <blockquote className="text-xl md:text-2xl text-white/90 font-light italic pointer-events-auto">
            "In a w
            <span className="inline-block relative" style={{ width: '0.9em', height: '0.9em', marginTop: '-0.05em', verticalAlign: 'middle' }}>
              <ShapeBlur
                variation={1}
                pixelRatioProp={window.devicePixelRatio || 1}
                shapeSize={0.8}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </span>
            rld 
            <span className="inline-block relative" style={{ width: '0.9em', height: '0.9em', marginTop: '-0.05em', verticalAlign: 'middle' }}>
              <ShapeBlur
                variation={1}
                pixelRatioProp={window.devicePixelRatio || 1}
                shapeSize={0.8}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </span>
            f 
            <span className="inline-block relative" style={{ width: '0.9em', height: '0.9em', marginTop: '-0.05em', verticalAlign: 'middle' }}>
              <ShapeBlur
                variation={1}
                pixelRatioProp={window.devicePixelRatio || 1}
                shapeSize={0.8}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </span>
            nes and zer
            <span className="inline-block relative" style={{ width: '0.9em', height: '0.9em', marginTop: '-0.05em', verticalAlign: 'middle' }}>
              <ShapeBlur
                variation={1}
                pixelRatioProp={window.devicePixelRatio || 1}
                shapeSize={0.8}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </span>
            s, be the glitch that makes pe
            <span className="inline-block relative" style={{ width: '0.9em', height: '0.9em', marginTop: '-0.05em', verticalAlign: 'middle' }}>
              <ShapeBlur
                variation={1}
                pixelRatioProp={window.devicePixelRatio || 1}
                shapeSize={0.8}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
              />
            </span>
            ple smile."
            <footer className="mt-4 text-sm text-white/70">— Digital Philosopher</footer>
          </blockquote>
        </div>
      </section>


      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative" id="about">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl text-white/90 font-light italic max-w-4xl mx-auto px-4">
            "They said AI would take over the world. Plot twist: It just wants to play with bubbles."
            <footer className="mt-4 text-sm text-white/70">— Tech Optimist</footer>
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center relative" id="services">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl text-white/90 font-light italic max-w-4xl mx-auto px-4">
            "The best code is the one that brings joy. The second best is the one that works."
            <footer className="mt-4 text-sm text-white/70">— Happy Developer</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact/Future Section */}
      <section className="min-h-screen flex items-center justify-center relative" id="contact">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl text-white/90 font-light italic max-w-4xl mx-auto px-4">
            "In the future, websites won't just be visited. They'll be experienced."
            <footer className="mt-4 text-sm text-white/70">— Digital Explorer</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
};