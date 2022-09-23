import React from 'react'
import './App.css'
import { motion } from 'framer-motion/dist/framer-motion'

function App() {
  const myVariants={
    start:{
      opacity:0
    },
    final:{
      opacity:1,
      transition:{
        duration:2
      }
    }
  }
  return (
    <div>
      <motion.h1
    variants={myVariants}
    initial='start'
    animate='final'
      >
        Hello World
      </motion.h1>
    </div>
  )
}

export default App