import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Bamboy-Logo.png" 
              alt="BAM BOY Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white">BAMBOY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Über uns
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            <a
              href="#home"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};