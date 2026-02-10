import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rkbalolkhan', label: 'GitHub' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com/in/rkbalolkhan', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/rkbalolkhan', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com/rahematullah_', label: 'Instagram' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section
      id="contact"
      className="pt-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden"
    >
      {/* Animated SVG Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Message wave pattern */}
        <svg className="absolute w-full h-full opacity-15" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M 0 300 Q 150 200, 300 300 T 600 300 T 900 300 T 1200 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-secondary"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.path
            d="M 0 500 Q 200 400, 400 500 T 800 500 T 1200 500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.1, 0.3, 0.1], d: "M 0 500 Q 200 450, 400 500 T 800 500 T 1200 500" }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
        </svg>

        {/* Contact point indicators */}
        <motion.svg
          className="hidden lg:block absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <motion.circle cx="200" cy="300" r="3" fill="currentColor" className="text-secondary" animate={{ opacity: [0.3, 0.7, 0.3], r: [3, 5, 3] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="600" cy="250" r="3" fill="currentColor" className="text-secondary" animate={{ opacity: [0.2, 0.6, 0.2], r: [3, 5, 3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="1000" cy="350" r="3" fill="currentColor" className="text-secondary" animate={{ opacity: [0.3, 0.7, 0.3], r: [3, 5, 3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
        </motion.svg>

        {/* Decorative rotating element */}
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 text-secondary/10"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Connection points */}
          <motion.circle cx="50" cy="10" r="1" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="90" cy="50" r="1" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />
          <motion.circle cx="50" cy="90" r="1" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }} />
        </motion.svg>

        {/* Original background lines */}
      </div>

      {/* Subtle animated background lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0"
            y1="200"
            x2="1200"
            y2="200"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.line
            x1="0"
            y1="400"
            x2="1200"
            y2="400"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 py-2"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent mb-6">
            Let's Create
            <br />
            Something Great
          </h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto leading-relaxed">
            Drop me a line about your project, or just say hello. I'm always
            open to exciting opportunities.
          </p>
        </motion.div>

        {/* Main Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Form with minimal styling */}
          <form
            onSubmit={handleSubmit}
            className="bg-primary/[0.03] backdrop-blur-md rounded-3xl p-8 md:p-12 border border-secondary/20 shadow-sm"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary/80 mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-transparent border-b border-secondary/30 focus:border-secondary focus:outline-none text-primary placeholder-primary/40 transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary/80 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-transparent border-b border-secondary/30 focus:border-secondary focus:outline-none text-primary placeholder-primary/40 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary/80 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  className="w-full px-5 py-3 bg-transparent border-b border-secondary/30 focus:border-secondary focus:outline-none text-primary placeholder-primary/40 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              <motion.div layout>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-primary/10 border border-secondary/40 rounded-lg text-primary/80 font-medium"
                  >
                    ✨ Thanks! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-primary/10 border border-secondary/40 rounded-lg text-primary/80 font-medium"
                  >
                    ⚠️ Something went wrong. Please try again.
                  </motion.div>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="relative group w-full md:w-auto"
              >
                <div className="flex items-center justify-center gap-3 px-8 py-4 bg-primary/90 text-white font-semibold rounded-xl hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiSend size={18} />
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Footer with Contact Info & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-secondary/20"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {/* Email */}
            <motion.a
              href="mailto:rk.balolkhan@gmail.com"
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors"
                >
                  <FiMail size={18} className="text-secondary" />
                </motion.div>
                <div>
                  <p className="text-sm text-primary/60 font-semibold mb-1">
                    Email
                  </p>
                  <p className="text-primary font-semibold group-hover:text-secondary transition-colors break-all">
                    rk.balolkhan@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+919922339029"
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors"
                >
                  <FiPhone size={18} className="text-secondary" />
                </motion.div>
                <div>
                  <p className="text-sm text-primary/60 font-semibold mb-1">
                    Phone
                  </p>
                  <p className="text-primary font-semibold group-hover:text-secondary transition-colors">
                    +91 9922339029
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Social Links */}
            <div>
              <p className="text-sm text-primary/60 font-semibold mb-4">
                Connect
              </p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover="hover"
                      initial="initial"
                      className="relative group"
                    >
                      {/* Glow effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        variants={{
                          initial: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                      />
                      
                      {/* Main button */}
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/40 flex items-center justify-center text-primary backdrop-blur-md"
                        variants={{
                          initial: { scale: 1, rotate: 0 },
                          hover: {
                            scale: 1.15,
                            rotate: 10,
                            transition: { type: 'spring', stiffness: 400, damping: 10 },
                          },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Icon animation */}
                        <motion.div
                          variants={{
                            initial: { y: 0, rotate: 0 },
                            hover: { y: -2, rotate: 15 },
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Icon size={18} className="drop-shadow-lg" />
                        </motion.div>
                      </motion.a>

                      {/* Label on hover */}
                      <motion.span
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-primary font-medium whitespace-nowrap opacity-0"
                        variants={{
                          initial: { opacity: 0, y: -5 },
                          hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.label}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-primary/50 text-sm">
            💡 Excited about a project? Let's talk about it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
