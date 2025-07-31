import React from 'react';
import { Quote } from './Quote';
import { Section } from './Section';

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="from-purple-700 pt-20" id="home">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            BAMBOY
          </h1>
          <Quote
            text="In a world of ones and zeros, be the glitch that makes people smile."
            author="Digital Philosopher"
          />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="text-center">
          <Quote
            text="They said AI would take over the world. Plot twist: It just wants to play with bubbles."
            author="Tech Optimist"
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="text-center">
          <Quote
            text="The best code is the one that brings joy. The second best is the one that works."
            author="Happy Developer"
          />
        </div>
      </Section>

      {/* Contact/Future Section */}
      <Section id="contact">
        <div className="text-center">
          <Quote
            text="In the future, websites won't just be visited. They'll be experienced."
            author="Digital Explorer"
          />
        </div>
      </Section>
    </>
  );
};