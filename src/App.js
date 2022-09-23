import React from 'react'
import './App.css'
import {motion} from 'framer-motion/dist/framer-motion'

function App() {
  return (
    <div>
      <motion.h1
      initial={{x:300}}
      animate={{x:0}}
      >
    Hello World
    </motion.h1>
 </div>
  )
}

export default App