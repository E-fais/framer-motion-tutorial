import React from 'react'
import './App.css'
import { motion } from 'framer-motion/dist/framer-motion'

function App() {
  return (
    <div>
      <motion.button
       whileHover={{
        scale:1.1,
        background:'red'
      }}
      >
        Hello World
      </motion.button>
    </div>
  )
}

export default App