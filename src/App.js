        import React from 'react'
        import './App.css'
        import { motion } from 'framer-motion/dist/framer-motion'
        function App() {
          const myVariants = {
            start: { x:1000 },
            final: { x:0, transition: { type:'tween'} ,
                    transition:
                    {when:'beforeChildren',
                    staggerChildren:0.4,
                    damping:8,
                    mass:0.4
                  }}
          }
          const childVariants = {
            start: {x: '-120vw'},
            final: { x: 0,
                     transition:{
                      damping:0.8,
                      mass:5
                    }
            }}
              return (
                <motion.div
                    variants={myVariants}
                    initial='start'
                    animate='final'
                >
                  <h3>Hello World</h3>
                 <div>
                    <motion.p variants={childVariants} >
                       This is a sample text
                     </motion.p>
                    <motion.p variants={childVariants} >
                       This is another text
                     </motion.p>
                     
                </div>
               </motion.div>
          )
        }

        export default App