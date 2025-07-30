import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Circle, Brain, Rocket } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Quote } from './components/Quote';
import { Section } from './components/Section';
import { ParallaxElement } from './components/ParallaxElement';
import { AnimatedTitle } from './components/AnimatedTitle';

function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-700 via-blue-600 via-green-500 to-orange-500">
      <Header />

      {/* Hero Section with AnimatedTitle */}
      <Section className="from-purple-700 pt-20" id="home">
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

      {/* About Section */}
      <Section id="about">
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

      {/* Services Section */}
      <Section id="services">
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

      <Footer />
    </div>
  );
}

export default App;