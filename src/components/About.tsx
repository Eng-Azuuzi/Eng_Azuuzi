import { motion } from 'framer-motion';
import { Code, Rocket, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Building optimized applications with lightning-fast load times and smooth interactions.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working effectively in teams using Git, Agile methodologies, and clear communication.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4`}>
            About{' '}
            <span
              className={`bg-gradient-primary bg-clip-text text-transparent ${
                darkMode ? '' : ''
              }`}
            >
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 mb-12 shadow-card transition-all duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <p
              className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-800'
              }`}
            >
              I'm a passionate Software Engineer with expertise in full-stack development using the MERN stack.
              With several years of experience building web applications, I specialize in creating robust,
              scalable solutions that solve real-world problems.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-800'
              }`}
            >
              My journey in web development started with a curiosity for how things work on the internet.
              Today, I focus on building exceptional digital experiences that combine beautiful design with
              powerful functionality. I'm constantly learning new technologies and best practices to stay at
              the forefront of web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    darkMode ? 'bg-primary/20' : 'bg-primary/10'
                  }`}
                >
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-800'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
