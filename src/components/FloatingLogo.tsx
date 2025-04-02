import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const FloatingLogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasAppeared = useRef(false);
  const wasManuallyHidden = useRef(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const [maxScroll, setMaxScroll] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  
  useEffect(() => {
    const updateDimensions = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      setMaxScroll(documentHeight - windowHeight);
      setViewportHeight(windowHeight);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Rubber band spring config for extra bouncy effect
  const springConfig = { 
    stiffness: 80,
    damping: 15,
    mass: 1.5,
    restDelta: 0.001
  };

  // Calculate vertical position
  const y = useSpring(
    useTransform(
      scrollY,
      [0, maxScroll],
      [viewportHeight * 0.125, viewportHeight - 140] // 12.5% from top when scrolled up
    ),
    springConfig
  );

  // Add parallax effect based on scroll velocity
  const parallaxOffset = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [-30, 0, 30]
  );

  // Combine base position with parallax
  const finalY = useSpring(parallaxOffset, {
    stiffness: 400,
    damping: 25
  });

  // Rotation based on scroll velocity
  const rotate = useSpring(
    useTransform(
      scrollVelocity,
      [-2000, 0, 2000],
      [-15, 0, 15]
    ),
    { stiffness: 200, damping: 20 }
  );

  // Dynamic blend mode based on scroll position
  const blendMode = useTransform(
    scrollY,
    [0, maxScroll * 0.25, maxScroll * 0.5, maxScroll * 0.75, maxScroll],
    ['difference', 'luminosity', 'color-dodge', 'hard-light', 'difference']
  );

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = documentHeight - (scrollPosition + windowHeight) < 100;

      if (wasManuallyHidden.current && isNearBottom) {
        setIsVisible(true);
        wasManuallyHidden.current = false;
      } else if (!hasAppeared.current) {
        if (isNearBottom) {
          setIsVisible(true);
          hasAppeared.current = true;
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    wasManuallyHidden.current = true;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed left-8 z-50 w-32 h-32 cursor-pointer"
      onClick={handleClick}
      style={{
        y: y.get() + finalY.get(),
        rotate,
        mixBlendMode: blendMode,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="https://bamboy.de/Bamboy-Logo.png"
        alt="BAM BOY"
        className="w-full h-full object-contain filter contrast-125"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};