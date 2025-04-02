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
  
  // Basis Y position using springs for smooth transitions
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
      
      // Position logo to remain visible at bottom of screen
      const minY = viewportHeight * 0.6; // Start at 60% of screen height
      const maxY = viewportHeight * 0.75; // Never go below 75% of screen height
      const targetY = minY + (maxY - minY) * scrollProgress;
      y.set(targetY);
      
      // Show logo only when at bottom of page
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
  }, [viewportHeight, y]);

  const handleClick = () => {
    setVisible(false);
    wasManuallyHidden.current = true;
  };

  // Calculate logo size as 30% of viewport width, capped at a reasonable maximum
  const logoSize = Math.min(viewportWidth * 0.3, 240);
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            left: '5%',
            zIndex: 1000,
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            y: additionalY,
            rotate: springRotation,
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
          initial={{ opacity: 0, scale: 0.3, y: viewportHeight * 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: y,
          }}
          exit={{ opacity: 0, scale: 0, rotate: 15 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
            mass: 1,
          }}
          className="cursor-pointer"
          onClick={handleClick}
        >
          <motion.img
            src="https://bamboy.de/Bamboy-Logo.png"
            alt="BAM BOY"
            className="w-full h-full object-contain filter drop-shadow-xl"
            animate={{
              scale: [1, 1.05, 0.97, 1.03, 1],
              rotate: [0, 2, -2, 1, 0],
              y: [0, -8, 5, -3, 0],
              x: [0, 5, -3, 7, 0],
              filter: [
                'drop-shadow(0px 0px 8px rgba(0,0,0,0.3))',
                'drop-shadow(0px 0px 12px rgba(0,0,0,0.4))',
                'drop-shadow(0px 0px 6px rgba(0,0,0,0.2))',
                'drop-shadow(0px 0px 10px rgba(0,0,0,0.3))',
                'drop-shadow(0px 0px 8px rgba(0,0,0,0.3))',
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
            whileHover={{
              scale: 1.1,
              filter: 'drop-shadow(0px 0px 15px rgba(0,0,0,0.5))',
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingLogo;
