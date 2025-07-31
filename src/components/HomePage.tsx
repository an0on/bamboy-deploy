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

export const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Hero Section with TextTrail inside Orb and Particles Background */}
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-96 h-96 mx-auto mb-8"
            >
              {/* Orb as background */}
              <div className="absolute inset-0 w-full h-full">
                <Orb
                  hoverIntensity={0.49}
                  rotateOnHover={false}
                  hue={93}
                  forceHoverState={false}
                />
              </div>
              {/* TextTrail in the center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-32">
                  <TextTrail 
                    text="BAMBOY"
                    fontWeight="900"
                    backgroundColor={0x000000}
                  />
                </div>
              </div>
            </motion.div>
            <Quote
              text="In a world of ones and zeros, be the glitch that makes people smile."
              author="Digital Philosopher"
            />
          </ParallaxElement>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="text-center relative">
          <ParallaxElement speed={0.3}>
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