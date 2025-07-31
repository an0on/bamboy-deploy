import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket } from 'lucide-react';
import { Quote } from './Quote';
import { Section } from './Section';
import { ParallaxElement } from './ParallaxElement';
import TextTrail from './TextTrail';
import Orb from './Orb';
import VariableProximity from './VariableProximity';
import Particles from './Particles';
import Galaxy from './Galaxy';
import BlobCursor from './BlobCursor';

export const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Hero Section with BAMBOY TextTrail and Particles Background */}
      <Section className="from-purple-700 pt-20 relative" id="home">
        {/* Particles Background Effect - over the gradient background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        
        <div className="text-center relative z-10">
          <ParallaxElement speed={-0.5} className="relative z-10">
            {/* Large BAMBOY TextTrail in center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <div className="w-full h-64 flex items-center justify-center">
                <div className="w-full max-w-4xl h-64">
                  <TextTrail 
                    text="BAMBOY"
                    fontWeight="900"
                    backgroundColor="transparent"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Quote below */}
            <Quote
              text="In a world of ones and zeros, be the glitch that makes people smile."
              author="Digital Philosopher"
            />
          </ParallaxElement>
        </div>
      </Section>

      {/* About Section with Galaxy Background, Orb, and BlobCursor */}
      <Section id="about" className="relative">
        {/* Galaxy Background Effect */}
        <div className="absolute inset-0 z-0">
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>
        
        {/* BlobCursor Effect */}
        <div className="absolute inset-0 z-10">
          <BlobCursor
            blobType="circle"
            fillColor="#5227FF"
            trailCount={3}
            sizes={[60, 125, 75]}
            innerSizes={[20, 35, 25]}
            innerColor="rgba(255,255,255,0.8)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.75)"
            shadowBlur={5}
            shadowOffsetX={10}
            shadowOffsetY={10}
            filterStdDeviation={30}
            useFilter={true}
            fastDuration={0.1}
            slowDuration={0.5}
            zIndex={100}
          />
        </div>
        
        <div className="text-center relative z-20">
          <ParallaxElement speed={0.3}>
            {/* Orb centered in this section */}
            <div className="mb-12">
              <div className="w-48 h-48 mx-auto">
                <Orb
                  hoverIntensity={0.49}
                  rotateOnHover={false}
                  hue={93}
                  forceHoverState={false}
                />
              </div>
            </div>
            <Quote
              text="They said AI would take over the world. Plot twist: It just wants to play with bubbles."
              author="Tech Optimist"
            />
          </ParallaxElement>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="text-center relative">
          <ParallaxElement speed={-0.4}>
            <Brain className="w-16 h-16 text-white/90 mx-auto mb-6" strokeWidth={1.5} />
            <div className="max-w-2xl mx-auto text-center p-8">
              <div className="text-2xl md:text-3xl font-light text-white/90 mb-4">
                <VariableProximity
                  label="The best code is the one that brings joy. The second best is the one that works."
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={containerRef}
                  radius={150}
                  falloff="linear"
                  className="text-white/90"
                />
              </div>
              <p className="text-lg text-white/60">— Happy Developer</p>
            </div>
          </ParallaxElement>
        </div>
      </Section>

      {/* Contact/Future Section */}
      <Section id="contact">
        <div className="text-center relative">
          <ParallaxElement speed={0.2}>
            <Rocket className="w-16 h-16 text-white/90 mx-auto mb-6" strokeWidth={1.5} />
            <Quote
              text="In the future, websites won't just be visited. They'll be experienced."
              author="Digital Explorer"
            />
          </ParallaxElement>
        </div>
      </Section>
    </div>
  );
};