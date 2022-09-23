import React from 'react'
import './App.css'
import { motion } from 'framer-motion/dist/framer-motion'

function App() {
  return (
    <div>
      <motion.h1
        initial={{ x: 300 , opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{
          type:'spring',
          stiffness:120
        }}
      >
        Hello World
      </motion.h1>
    </div>
  )
}

export default App