"use client"
import React from 'react'
import { motion } from 'framer-motion';

const SecondCOMPUNENT = () => {
  return (
    <motion.div 
    
    initial={{y:-150}}
    className='md:flex justify-center md:z-50 hidden'>

<div className='flex  gap-2 z-50'>
         <motion.div
    whileHover="hover"
    transition={{
      duration: 1,
      ease: "backInOut",
    }}
    variants={{
      hover: {
        scale: 1.05,
      },
    }}
    className="relative  lg:w-80 md:w-60 md:h-44 shrink-0 overflow-hidden  bg-green-600"
  >
    <div className="relative  text-center  text-white ">
    
      <motion.span
        initial={{ scale: 0.80 }}
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 0/8,
          ease: "backInOut",
        }}
        className="  text-2xl font-black "
      >
apply        
      </motion.span>
     
    </div>
  
  </motion.div>
{/* 2 */}
<motion.div
    whileHover="hover"
    transition={{
      duration: 1,
      ease: "backInOut",
    }}
    variants={{
      hover: {
        scale: 1.05,
      },
    }}
    className="relative lg:w-80  md:w-60 md:md:h-44 shrink-0 overflow-hidden  bg-green-600"
  >
    <div className="relative z-10 text-center text-white ">
    
      <motion.span
        initial={{ scale: 0.80 }}
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 0/8,
          ease: "backInOut",
        }}
        className="  text-2xl font-black leading-[1.2]"
      >
apply        
      </motion.span>
     
    </div>
  
  </motion.div>
  {/* 3 */}
  <motion.div
    whileHover="hover"
    transition={{
      duration: 1,
      ease: "backInOut",
    }}
    variants={{
      hover: {
        scale: 1.05,
      },
    }}
    className="relative lg:w-80  md:w-60 md:h-44 shrink-0 overflow-hidden  bg-green-600"
  >
    <div className="relative z-10 text-center text-white ">
    
      <motion.span
        initial={{ scale: 0.80 }}
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 0/8,
          ease: "backInOut",
        }}
        className="  text-2xl font-black leading-[1.2]"
      >
apply        
      </motion.span>
     
    </div>
  
  </motion.div>
        </div>
  
    </motion.div>
  
   
);
};


export default SecondCOMPUNENT