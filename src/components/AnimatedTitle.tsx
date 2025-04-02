import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedTitle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const letters = "BAMBOY".split('');
  
  // Create a perspective container for 3D effects
  const perspective = 1000;
  
  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="flex justify-center items-center">
        {letters.map((letter, i) => {
          // Custom transforms for each letter
          const xOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (i - letters.length / 2) * 100]
          );
          
          const yOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [0, i % 2 === 0 ? -100 : 100]
          );
          
          const zOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (i % 3 - 1) * 200]
          );
          
          const rotate = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (i % 2 === 0 ? 360 : -360)]
          );

          // Spring configuration for smooth animation
          const springConfig = {
            stiffness: 100,
            damping: 30,
            mass: 1
          };

          // Apply springs to make movement more elastic
          const x = useSpring(xOffset, springConfig);
          const y = useSpring(yOffset, springConfig);
          const z = useSpring(zOffset, springConfig);
          const rotation = useSpring(rotate, springConfig);

          return (
            <motion.span
              key={i}
              className="text-6xl md:text-8xl font-bold text-white inline-block"
              style={{
                x,
                y,
                z,
                rotateX: rotation,
                rotateY: rotation,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transformOrigin: 'center center',
                filter: `blur(${useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, Math.abs((i % 3 - 1) * 2)]
                )}px)`,
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [1, 0.8, 0.8, 1]
                )
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};