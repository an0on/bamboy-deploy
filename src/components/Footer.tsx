import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black/20 backdrop-blur-md border-t border-white/10 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            className="text-white/60 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {currentYear} BAMBOY. Alle Rechte vorbehalten.
          </motion.div>

          <motion.div
            className="flex space-x-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/impressum">
              <motion.span
                className="text-white/60 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>Impressum</span>
                <ExternalLink size={14} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Made with Love */}
        <motion.div
          className="text-center mt-6 pt-4 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-xs">
            Made with <span className="text-green-400">💚</span> and lots of 🥦 in Germany
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};