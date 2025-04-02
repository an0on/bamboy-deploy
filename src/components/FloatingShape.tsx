import { motion } from 'framer-motion';

interface FloatingShapeProps {
  className?: string;
  delay?: number;
}

export const FloatingShape = ({ className = '', delay = 0 }: FloatingShapeProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};