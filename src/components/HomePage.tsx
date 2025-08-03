import React, { useRef, useState } from 'react';
import TextPressure from './TextPressure';
import SplashCursor from './SplashCursor';
import VariableProximity from './VariableProximity';
import DecryptedText from './DecryptedText';
import Magnet from './Magnet';
import Orb from './Orb';
import BallpitPopup from './BallpitPopup';

export const HomePage = () => {
  const containerRef = useRef(null);
  const [showBallpit, setShowBallpit] = useState(false);

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
            "
            <VariableProximity
              label="In a world of ones and zeros, be the "
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            <DecryptedText 
              text="glitch"
              speed={80}
              maxIterations={20}
              animateOn="hover"
              className="inline"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            <VariableProximity
              label=" that makes people smile."
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              style={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
            />
            "
            <footer className="mt-4 text-sm text-white/70">
              <Magnet padding={230} disabled={false} magnetStrength={4}>
                <span>— Digital Philosopher</span>
              </Magnet>
            </footer>
          </blockquote>
        </div>
      </section>


      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative" id="about">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* Orb Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
              <Orb
                hoverIntensity={0.15}
                rotateOnHover={true}
                hue={130}
                forceHoverState={false}
              />
              
              {/* Text Content Inside Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl px-4">
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light italic leading-relaxed">
                    "They said AI would take over<br />
                    the world. Plot twist:<br />
                    It just wants to{" "}
                    <Magnet padding={30} disabled={false} magnetStrength={3}>
                      <span 
                        className="cursor-pointer text-white hover:text-blue-300 transition-colors underline decoration-blue-300/50 hover:decoration-blue-300"
                        onClick={() => setShowBallpit(true)}
                      >
                        play
                      </span>
                    </Magnet>
                    <br />with bubbles."
                    <footer className="mt-3 text-xs sm:text-sm text-white/70">— Tech Optimist</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
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

      {/* Ballpit Popup */}
      {showBallpit && (
        <BallpitPopup onClose={() => setShowBallpit(false)} />
      )}
    </>
  );
};