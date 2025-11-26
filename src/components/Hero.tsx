import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Eng-Azuuzi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
    { icon: FileText, href: '#', label: 'Resume' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
    const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl animate-pulse ${darkMode && 'bg-primary/10'}`}/>
        <div className={`absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${darkMode && 'bg-primary/10'}`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-lg sm:text-xl font-semibold mb-4 mt-20 ${
                darkMode ? 'text-primary' : 'text-blue-600'
              }`}
            >
              Hi, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text ${
                darkMode ? 'text-transparent' : 'text-blue-600'
              }`}
            >
              Abdiaziiz Ahmed
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl sm:text-2xl lg:text-3xl mb-6 ${
                darkMode ? 'text-gray-300' : 'text-muted-foreground'
              }`}
            >
              Software Developer | MERN Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg mb-8 max-w-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-800'
              }`}
            >
              Passionate about building scalable web applications and turning ideas into elegant solutions.
              Specialized in full-stack development with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                onClick={scrollToProjects}
                variant="outline"
                className={`${
                  darkMode
                    ? 'border-gray-300 text-gray-100 hover:bg-gray-700/50'
                    : 'border-primary text-primary hover:bg-primary/10'
                }`}
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-primary/20 text-gray-100 hover:text-primary'
                      : 'bg-secondary hover:bg-primary/20 text-foreground hover:text-primary'
                  }`}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              />
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/50 shadow-glow/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full flex items-start justify-center p-2 border-2 ${
            darkMode ? 'border-gray-100' : 'border-primary'
          }`}
        >
          <motion.div
            className={`w-1 h-2 rounded-full ${
              darkMode ? 'bg-gray-100' : 'bg-primary'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
