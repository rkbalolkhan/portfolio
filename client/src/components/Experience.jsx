import { motion, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiAward, FiCode, FiUsers } from 'react-icons/fi'
import { useState } from 'react'

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0)

  const experiences = [
    {
      id: 0,
      title: 'Lead Web Developer Intern',
      company: 'Kite Media & Co.',
      duration: 'Oct 2025 - Present',
      duration_short: '4+ months',
      icon: FiAward,
      color: 'from-purple-500',
      achievements: [
        'Overseeing task allocation, code reviews, team coordination, and on-time project delivery',
        'Mentoring team members and ensuring consistent code quality across projects',
        'Leading cross-functional collaboration between design, backend, and content teams',
        'Implementing best practices and architectural improvements',
      ],
      highlights: ['Leadership', 'Code Review', 'Team Growth'],
    },
    {
      id: 1,
      title: 'Web Developer Intern',
      company: 'Kite Media & Co.',
      duration: 'Sep 2025 - Oct 2025',
      duration_short: '2 months',
      icon: FiCode,
      color: 'from-blue-500',
      achievements: [
        'Contributed to 15+ fully responsive, cross-browser websites as part of design/backend/content teams',
        'Improved front-end performance through reusable UI components and accessibility practices',
        'Integrated APIs, managed form workflows, and connected Node.js/MongoDB backend features',
        'Rapid skill acquisition in modern web technologies and development workflows',
      ],
      highlights: ['15+ Projects', 'Full Stack', 'Performance'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, x: 20 },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-secondary font-semibold">Professional Journey</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            Growing my skills and making an impact through hands-on development and team leadership
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0 relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/10 md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon
            const isExpanded = expandedId === exp.id
            
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 mt-1">
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => setExpandedId(isExpanded ? -1 : exp.id)}
                      className="cursor-pointer"
                    >
                      <div className="bg-primary/15 backdrop-blur-2xl rounded-3xl p-8 border border-secondary/30 shadow-lg hover:shadow-xl hover:border-secondary/50 transition-all duration-300 group">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-display text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-secondary font-semibold text-lg mb-2">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <p className="text-primary/70 text-sm font-medium">
                                📅 {exp.duration}
                              </p>
                              <p className="text-primary/70 text-sm font-medium">
                                ⏱️ {exp.duration_short}
                              </p>
                            </div>
                          </div>

                          {/* Expand Button */}
                          <motion.button
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 p-2 rounded-lg hover:bg-secondary/20 text-secondary transition-colors"
                          >
                            <FiUsers size={24} />
                          </motion.button>
                        </div>

                        {/* Quick Highlights */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-primary bg-secondary/20 border border-secondary/40"
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>

                        {/* Expandable Achievements */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-secondary/30 pt-6 mt-6"
                            >
                              <h4 className="font-display text-lg font-bold text-primary mb-4">
                                Key Achievements
                              </h4>
                              <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-3"
                              >
                                {exp.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    variants={achievementVariants}
                                    className="flex items-start gap-3 group/item"
                                  >
                                    <span className="text-secondary font-bold mt-1 group-hover/item:scale-125 transition-transform">
                                      ✨
                                    </span>
                                    <span className="text-primary/80 leading-relaxed group-hover/item:text-primary transition-colors">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

       
      </div>
    </section>
  )
}
