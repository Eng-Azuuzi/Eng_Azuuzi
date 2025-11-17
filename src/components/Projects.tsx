import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with product management, shopping cart, and secure payment integration. Built with React, Node.js, MongoDB, and Stripe API.',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'DhakhtarGo App',
      description:
        'DhakhtarGo is a medical appointment system with separate dashboards for Admin, Doctors, and Users. It allows managing doctors, patients, appointments, and reports, while giving each user type a clean interface to view schedules, update profiles, and track daily medical activity',
      image: project3,
      tags: ['VueJs', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
        {
      title: 'PrimeVision Media',
      description:
        'PrimeVision Media is modern, professional, videography or media production services website to attract clients looking for Wedding videography ,Event videography,Corporate or creative video production & Cinematic storytelling services ',
      image: project2,
      tags: ['React', 'Node.js','TypeScript', 'MongoDB','Tailwind'],
      github: 'https://github.com',
      demo: 'https://prime-vision-media.vercel.app',
    },
  ];

  return (
    <section
      id="projects"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className={darkMode ? 'text-gray-300 max-w-2xl mx-auto' : 'text-gray-800 max-w-2xl mx-auto'}>
            A selection of my recent work showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${
                    darkMode ? 'bg-gray-900/40' : 'bg-gradient-to-t from-card to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${
                    darkMode ? 'text-gray-100' : ''
                  }`}
                >
                  {project.title}
                </h3>
                <p className={darkMode ? 'text-gray-300 mb-4 line-clamp-3' : 'text-gray-800 mb-4 line-clamp-3'}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex-1 ${
                      darkMode ? 'border-gray-100 text-gray-100 hover:bg-gray-700/50' : 'border-primary text-primary hover:bg-primary/10'
                    }`}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 ${
                      darkMode
                        ? 'bg-primary text-gray-900 hover:bg-primary/90 text-primary-foreground'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
