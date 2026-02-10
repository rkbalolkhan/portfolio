import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiCode, FiChevronDown } from 'react-icons/fi'
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
      {/* Animated Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Timeline connection nodes */}
        <svg className="hidden lg:block absolute w-full h-full opacity-20" viewBox="0 0 1200 1000" preserveAspectRatio="none">
          {/* Experience connection points */}
          <motion.circle cx="600" cy="150" r="4" fill="currentColor" className="text-secondary" animate={{ opacity: [0.3, 1, 0.3], r: [4, 6, 4] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <motion.circle cx="600" cy="550" r="4" fill="currentColor" className="text-secondary" animate={{ opacity: [0.5, 1, 0.5], r: [4, 6, 4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
          <motion.line x1="600" y1="160" x2="600" y2="540" stroke="currentColor" strokeWidth="1" className="text-secondary" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
        </svg>

        {/* Decorative circles */}
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-10 w-40 h-40 rounded-full border border-secondary/10"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-40 left-10 w-56 h-56 rounded-full border-2 border-secondary/5"
        />

        {/* Rotating experience indicator */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute bottom-20 right-20 w-48 h-48 text-secondary/10"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Experience role indicators */}
          <motion.circle cx="50" cy="10" r="1.5" fill="currentColor" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <motion.circle cx="90" cy="50" r="1.5" fill="currentColor" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
        </motion.svg>

        {/* Animated SVG lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M 0 200 Q 250 150, 500 200 T 1000 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary"
            strokeDasharray="1000"
            animate={{ strokeDashoffset: [1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0 800 Q 250 850, 500 800 T 1000 800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary"
            strokeDasharray="1000"
            animate={{ strokeDashoffset: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">My Journey</span>
          </motion.div>
          <h2 className="font-display text-6xl md:text-7xl font-bold text-primary mb-6">
            Experience
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            From rapid learning to team leadership—crafting beautiful web experiences and mentoring talented developers
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative space-y-0"
        >
          {/* Animated Timeline Connectors */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/15 to-secondary/5 rounded-full" />
            {/* Animated flowing line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent"
              animate={{ y: [0, -100] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0.4 }}
            />
          </div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon
            const isExpanded = expandedId === exp.id

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative mb-8 md:mb-20"
              >
                {/* Mobile Layout */}
                <div className="flex gap-6 md:hidden">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center relative z-20">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-xl relative flex-shrink-0"
                    >
                      <Icon size={26} className="text-white" />
                      {/* Pulsing ring */}
                      <motion.div
                        animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-secondary"
                      />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 mt-2">
                    <ExperienceCard
                      exp={exp}
                      isExpanded={isExpanded}
                      setExpandedId={setExpandedId}
                      containerVariants={containerVariants}
                      achievementVariants={achievementVariants}
                    />
                  </div>
                </div>

                {/* Desktop Layout - Alternating */}
                <div className="hidden md:block">
                  <div className="flex gap-0 items-start">
                    {/* Left Column */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : ''}`}>
                      {index % 2 === 0 && (
                        <ExperienceCard
                          exp={exp}
                          isExpanded={isExpanded}
                          setExpandedId={setExpandedId}
                          containerVariants={containerVariants}
                          achievementVariants={achievementVariants}
                          textAlign="right"
                        />
                      )}
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="flex justify-center w-auto px-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-xl relative flex-shrink-0 mt-2"
                      >
                        <Icon size={28} className="text-white" />
                        <motion.div
                          animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border-2 border-secondary"
                        />
                      </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className={`w-1/2 ${index % 2 === 1 ? 'pl-12' : ''}`}>
                      {index % 2 === 1 && (
                        <ExperienceCard
                          exp={exp}
                          isExpanded={isExpanded}
                          setExpandedId={setExpandedId}
                          containerVariants={containerVariants}
                          achievementVariants={achievementVariants}
                          textAlign="left"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-primary/50 text-sm font-medium">
              Ready to see what's next? <span className="text-secondary">→</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, isExpanded, setExpandedId, containerVariants, achievementVariants, textAlign = 'left' }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => setExpandedId(isExpanded ? -1 : exp.id)}
      className="cursor-pointer"
    >
      <div className={`bg-primary/[0.04] backdrop-blur-md rounded-3xl p-8 border border-secondary/20 hover:border-secondary/40 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${textAlign === 'right' ? 'text-right' : 'text-left'}`}>
        {/* Background vector accent */}
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"
        />

        <div className="relative z-10">
          {/* Header */}
          <div className={`flex items-start ${textAlign === 'right' ? 'flex-row-reverse' : ''} justify-between mb-5`}>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-secondary font-semibold text-base mb-3">
                {exp.company}
              </p>
              <div className={`flex flex-wrap gap-4 ${textAlign === 'right' ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-center gap-2 text-primary/70">
                  <span className="text-lg">📅</span>
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-primary/70">
                  <span className="text-lg">⏱️</span>
                  <span className="text-sm font-medium">{exp.duration_short}</span>
                </div>
              </div>
            </div>

            {/* Expand Button */}
            <motion.button
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`${textAlign === 'right' ? 'mr-4' : 'ml-4'} p-2 rounded-lg hover:bg-secondary/20 text-secondary transition-colors flex-shrink-0`}
            >
              <FiChevronDown size={24} />
            </motion.button>
          </div>

          {/* Quick Highlights */}
          <div className={`flex flex-wrap gap-2 mb-5 ${textAlign === 'right' ? 'justify-end' : 'justify-start'}`}>
            {exp.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-secondary/[0.08] border border-secondary/20 group-hover:bg-secondary/[0.15] group-hover:border-secondary/40 transition-all"
              >
                {highlight}
              </motion.span>
            ))}
          </div>

          {/* Expandable Achievements */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4 }}
                className="border-t border-secondary/20 pt-6"
              >
                <h4 className={`font-display text-base font-bold text-primary mb-4 flex items-center gap-2 ${textAlign === 'right' ? 'flex-row-reverse justify-end' : ''}`}>
                  <span className="w-2 h-2 rounded-full bg-secondary" />
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
                      className={`flex items-start gap-3 group/item ${textAlign === 'right' ? 'flex-row-reverse' : ''}`}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                        className="text-secondary font-bold mt-1 flex-shrink-0"
                      >
                        ✨
                      </motion.span>
                      <span className="text-primary/75 leading-relaxed text-sm group-hover/item:text-primary transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
