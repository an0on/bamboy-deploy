import { motion, useSpring, MotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface BubbleProps {
  size: number;
  delay: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  initialX: number;
  initialY: number;
  index: number;
  updatePosition: (index: number, x: number, y: number) => void;
  positions: { x: number; y: number }[];
}

export const Bubble = ({ 
  size, 
  delay, 
  mouseX, 
  mouseY, 
  initialX, 
  initialY, 
  index,
  updatePosition,
  positions 
}: BubbleProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const x = useSpring(initialX, {
    stiffness: 40,
    damping: 30,
    mass: 1,
  });
  
  const y = useSpring(initialY, {
    stiffness: 40,
    damping: 30,
    mass: 1,
  });

  const scale = useSpring(1, {
    stiffness: 200,
    damping: 20,
  });

  const rotate = useSpring(0, {
    stiffness: 200,
    damping: 30,
  });

  const blur = useSpring(40, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const checkCollisions = () => {
      if (!elementRef.current) return;
      
      const currentX = x.get();
      const currentY = y.get();
      
      // Keep within viewport
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;
      
      let newX = currentX;
      let newY = currentY;
      
      if (currentX < 0) newX = 0;
      if (currentX > maxX) newX = maxX;
      if (currentY < 0) newY = 0;
      if (currentY > maxY) newY = maxY;
      
      // Collision with other bubbles
      positions.forEach((pos, i) => {
        if (i !== index) {
          const dx = currentX - pos.x;
          const dy = currentY - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = (size + 180) / 2;
          
          if (distance < minDistance) {
            const angle = Math.atan2(dy, dx);
            const pushForce = (minDistance - distance) * 0.15;
            newX = currentX + Math.cos(angle) * pushForce;
            newY = currentY + Math.sin(angle) * pushForce;
          }
        }
      });
      
      x.set(newX);
      y.set(newY);
      updatePosition(index, newX, newY);
    };

    const interval = setInterval(checkCollisions, 16);
    return () => clearInterval(interval);
  }, [positions]);

  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latest) => {
      const bubbleCenter = x.get() + size / 2;
      const diff = latest - bubbleCenter;
      const distance = Math.abs(diff);
      
      if (distance < 500) {
        const force = (500 - distance) * 0.4;
        x.set(x.get() - Math.sign(diff) * force);
        scale.set(1 + (500 - distance) * 0.0005);
        blur.set(40 + (500 - distance) * 0.1);
        rotate.set(diff * 0.05);
      } else {
        scale.set(1);
        blur.set(40);
        rotate.set(0);
      }
    });
    
    const unsubscribeY = mouseY.onChange((latest) => {
      const bubbleCenter = y.get() + size / 2;
      const diff = latest - bubbleCenter;
      const distance = Math.abs(diff);
      
      if (distance < 500) {
        const force = (500 - distance) * 0.4;
        y.set(y.get() - Math.sign(diff) * force);
      }
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={elementRef}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        x,
        y,
        scale,
        rotate,
        perspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay, 
        duration: 1.5,
        ease: "easeOut"
      }}
    >
      {/* Background blur effect */}
      <div 
        className="absolute inset-0 rounded-full bg-white/5"
        style={{
          filter: `blur(${blur.get()}px)`,
          transform: 'scale(1.5)',
        }}
      />
      
      {/* Main bubble with enhanced gradient and blur */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[100px]"
        style={{
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.05)',
        }}
      />
      
      {/* Dynamic highlight */}
      <motion.div 
        className="absolute rounded-full bg-white/5"
        style={{
          width: '70%',
          height: '70%',
          left: '15%',
          top: '15%',
          filter: 'blur(25px)',
          rotate: useTransform(rotate, value => value * -1),
        }}
      />
    </motion.div>
  );
};