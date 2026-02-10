import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="font-display text-2xl font-bold mb-2">Rahematullah A. Qayyum Balolkhan</h3>
            <p className="text-gray-300">Full Stack Developer | Web & AI Enthusiast</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/rkbalolkhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rkbalolkhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Rahematullah A. Qayyum Balolkhan. All rights reserved. Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
