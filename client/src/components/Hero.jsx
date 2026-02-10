import { motion } from 'framer-motion'

export default function Hero() {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="hero" className="relative pt-4 pb-2 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Hidden on Mobile */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="hidden md:block absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-200/10 to-secondary/5 rounded-full blur-3xl"
        />

        {/* Mobile Background Elements - Smaller */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="md:hidden absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="md:hidden absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-200/10 to-secondary/5 rounded-full blur-2xl"
        />

        {/* Floating SVG Elements - Hidden on Mobile */}
        <motion.svg
          variants={floatingVariants}
          animate="float"
          className="hidden md:block absolute top-40 left-20 w-24 h-24 text-secondary/10 z-20"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 10 Q80 30 80 50 Q80 80 50 80 Q20 80 20 50 Q20 30 50 10" fill="none" stroke="currentColor" strokeWidth="1" />
        </motion.svg>

        <motion.svg
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="hidden md:block absolute bottom-40 right-16 w-32 h-32 text-secondary/5 z-20"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>

        {/* Animated Dots */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
              className="absolute w-2 h-2 bg-secondary rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Mobile Animated Dots - Fewer and Positioned Better */}
        <div className="absolute inset-0 md:hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
              className="absolute w-1.5 h-1.5 bg-secondary rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${50 + i * 15}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image with Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start relative"
          >
            <div className="relative w-full max-w-lg md:max-w-l">
              {/* Image - Lowest Z-Index */}
              <img
                src="/images/rahematullah.jpg"
                alt="Profile"
                className="w-full h-auto relative z-0"
              />

              {/* Floating Vectors - In Front of Image */}
              <motion.svg
                variants={floatingVariants}
                animate="float"
                className="absolute -bottom-10 left-0 w-32 h-32 text-secondary/20 z-10"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50 15 L75 50 L50 85 L25 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </motion.svg>

              <motion.svg
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 -right-8 w-28 h-28 text-secondary/15 z-10"
                viewBox="0 0 100 100"
              >
                <polygon points="50,10 90,40 70,90 30,90 10,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </motion.svg>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center "
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm<br />Rahematullah
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-semibold text-secondary mb-3 md:mb-4">
              Full Stack Developer | Web & AI Enthusiast
            </motion.p>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-700 mb-4 md:mb-4 leading-relaxed max-w-lg">
              I craft beautiful, responsive web applications using modern technologies like React, Node.js & MongoDB. As a Lead Web Developer Intern at <span className="font-semibold text-secondary">Kite Media & Co.</span>, I'm passionate about delivering scalable solutions through cross-functional collaboration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-secondary to-blue-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-200 text-center relative  text-sm md:text-base w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <motion.span
                    initial={{ x: 0 }}
                    groupHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <div className="flex w-full gap-5">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 md:px-8 py-3 md:py-4 border-2 border-secondary/50 text-secondary rounded-lg font-semibold hover:bg-secondary/20 hover:border-secondary backdrop-blur-sm transition-all duration-200 text-center text-sm md:text-base"
                >
                  Get in Touch
                </motion.a>

                <motion.a
                  href="/documents/pdf/rahematullah_cv.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 md:px-8 py-3 md:py-4 bg-white/10 text-primary rounded-lg font-semibold hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 text-center text-sm md:text-base"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 md:justify-end justify-center">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/rkbalolkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-secondary hover:text-white text-gray-700 flex items-center justify-center transition-all duration-200 group"
              >
                <svg className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rkbalolkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-secondary hover:text-white text-gray-700 flex items-center justify-center transition-all duration-200 group"
              >
                <svg className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-14 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
