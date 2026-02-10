import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rkbalolkhan', label: 'GitHub' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com/in/rkbalolkhan', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ]

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-t from-primary via-primary to-primary/95 text-white py-16 px-4 sm:px-6 lg:px-8 mt-20 border-t border-secondary/20 relative overflow-hidden">
      {/* Animated SVG Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated footer connection lines */}
        <svg className="hidden md:block absolute w-full h-full opacity-15" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <motion.path
            d="M 0 100 Q 300 50, 600 100 T 1200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-secondary"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.path
            d="M 50 300 L 550 200 L 1150 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>

        {/* Footer section divider accents */}
        <svg className="hidden lg:block absolute w-full h-full opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <motion.line x1="300" y1="50" x2="300" y2="350" stroke="currentColor" strokeWidth="0.5" className="text-secondary" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }} />
          <motion.line x1="900" y1="50" x2="900" y2="350" stroke="currentColor" strokeWidth="0.5" className="text-secondary" animate={{ opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }} />
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full border border-secondary/10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-secondary/20"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-2xl font-bold mb-3 text-white">Rahematullah<br/>A. Qayyum Balolkhan</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Full Stack Developer crafting beautiful, functional web experiences with React, Node.js, and modern web technologies.
            </p>
            <p className="text-sm text-secondary font-medium">Web & AI Enthusiast</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium text-sm group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-white">Connect</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/70 text-sm">Follow me on social media for updates and insights</p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover="hover"
                      initial="initial"
                      className="relative group"
                    >
                      {/* Glow effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                        className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/40 flex items-center justify-center text-white backdrop-blur-md"
                        variants={{
                          initial: { scale: 1, rotate: 0 },
                          hover: {
                            scale: 1.15,
                            rotate: 10,
                            borderColor: 'rgb(99, 102, 241)',
                            backgroundColor: 'rgb(99, 102, 241 / 0.5)',
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                            transition: { type: 'spring', stiffness: 400, damping: 10 },
                          },
                        }}
                        whileTap={{ scale: 0.9, rotate: 0 }}
                        title={social.label}
                      >
                        {/* Icon animation */}
                        <motion.div
                          variants={{
                            initial: { y: 0, rotate: 0 },
                            hover: { y: -2, rotate: 15 },
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Icon size={20} className="drop-shadow-lg" />
                        </motion.div>
                      </motion.a>

                      {/* Label on hover */}
                      <motion.span
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap opacity-0"
                        variants={{
                          initial: { opacity: 0, y: -5 },
                          hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.label}
                      </motion.span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Rahematullah A. Qayyum Balolkhan. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with <span className="text-secondary font-semibold">React</span> + <span className="text-secondary font-semibold">Vite</span> + <span className="text-secondary font-semibold">Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
