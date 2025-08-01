import React from 'react';

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative from-purple-700 pt-20" id="home">
        <div className="text-center">
          <div className="h-48 md:h-64 mb-8 w-full flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white">BAMBOY</h1>
          </div>
          <blockquote className="text-xl md:text-2xl text-white/90 font-light italic max-w-4xl mx-auto px-4">
            "In a world of ones and zeros, be the glitch that makes people smile."
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