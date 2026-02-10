import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiTarget, FiZap, FiBriefcase, FiAward } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const journeySteps = [
    {
      title: 'Foundation',
      description: 'Started learning web development with passion for clean code',
      icon: FiCode,
      color: 'blue',
    },
    {
      title: 'Growth',
      description: 'Mastered React, Node.js, and MongoDB through real projects',
      icon: FiBriefcase,
      color: 'cyan',
    },
    {
      title: 'Leadership',
      description: 'Lead Web Developer Intern, collaborating across teams',
      icon: FiUsers,
      color: 'purple',
    },
    {
      title: 'Innovation',
      description: 'Focused on scalable solutions and continuous learning',
      icon: FiZap,
      color: 'pink',
    },
  ]

  const skills = [
    { label: '15+', text: 'Websites Built', emoji: '🌐' },
    { label: '20+', text: 'Technologies', emoji: '⚙️' },
    { label: '100%', text: 'Satisfaction Rate', emoji: '⭐' },
    { label: 'Full', text: 'Stack Expert', emoji: '🚀' },
  ]

  const competencies = [
    { icon: SiReact, title: 'React', color: 'from-cyan-500' },
    { icon: SiNodedotjs, title: 'Node.js', color: 'from-green-500' },
    { icon: SiMongodb, title: 'MongoDB', color: 'from-green-600' },
    { icon: FiCode, title: 'JavaScript', color: 'from-yellow-500' },
    { icon: FiTarget, title: 'DSA', color: 'from-orange-500' },
    { icon: FiAward, title: 'AI/ML', color: 'from-pink-500' },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/20 to-primary/5 backdrop-blur-xl border-y border-secondary/20 overflow-hidden">
      {/* Animated SVG Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated connecting lines */}
        <svg className="hidden md:block absolute w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.path
            d="M 100 100 L 1100 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.1, 0.3, 0.1], pathLength: [0, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>

        {/* Decorative rotating element */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute -top-20 right-20 w-48 h-48 text-secondary/8"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-secondary font-semibold text-lg inline-block mb-4">Get to know me</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-primary max-w-3xl mx-auto leading-relaxed">
            I'm a Full Stack Developer and Lead Web Developer Intern at Kite Media & Co., passionate about building scalable, beautiful web experiences with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Intro Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div className="bg-primary/15 backdrop-blur-2xl rounded-3xl p-8 border border-secondary/30 shadow-xl h-full">
              <h3 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary/40 rounded-full" />
                My Journey
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                I started with HTML and CSS, evolved through JavaScript and React, and now architect full-stack solutions that solve real problems.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: '💡', text: 'Problem solver at heart' },
                  { icon: '🚀', text: 'Always learning & growing' },
                  { icon: '👥', text: 'Team player' },
                  { icon: '⚡', text: 'Performance-focused' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-800 font-medium"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Middle Journey Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {journeySteps.map((step, i) => {
                const Icon = step.icon
                const colorMap = {
                  blue: 'from-blue-500',
                  cyan: 'from-cyan-500',
                  purple: 'from-purple-500',
                  pink: 'from-pink-500',
                }
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorMap[step.color]} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        {i < journeySteps.length - 1 && (
                          <div className="w-1 h-12 bg-gradient-to-b from-secondary/40 to-secondary/10 mt-2 rounded-full" />
                        )}
                      </div>

                      {/* Content */}
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-primary/10 backdrop-blur-xl rounded-2xl p-6 border border-secondary/30 flex-1 shadow-lg hover:shadow-xl hover:bg-primary/15 transition-all duration-300"
                      >
                        <h4 className="font-display text-xl font-bold text-primary mb-2">{step.title}</h4>
                        <p className="text-gray-800 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>


        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary/15 backdrop-blur-2xl border border-secondary/30 rounded-3xl p-12 shadow-xl">
            <h3 className="font-display text-3xl font-bold text-primary mb-4">Let's Create Something Great</h3>
            <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
              I'm always excited to collaborate on meaningful projects. Let's connect and build the future together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-secondary/60 to-blue-500/60 text-white font-bold rounded-2xl border border-secondary/70 backdrop-blur-xl hover:from-secondary/80 hover:to-blue-500/80 hover:border-secondary/90 transition-all duration-300 hover:shadow-2xl"
            >
              Get in Touch →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
