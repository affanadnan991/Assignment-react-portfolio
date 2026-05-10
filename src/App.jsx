import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import Navbar from './components/Navbar';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Navbar /> */}
      <hr />
      <nav className="fixed w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            className='text-2xl font-bold text-white neon-text'
            >
              <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>&lt;   </motion.p>
                &lt;MUHAMMAD AFFAN /&gt;
              <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>   &gt;</motion.p>
            </motion.h1>
            <div className="hidden md:flex space-x-8">
            <Link to='/' >Home</Link>
            <Link to='/skills' >Skills</Link>
            <Link to='/projects' >Projects</Link>
            <Link to='/experience' >Experience</Link>
            <Link to='/about' >About us</Link>
            <Link to='/contact' >Contact us</Link>
            </div>
          </div>
        </div>
      </nav>


      <Outlet />

    </div>
  )
}

export default App
