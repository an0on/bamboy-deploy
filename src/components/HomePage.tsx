import React, { useRef } from 'react';
import TextPressure from './TextPressure';
import SplashCursor from './SplashCursor';
import VariableProximity from './VariableProximity';
import Aurora from './Aurora';
import DecryptedText from './DecryptedText';
import Magnet from './Magnet';

export const HomePage = () => {
  const containerRef = useRef(null);

  return (
    <>
      {/* Fluid Splash Effect - Full Screen Overlay */}
      <SplashCursor />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative from-purple-700 pt-20" id="home">
        {/* Aurora Background Effect - scrolls with content */}
        <div className="absolute -top-20 left-0 w-full h-96 md:h-96 pointer-events-none z-[1]">
          <Aurora
            colorStops={["#0F7000", "#F3A639", "#7CFF00"]}
            blend={0.3}
            amplitude={0.5}
            speed={0.2}
          />
        </div>
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
        <div ref={containerRef} className="text-center max-w-4xl mx-auto px-4 relative z-10 pointer-events-none" style={{position: 'relative'}}>
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
            "In a world of{' '}
            <VariableProximity
              label="ones"
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            {' '}and{' '}
            <DecryptedText 
              text="zeros"
              speed={100}
              maxIterations={15}
              animateOn="hover"
              className="inline"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            , be the{' '}
            <DecryptedText 
              text="glitch"
              speed={80}
              maxIterations={20}
              animateOn="hover"
              className="inline"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            {' '}that makes people{' '}
            <VariableProximity
              label="smile"
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            ."
            <footer className="mt-4 text-sm text-white/70">
              —{' '}
              <Magnet padding={50} disabled={false} magnetStrength={50}>
                <span>Digital Philosopher</span>
              </Magnet>
            </footer>
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