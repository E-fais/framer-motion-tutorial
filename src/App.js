import { motion } from 'framer-motion/dist/framer-motion'
import React from 'react'
import './App.css'

function App() {
  const loaderVariant={
    animationOne:{
      x:[-20,20],
      y:[0,-30]
    ,
  transition:{
    x:{
      yoyo:Infinity,
      duration:0.5
    },
    y:{
      yoyo:Infinity,
      duration:0.25,
      ease: 'easeOut'
    }
  }
  }}
 
  return (
    <div>
       <motion.div
      class='loader'
      variants={loaderVariant}
      animate='animationOne'
      >
      </motion.div>
      <p>Loading</p>
     
    </div>
  )
}

export default App