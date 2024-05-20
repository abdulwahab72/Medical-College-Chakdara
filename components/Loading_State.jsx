"use client"
import React from 'react'
import {  motion } from 'framer-motion' 
import { AnimatePresence } from 'framer-motion'
import { useState,useEffect } from 'react'


const Loading_State = () => {
const [value, setValue] = useState(true);


useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(!value);
    },3000);

    return () => clearInterval(intervalId);
  }, [value]); 



console.log(value)


  return (
    <div className='absolute z-50 '>
        
 <AnimatePresence>
    {value && (<motion.div 
             initial={{x:0,opacity:0,zIndex:50,y:50}}
         animate={{ x: 150,opacity:1 ,zIndex:50,y:50 }}
         
         transition={{ ease: "easeOut", duration: 2, }}
         
         exit={{ x:-70,opacity:0,zIndex:50,y:50 }}
    
    
    className="h-96 flex justify-center pt-32  flex-col bg-black/60 text-white" >
       <div className=' w-96 text-center gap-4'> <h1 className='text-4xl font-extrabold p-4'>ONLINE MBA</h1>
        <p className=' p-4'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
        <button className='border-2 border-blue-400  hover:bg-blue-500 hover:text-white transition

ease-in-out delay-150  p-2'>Know More</button>
        
        
        </div>
        </motion.div>)}
             </AnimatePresence>

           

       
        </div>
  )
}

export default Loading_State



// <AnimatePresence>
// {value && (<motion.div 
//          initial={{x:100,opacity:0}}
//      animate={{ x: 0,opacity:1 }}
     
//      transition={{ ease: "easeOut", duration: 2, }}
     
//      exit={{ x:-70,opacity:0 }}


// className=" flex  flex-col items-end" >
//    <div className=' w-96 text-center gap-4'> <h1 className='text-lg p-2'>ONLINE MBA</h1>
//     <p className=' p-4'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
//     <button className='border-2 border-blue-400 p-2  hover:bg-blue-500 hover:text-white transition

// ease-in-out delay-150 '>Know More</button>
    
    
//     </div>
//     </motion.div>)}
//          </AnimatePresence>                    




// initial="hidden"