import React from 'react'
import './App.css'
import { motion } from 'framer-motion/dist/framer-motion'
function App() {

  const myVariants = {
      start:{
    rotateY:120
      },
        final:{
          rotateY:0,
          transition:{
            yoyo:Infinity,
            duration:3
          }}
  }
      return (
        <div>
          <motion.h1
          variants={myVariants}
          initial='start'
          animate='final'>
            YoYo keyframe  
          </motion.h1>
        </div>
      )
}
export default App