import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence, useTransform, useScroll, useVelocity } from 'framer-motion';

export const FloatingLogo = () => {
  const [visible, setVisible] = useState(false);
  const hasAppeared = useRef(false);
  const wasManuallyHidden = useRef(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const y = useSpring(0, {
    stiffness: 60,
    damping: 15,
    mass: 0.3,
  });

  // Add subtle movement based on scroll velocity
  const velocityOffset = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [-20, 0, 20]
  );
  
  const additionalY = useSpring(velocityOffset, {
    stiffness: 300,
    damping: 50
  });

  // Add subtle rotation based on scroll velocity
  const rotation = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [-10, 0, 10]
  );
  
  const springRotation = useSpring(rotation, {
    stiffness: 200,
    damping: 40
  });

  useEffect(() => {
    const updateDimensions = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      // Position like in the second-to-last code
      const minY = window.innerHeight * 0.125;
      const maxY = window.innerHeight - 80;
      const targetY = minY + (maxY - minY) * scrollProgress;
      y.set(targetY);
      
      // Only show logo when scrolled to bottom (95%)
      if (scrollProgress > 0.95) {
        if (wasManuallyHidden.current) {
          setVisible(true);
          wasManuallyHidden.current = false;
        } else if (!hasAppeared.current) {
          setVisible(true);
          hasAppeared.current = true;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [y]);

  const handleClick = () => {
    setVisible(false);
    wasManuallyHidden.current = true;
  };

  // Calculate logo size as 30% of viewport width, capped at a reasonable maximum
  const logoSize = Math.min(viewportWidth * 0.3, 300);
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            left: '1.5rem',
            zIndex: 1000,
            y: y,
            rotate: springRotation,
            mixBlendMode: 'lighten',
            transformStyle: 'preserve-3d',
            perspective: 1000,
            width: `${logoSize}px`,
            height: `${logoSize}px`,
          }}
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: [1, 1.02, 0.98, 1.01, 1],
            rotate: 0,
            y: additionalY,
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -3, 3, 0] }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 10,
            bounce: 0.4,
          }}
          className="cursor-pointer"
          onClick={handleClick}
        >
          <motion.img
            src="https://bamboy.de/Bamboy-Logo.png"
            alt="BAM BOY"
            className="w-full h-full object-contain filter drop-shadow-md"
            animate={{
              scale: [1, 1.05, 0.97, 1.03, 1],
              rotate: [0, 2, -2, 1, 0],
              y: [0, -5, 3, -2, 0],
              x: [0, 3, -2, 4, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingLogo;
