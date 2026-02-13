import { motion } from 'framer-motion'
import { FiAward, FiCheck, FiExternalLink } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      id: 0,
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook) via Coursera",
      date: "Mar 2024",
      description:
        "Completed professional certification covering modern frontend development including React, JavaScript, responsive design, version control, and UI development best practices.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
      verificationLink:
        "https://coursera.org/share/bde4e232ee272d602111c74ac17a59ad",
    },
    {
      id: 1,
      title: "Software Engineering: Implementation and Testing",
      issuer: "The Hong Kong University of Science and Technology",
      date: "May 2024",
      description:
        "Certification covering software implementation, testing methodologies, debugging practices, and structured development processes.",
      skills: [
        "Software Development Lifecycle (SDLC)",
        "Unit Testing",
        "Integration Testing",
        "Debugging Techniques",
        "Code Validation",
        "Quality Assurance",
      ],
      verificationLink:
        "https://coursera.org/share/52455d489c12702154bc2885ab46cdad",
    },
    {
      id: 2,
      title: "Crash Course on Python",
      issuer: "Google (via Coursera)",
      date: "Dec 2023",
      description:
        "Foundational Python certification covering programming basics, data structures, and object-oriented principles.",
      skills: [
        "Python Fundamentals",
        "Data Structures in Python",
        "Functions & Modules",
        "Object-Oriented Programming",
        "Error Handling",
        "File Handling",
      ],
      verificationLink:
        "https://coursera.org/share/cd3f9bc46ed5931f8103dba010de5f11",
    },
    {
      id: 3,
      title: "C Programming Language – Live Summer Training",
      issuer: "CSE Pathshala",
      date: "June 2025 – July 2025",
      description:
        "Completed a 35+ hour instructor-led training program covering foundational and intermediate C programming concepts with hands-on implementation and structured problem-solving practice.",
      skills: [
        "C Programming",
        "Pointers & Memory Management",
        "Dynamic Memory Allocation",
        "File Handling",
        "Control Structures",
        "Debugging Techniques",
        "Arrays & Structures",
        "Algorithmic Problem Solving",
      ],
      verificationLink:
        "https://drive.google.com/file/d/1AtObkJtLPadZDq03NZF79JyiCFpuXQ1C/view?usp=sharing",
    },
  ];

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

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Decorative circles */}
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-40 h-40 rounded-full border border-secondary/10"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-40 right-10 w-56 h-56 rounded-full border-2 border-secondary/5"
        />

        {/* Rotating indicator */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute top-40 right-20 w-48 h-48 text-secondary/10"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <motion.circle
            cx="50"
            cy="10"
            r="1.5"
            fill="currentColor"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.circle
            cx="90"
            cy="50"
            r="1.5"
            fill="currentColor"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          />
        </motion.svg>
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
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Credentials
            </span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent leading-tight">
            Certifications
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            Continuously learning and earning industry-recognized certifications
            to stay ahead in web development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-primary/[0.04] backdrop-blur-md rounded-3xl p-8 border border-secondary/20 hover:border-secondary/40 shadow-sm hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden">
                {/* Background vector accent */}
                <motion.div
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg flex-shrink-0"
                    >
                      <FiAward size={28} className="text-white" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Issuer and Date */}
                  <p className="text-secondary font-semibold text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-primary/60 text-sm mb-5">{cert.date}</p>

                  {/* Description */}
                  <p className="text-primary/70 leading-relaxed text-sm mb-6 flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-secondary/[0.08] border border-secondary/20 group-hover:bg-secondary/[0.15] group-hover:border-secondary/40 transition-all"
                      >
                        <FiCheck size={12} />
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Verification Link */}
                  {cert.verificationLink && (
                    <motion.a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-secondary hover:text-blue-500 font-semibold text-sm transition-colors duration-200 group/link"
                    >
                      <span>Verify Certificate</span>
                      <FiExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
              Always learning and growing{" "}
              <span className="text-secondary">📚</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
