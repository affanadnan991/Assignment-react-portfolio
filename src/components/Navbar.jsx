import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center ">
                <motion.h1
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                className='text-2xl font-bold text-white neon-text'
                >
                  MUHAMMAD AFFAN
                </motion.h1>
                <div className="hidden md:flex space-x-8">
                  {['Home', 'Skills', 'Projects', 'Experience', 'About', 'Contact'].map((item) => (
                    <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className='text-gray-300 hover:text-white transition-colors'
                    >
                      {item}
                    </a>
                  ))}
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
