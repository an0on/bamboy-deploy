import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Circle, Brain, Rocket } from 'lucide-react';
import { Quote } from './components/Quote';
import { Section } from './components/Section';
import { ParallaxElement } from './components/ParallaxElement';
import { FloatingLogo } from './components/FloatingLogo.tsx';
import { AnimatedTitle } from './components/AnimatedTitle';

function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-700 via-blue-600 via-green-500 to-orange-500">
      <FloatingLogo />

      <Section className="from-purple-700">
        <div className="text-center relative">
          <ParallaxElement speed={-0.5} className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedTitle />
            </motion.div>
            <Quote
              text="In a world of ones and zeros, be the glitch that makes people smile."
              author="Digital Philosopher"
            />
          </ParallaxElement>
        </div>
      </Section>

      <Section>
        <div className="text-center relative">
          <ParallaxElement speed={0.3}>
            <div className="mb-12">
              <Circle className="w-16 h-16 text-white/90 mx-auto" strokeWidth={1.5} />
            </div>
            <Quote
              text="They said AI would take over the world. Plot twist: It just wants to play with bubbles."
              author="Tech Optimist"
            />
          </ParallaxElement>
        </div>
      </Section>

      <Section>
        <div className="text-center relative">
          <ParallaxElement speed={-0.4}>
            <Brain className="w-16 h-16 text-white/90 mx-auto mb-6" strokeWidth={1.5} />
            <Quote
              text="The best code is the one that brings joy. The second best is the one that works."
              author="Happy Developer"
            />
          </ParallaxElement>
        </div>
      </Section>

      <Section>
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
}

export default App;