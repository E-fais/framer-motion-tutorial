import { motion,useCycle } from 'framer-motion/dist/framer-motion'
import React from 'react'
import './App.css'
function App() {
  const [animation,cycleAnimation]=useCycle("animationOne","animationTwo")
  const loaderVariant = {
    animationOne: { x: [-20, 20],
                    y: [0, -30],
                   transition: { x: { yoyo: Infinity, duration: 0.5 },
                                 y: {yoyo: Infinity,duration: 0.25,ease: 'easeOut' }}},
    animationTwo:{
         X:0,
          y:[0,-40],transition:{
          y:{ yoyo:Infinity, duration:0.25, ease:'easeOut'}
      }
    }
  }
  return (
    <div>
      <motion.div
        class='loader'
        variants={loaderVariant}
        animate={animation} >
      </motion.div>
      <p onClick={()=>cycleAnimation()}>Cycle Animation</p>
    </div>
  )
}

export default App