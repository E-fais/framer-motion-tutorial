        import React from 'react'
        import './App.css'
        import { motion } from 'framer-motion/dist/framer-motion'
        function App() {
          const myVariants = {
            start: { x:1000 },
            final: { x:0, transition: { type:'tween'} ,
                    transition:{when:'beforeChildren'}}
          }
          const childVariants = {
            start: {opacity: 0},
            final: { opacity: 1,
                    transition:{ duration:2}}
          }
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
                </div>
               </motion.div>
          )
        }

        export default App