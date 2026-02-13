import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { SiReact, SiMongodb, SiPython, SiHtml5 } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "AbodeAway",
      description:
        "Full-stack vacation rental platform with 100+ verified properties. Integrated Mapbox APIs for interactive property maps, reducing bounce rate by 25%.",
      tech: ["Bootstrap 5", "EJS", "Node.js", "Express", "MongoDB"],
      icon: SiReact,
      gradient: "from-blue-500 to-cyan-500",
      stats: [
        { label: "100+", desc: "Properties" },
        { label: "25%", desc: "Bounce ↓" },
      ],
      github: "https://github.com/rkbalolkhan/abobe-away",
      live: "",
    },
    {
      title: "RoadCast-AI",
      description:
        "AI-powered podcast recommendation chatbot using Gemini API. Improved intent classification by 35% and reduced response time from 30-40s to under 5s.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "REST APIs"],
      icon: FiArrowRight,
      gradient: "from-purple-500 to-pink-500",
      stats: [
        { label: "35%", desc: "Better" },
        { label: "5s", desc: "Response" },
      ],
      github: "https://github.com/rkbalolkhan/RoadCast-AI",
      live: "",
    },
    {
      title: "CoursePulse",
      description:
        "NLP-based MOOC feedback mining system. Processed 10,000+ feedback records with sentiment analysis and topic modeling extracting 5-8 key themes.",
      tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "NLP", "Matplotlib"],
      icon: SiPython,
      gradient: "from-green-500 to-emerald-500",
      stats: [
        { label: "10K+", desc: "Records" },
        { label: "8", desc: "Themes" },
      ],
      github: "https://github.com/rkbalolkhan/feedback-mining-from-moocs",
      live: "",
    },
    {
      title: "Credit Card Fraud Detection (Unsupervised ML)",
      description:
        "Machine learning project focused on detecting fraudulent credit card transactions using unsupervised learning techniques. Implemented clustering and anomaly detection to identify suspicious patterns without labeled data.",
      tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
      icon: SiPython,
      gradient: "from-purple-500 to-indigo-500",
      stats: [
        { label: "Unsupervised", desc: "Learning Model" },
        { label: "Anomaly", desc: "Detection Focus" },
      ],
      github:
        "https://github.com/rkbalolkhan/ml2-unsupervised-creditcard-fraud",
      live: "",
    },
    {
      title: "SwapNest",
      description:
        "Full-stack web platform designed to enable users to exchange and manage listings seamlessly. Built with a structured backend architecture and responsive frontend to ensure smooth user interaction and efficient data handling.",
      tech: ["EJS", "Tailwind", "Node.js", "Express", "MongoDB"],
      icon: SiReact,
      gradient: "from-pink-500 to-rose-500",
      stats: [
        { label: "Full-Stack", desc: "Architecture" },
        { label: "Responsive", desc: "UI Design" },
      ],
      github: "https://github.com/rkbalolkhan/swapnest.git",
      live: "",
    },
    {
      title: "Delish",
      description:
        "Responsive restaurant website built with modern frontend technologies, featuring clean UI design, structured layout, and mobile-friendly navigation. Focused on visual presentation and user experience optimization.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
      icon: SiHtml5,
      gradient: "from-orange-500 to-red-500",
      stats: [
        { label: "Responsive", desc: "Design" },
        { label: "UI/UX", desc: "Focused" },
      ],
      github: "https://github.com/rkbalolkhan/delish.git",
      live: "",
    },
  ];

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
      {/* Animated SVG Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated project connection lines */}
        <svg className="hidden lg:block absolute w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-secondary" />
              <stop offset="100%" stopColor="currentColor" className="text-secondary" opacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 200 300 L 600 200 L 1000 400"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            animate={{ opacity: [0.2, 0.5, 0.2], pathLength: [0, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M 100 500 Q 400 400, 700 500 T 1100 500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>

        {/* Rotating tech stack indicators */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute top-40 right-20 w-40 h-40 text-secondary/8"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Project markers */}
          <circle cx="50" cy="15" r="1.5" fill="currentColor" />
          <circle cx="75" cy="50" r="1.5" fill="currentColor" />
          <circle cx="50" cy="85" r="1.5" fill="currentColor" />
        </motion.svg>

        {/* Background orbs */}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-secondary font-semibold text-lg">My Work</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development, AI integration, and data science
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -15, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)' }}
                className="group relative"
              >
                {/* Card */}
                  <div className="relative h-full bg-white/10 rounded-2xl shadow-lg overflow-hidden border border-white/30 backdrop-blur-xl">
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-start p-6">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-gray-100">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className={`font-display text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {stat.label}
                          </p>
                          <p className="text-xs text-gray-500">{stat.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1 }}
                            className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-6 border-t border-gray-100">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ x: 5 }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors font-semibold text-sm group/link"
                        >
                          <FiGithub size={16} />
                          <span>Code</span>
                          <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          whileHover={{ x: 5 }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors font-semibold text-sm group/link"
                        >
                          <FiExternalLink size={16} />
                          <span>Live</span>
                          <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/rkbalolkhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary/30 to-blue-500/30 text-secondary rounded-lg font-semibold hover:from-secondary/50 hover:to-blue-500/50 border border-secondary/50 backdrop-blur-md hover:shadow-xl transition-all duration-200"
          >
            View All Projects on GitHub
            <FiArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
