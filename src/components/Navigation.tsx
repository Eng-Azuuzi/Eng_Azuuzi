import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Conditional classes for dark mode
  const navBg = scrolled
    ? darkMode
      ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
      : 'bg-white/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const hoverColor = darkMode ? 'hover:text-primary' : 'hover:text-primary';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-xl font-bold bg-gradient-primary bg-clip-text text-transparent`}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className='flex space-x-8'>
            <div className='hidden md:flex space-x-8'>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${textColor} ${hoverColor} transition-colors duration-300 font-medium`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* Mobile + Theme Toggle */}
            <div className='flex space-x-2'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${textColor} ${hoverColor} md:hidden transition-colors`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-300 ${
                    darkMode
                      ? 'text-gray-100 hover:text-primary hover:bg-gray-800/50'
                      : 'text-gray-900 hover:text-primary hover:bg-gray-100/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
