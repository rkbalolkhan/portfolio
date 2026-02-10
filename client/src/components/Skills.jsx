import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiPython,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiGithub,
  SiExpress,
} from "react-icons/si"
import { DiJava } from "react-icons/di"
import { FiArrowRight, FiStar } from "react-icons/fi"
import { PiGearSixBold } from "react-icons/pi"

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillsData = {
    Frontend: {
      description: 'Building beautiful, responsive user interfaces',
      color: 'from-purple-500',
      skills: [
        { name: 'React', icon: SiReact, usage: 'Core framework for web apps' },
        { name: 'React Native', icon: SiReact, usage: 'Mobile app development' },
        { name: 'HTML', icon: SiHtml5, usage: 'Semantic markup' },
        { name: 'CSS', icon: SiCss3, usage: 'Styling & animations' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, usage: 'Utility-first CSS' },
        { name: 'Bootstrap 5', icon: SiBootstrap, usage: 'Responsive design' },
      ],
    },
    Backend: {
      description: 'Building robust, scalable server applications',
      color: 'from-green-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, usage: 'JavaScript runtime' },
        { name: 'Express.js', icon: SiExpress, usage: 'Web framework' },
        { name: 'REST APIs', icon: PiGearSixBold, usage: 'API design & integration' },
        { name: 'Git & GitHub', icon: SiGithub, usage: 'Version control' },
      ],
    },
    Databases: {
      description: 'Data storage and management expertise',
      color: 'from-orange-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, usage: 'NoSQL database' },
        { name: 'MySQL', icon: SiMysql, usage: 'Relational database' },
        { name: 'Oracle SQL', icon: SiOracle, usage: 'Enterprise database' },
      ],
    },
    Languages: {
      description: 'Programming languages I work with',
      color: 'from-blue-500',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, usage: 'Primary language' },
        { name: 'Python', icon: SiPython, usage: 'Data & AI' },
        { name: 'Java', icon: DiJava, usage: 'Backend systems' },
        { name: 'C', icon: SiC, usage: 'Systems programming' },
        { name: 'C++', icon: SiCplusplus, usage: 'Advanced systems' },
      ],
    },
    'ML/Data': {
      description: 'Machine learning and data science tools',
      color: 'from-red-500',
      skills: [
        { name: 'NumPy', icon: SiNumpy, usage: 'Numerical computing' },
        { name: 'Pandas', icon: SiPandas, usage: 'Data analysis' },
        { name: 'Scikit-Learn', icon: SiScikitlearn, usage: 'ML algorithms' },
        { name: 'TensorFlow', icon: SiTensorflow, usage: 'Deep learning' },
        { name: 'Matplotlib', icon: null, usage: 'Data visualization' },
        { name: 'Seaborn', icon: null, usage: 'Statistical visualization' },
        { name: 'spaCy', icon: null, usage: 'NLP processing' },
        { name: 'NLTK', icon: null, usage: 'Natural Language Processing' },
        { name: 'Feature Engineering', icon: null, usage: 'ML optimization' },
        { name: 'Clustering', icon: null, usage: 'Unsupervised learning' },
      ],
    },
    'CS Fundamentals': {
      description: 'Core computer science concepts and theory',
      color: 'from-indigo-500',
      skills: [
        { name: 'Data Structures', icon: null, usage: 'Arrays, Trees, Graphs' },
        { name: 'Algorithms', icon: null, usage: 'Problem solving' },
        { name: 'OOP', icon: null, usage: 'Object-Oriented Programming' },
        { name: 'Operating Systems', icon: null, usage: 'System design' },
        { name: 'Time & Space Complexity', icon: null, usage: 'Performance analysis' },
        { name: 'Computer Networks', icon: null, usage: 'Networking basics' },
        { name: 'Supervised Learning', icon: null, usage: 'Classification & Regression' },
        { name: 'Unsupervised Learning', icon: null, usage: 'Clustering & Reduction' },
      ],
    },
    Professional: {
      description: 'Soft skills and professional competencies',
      color: 'from-pink-500',
      skills: [
        { name: 'Project Coordination', icon: null, usage: 'Team leadership' },
        { name: 'Rapid Skill Acquisition', icon: null, usage: 'Fast learning' },
        { name: 'Cross-Functional Collaboration', icon: null, usage: 'Team alignment' },
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      y: -15,
      transition: { duration: 0.3 },
    },
  }

  const categories = Object.keys(skillsData)
  
  const colorMap = {
    'from-purple-500': '#a855f7',
    'from-green-500': '#22c55e',
    'from-orange-500': '#f97316',
    'from-blue-500': '#3b82f6',
    'from-red-500': '#ef4444',
    'from-indigo-500': '#6366f1',
    'from-pink-500': '#ec4899',
  }

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-secondary font-semibold">My Expertise</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            I've mastered a diverse tech stack across web development, backend
            systems, databases, and AI/ML
          </p>
        </motion.div>

        {/* Category Pills - Horizontal Scroll / Flex */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-4"
        >
          {categories.map((category, idx) => {
            const color = skillsData[category].color;
            const isActive = activeTab === category;
            const colorHex = colorMap[color];
            return (
              <motion.button
                key={category}
                layoutId={`category-${category}`}
                onClick={() => setActiveTab(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={categoryVariants}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 group overflow-hidden ${
                  isActive ? "text-white" : "text-primary"
                }`}
              >
                {/* Animated background */}
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute inset-0 opacity-80 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${colorHex}, ${colorHex}dd)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary/60 rounded-full transition-all duration-300" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  {isActive && (
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            {/* Category Title & Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-secondary/40 rounded-full" />
                <h3 className="font-display text-3xl font-bold text-primary">
                  {activeTab}
                </h3>
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-secondary/40 rounded-full" />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary max-w-2xl mx-auto"
              >
                {skillsData[activeTab].description}
              </motion.p>
            </motion.div>

            {/* Skills Grid - Enhanced Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeTab].skills.map((skillObj, i) => {
                const IconComponent = skillObj.icon;
                const isHoveredSkill = hoveredSkill === skillObj.name;

                return (
                  <motion.div
                    key={skillObj.name}
                    custom={i}
                    variants={skillVariants}
                    whileHover="hover"
                    onMouseEnter={() => setHoveredSkill(skillObj.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative cursor-pointer"
                  >
                    {/* Card */}
                    <motion.div className="relative h-full border-2 border-primary/30 rounded-2xl p-6 overflow-hidden backdrop-blur-sm bg-primary/5 transition-all duration-300 group-hover:border-secondary/70 group-hover:bg-primary/15 group-hover:shadow-lg">
                      <div className="relative z-10">
                        {/* Icon Container with Floating Effect */}
                        {IconComponent ? (
                          <motion.div
                            animate={
                              isHoveredSkill
                                ? { y: -5, scale: 1.01 }
                                : { y: 0, scale: 1 }
                            }
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-5xl mb-4 text-primary/80 group-hover:text-secondary transition-colors duration-300"
                          >
                            <IconComponent />
                          </motion.div>
                        ) : (
                          <motion.div
                            animate={
                              isHoveredSkill
                                ? { y: -5, scale: 1.01 }
                                : { y: 0, scale: 1 }
                            }
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/15 group-hover:bg-secondary/25 transition-colors duration-300"
                          >
                            <FiStar className="text-xl text-primary group-hover:text-secondary transition-colors duration-300" />
                          </motion.div>
                        )}

                        {/* Skill Name */}
                        <h4 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                          {skillObj.name}
                        </h4>

                        {/* Skill Usage Description */}
                        <motion.p
                          initial={{ opacity: 0.7 }}
                          animate={
                            isHoveredSkill ? { opacity: 1 } : { opacity: 0.7 }
                          }
                          transition={{ duration: 0.3 }}
                          className="text-sm text-primary/70 mb-4"
                        >
                          {skillObj.usage}
                        </motion.p>

                        {/* Hover Arrow */}
                        <motion.div
                          className="flex items-center gap-2 text-primary/50 group-hover:text-secondary"
                          animate={isHoveredSkill ? { x: 5 } : { x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm font-semibold">Explore</span>
                          <FiArrowRight size={16} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-primary/60 text-sm">
            Continuously expanding my skillset with emerging technologies and
            best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}
