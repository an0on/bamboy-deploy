import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export const FloatingLogo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const hasAppeared = useRef(false);
  const wasManuallyHidden = useRef(false);
  
  const y = useSpring(0, {
    stiffness: 60,
    damping: 15,
    mass: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
      
      // Show logo when near bottom of page
      if (progress > 0.98 && wasManuallyHidden.current) {
        setVisible(true);
        wasManuallyHidden.current = false;
      } else if (!hasAppeared.current && progress > 0.98) {
        setVisible(true);
        hasAppeared.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const minY = window.innerHeight * 0.125;
    const maxY = window.innerHeight - 80;
    const targetY = minY + (maxY - minY) * scrollProgress;
    y.set(targetY);
  }, [scrollProgress, y]);

  const handleClick = () => {
    setVisible(false);
    wasManuallyHidden.current = true;
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            left: '1.5rem',
            zIndex: 1000,
            y,
            mixBlendMode: 'lighten',
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: [1, 1.02, 0.98, 1.01, 1],
            rotate: 0,
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -3, 3, 0] }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 10,
            bounce: 0.4,
          }}
          className="w-16 h-16 cursor-pointer"
          onClick={handleClick}
        >
          <motion.img
            src="https://bamboy.de/Bamboy-Logo.png"
            alt="BAM BOY"
            className="w-full h-full object-contain filter drop-shadow-md"
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 6,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingLogo;
