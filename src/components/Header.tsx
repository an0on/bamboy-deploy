import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="/Bamboy-Logo.png" 
              alt="BAM BOY Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white">BAMBOY</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#home"
              className="text-white/90 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-white/90 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Über uns
            </motion.a>
            <motion.a
              href="#services"
              className="text-white/90 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <motion.a
              href="#home"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Über uns
            </motion.a>
            <motion.a
              href="#services"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};