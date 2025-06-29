import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Sagar More</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Civil Engineering Professional specializing in structural design and project management. 
              Committed to building sustainable infrastructure for the future.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:sagar.more@email.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sagarmore"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/sagarmore"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    whileHover={{ x: 4 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-gray-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <a
                  href="mailto:sagar.more@email.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  sagar.more@email.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Sagar More. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-2"
            >
              <Heart className="text-red-500" size={16} />
            </motion.span>
            for innovative engineering solutions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;