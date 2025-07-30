import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface QuoteProps {
  text: string;
  author: string;
}

export const Quote = ({ text, author }: QuoteProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className="max-w-2xl mx-auto text-center p-8"
    >
      <div className="overflow-hidden">
        <motion.div className="flex flex-wrap justify-center gap-2 mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl font-light text-white/90"
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                damping: 20
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.p
        className="text-lg text-white/60"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: words.length * 0.1 }}
      >
        — {author}
      </motion.p>
    </motion.div>
  );
};