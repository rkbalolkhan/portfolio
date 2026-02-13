import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const email = 'rk.balolkhan@gmail.com'

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex ${isScrolled ? 'justify-center pt-6 px-4' : 'justify-start pt-0 px-0'} transition-all duration-500`}>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`hidden md:flex items-center ${isScrolled ? 'gap-8 bg-primary/30 rounded-full px-8 py-4 shadow-2xl backdrop-blur-xl border border-secondary/20' : 'gap-8 bg-primary/20 w-full px-8 py-5 shadow-lg backdrop-blur-xl border-b border-secondary/20'}`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-white rounded-full text-black hover:scale-110 transition-transform duration-200"
        >
          <FiCode size={22} />
        </a>

        {/* Nav Items */}
        <div className={`flex items-center ${isScrolled ? 'gap-8' : 'gap-12 flex-1 justify-center'}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-secondary text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="text-white hover:text-secondary text-sm font-medium transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Email Button */}
        <motion.button
          onClick={handleEmailCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-shrink-0 bg-white/90 text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border border-white/20 backdrop-blur-sm relative overflow-hidden ${isScrolled ? '' : 'ml-auto'} ${copiedEmail ? 'bg-green-500/90 text-white' : 'hover:bg-white'}`}
        >
          <motion.span
            key={copiedEmail ? 'copied' : 'email'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {copiedEmail ? '✓ Copied!' : email}
          </motion.span>
        </motion.button>

        {/* Social Links */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <motion.a
            href="https://github.com/rkbalolkhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-white hover:bg-secondary/30 transition-colors duration-200"
            title="GitHub"
          >
            <FaGithub size={16} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rkbalolkhan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-white hover:bg-secondary/30 transition-colors duration-200"
            title="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`md:hidden flex items-center justify-between ${isScrolled ? 'max-w-sm w-full bg-primary/30 rounded-full px-6 py-4' : 'w-full bg-primary/20 px-4 py-4'} shadow-2xl backdrop-blur-xl border ${isScrolled ? 'border-secondary/20' : 'border-b border-secondary/20'}`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-white rounded-full text-black"
        >
          <FiCode size={20} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-secondary transition-colors duration-200"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden fixed ${isScrolled ? 'top-20 left-4 right-4' : 'top-16 left-0 right-0'} bg-primary/30 ${isScrolled ? 'rounded-3xl' : 'rounded-none'} p-6 shadow-2xl backdrop-blur-xl border ${isScrolled ? 'border-secondary/20' : 'border-b border-secondary/20'}`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-secondary font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/documents/pdf/rahematullah_cv.pdf"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-secondary font-medium transition-colors duration-200 py-2"
              >
                Resume
              </a>
              <motion.button
                onClick={() => {
                  handleEmailCopy()
                  setIsOpen(false)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-center mt-2 w-full ${copiedEmail ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
              >
                <motion.span
                  key={copiedEmail ? 'copied-mobile' : 'email-mobile'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {copiedEmail ? '✓ Copied!' : email}
                </motion.span>
              </motion.button>
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-secondary/20">
                <motion.a
                  href="https://github.com/rkbalolkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-white hover:bg-secondary/30 transition-colors duration-200"
                >
                  <FaGithub size={16} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rkbalolkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-white hover:bg-secondary/30 transition-colors duration-200"
                >
                  <FaLinkedinIn size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
