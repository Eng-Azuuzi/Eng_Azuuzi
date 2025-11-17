import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      type: 'work',
      title: 'Mern Stack Developer',
      organization: 'Freelancer',
      period: '2025 - Present',
      description:
        'Developed modern ,responsive websites and systems using MERN stack.',
      highlights: [
        'Modern Responsive Applications',
        'User Friendly system',
        'Effeciency and scalable ',
      ],
    },
        {
      type: 'education',
      title: 'Bachelor of Software Engineering',
      organization: 'Gollis University -Hargeisa',
      period: '2021 - 2024',
      description:
        'Graduated with a specialization in Software Engineering and Web Technologies. Actively involved in the Coding Club and participated in multiple hackathons, gaining hands-on experience in teamwork, problem-solving, and building real-world software solutions.',
      highlights: [
        'GPA: 3.65/4.0',
      ],
    },
    {
      type: 'education',
      title: 'Educational Institutes',
      organization: 'Salaama Secondary & Daallo Primary School',
      period: '2008 - 2021',
      highlights: [
        'Secondary General Exam : Grade B-',
        'Primary General Exam : Grade A',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
          <p className={darkMode ? 'text-gray-300 max-w-2xl mx-auto' : 'text-gray-800 max-w-2xl mx-auto'}>
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 z-10 ${
                  darkMode ? 'bg-gray-100 border-gray-900' : 'bg-primary border-white'
                }`}
              />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div
                  className={`rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase className="text-primary" size={20} />
                      ) : (
                        <GraduationCap className="text-primary" size={20} />
                      )}
                    </div>
                    <span className="text-sm text-primary font-semibold">{exp.period}</span>
                  </div>

                  <h3 className={darkMode ? 'text-gray-100 text-xl font-bold mb-1' : 'text-xl font-bold mb-1'}>
                    {exp.title}
                  </h3>
                  <h4
                    className={`font-medium mb-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    {exp.organization}
                  </h4>
                  <p className={darkMode ? 'text-gray-300 mb-4' : 'text-gray-800 mb-4'}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
