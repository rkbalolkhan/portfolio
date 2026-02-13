import { motion } from 'framer-motion'
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Education() {
  const education = [
    {
      id: 0,
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 5.56",
      period: "August 2023 - Present",
      description: "Pursuing comprehensive engineering degree with focus on computer science fundamentals, software development, and emerging technologies."
    },
    {
      id: 1,
      institution: "M. A. Pangal Anglo Junior College of Arts and Science",
      location: "Solapur, Maharashtra",
      degree: "Intermediate",
      score: "Percentage: 89.83%",
      period: "April 2019 - March 2021",
      description: "Completed intermediate education with strong academic performance in science and mathematics."
    },
    {
      id: 2,
      institution: "The Progressive Educational Society's Urdu High School",
      location: "Solapur, Maharashtra",
      degree: "Matriculation",
      score: "Percentage: 74.00%",
      period: "April 2018 - March 2019",
      description: "Completed foundational education with focus on core subjects and general knowledge."
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
    hidden: { opacity: 0, x: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

        {/* Rotating indicator */}
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute bottom-40 left-20 w-48 h-48 text-secondary/10"
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
              Academic Journey
            </span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent leading-tight">
            Education
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            Building strong foundations through quality education and continuous learning
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group"
            >
              <div className="bg-primary/[0.04] backdrop-blur-md rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Background vector accent */}
                <motion.div
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"
                />

                <div className="relative z-10">
                  {/* Timeline marker */}
                  <div className="absolute -left-4 top-10 w-3 h-3 rounded-full bg-secondary border-4 border-white" />

                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6 ml-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg flex-shrink-0"
                    >
                      <FiBookOpen size={28} className="text-white" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-2xl"
                    >
                      🎓
                    </motion.span>
                  </div>

                  {/* Institution and Details */}
                  <div className="ml-6">
                    <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                      {edu.institution}
                    </h3>

                    <p className="text-lg font-semibold text-secondary mb-2">
                      {edu.degree}
                    </p>

                    {/* Location and Period */}
                    <div className="flex flex-col sm:flex-row gap-4 text-primary/60 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} className="text-secondary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} className="text-secondary" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/[0.1] border border-secondary/20">
                      <p className="text-sm font-semibold text-secondary">
                        {edu.score}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-primary/70 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
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
              Education is the foundation of success{" "}
              <span className="text-secondary">🚀</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
