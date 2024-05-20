"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {  motion } from 'framer-motion' 
import { AnimatePresence } from 'framer-motion'
import { useState,useEffect } from 'react'


const HeroBanner = () => {

    // const [value, setValue] = useState(true);


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setValue(!value);
    //     },3000);
    
    //     return () => clearInterval(intervalId);
    //   }, [value]); 
    
    

    return (
        <div className="relative text-white text-[20px]  -z-10 mb-10   min-h-[80vh]  rounded-full">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}

                showThumbs={false}
                showIndicators={false}
                showStatus={false}>


                    {/* First Hover */}
                <div className="relative ">
                    
           
                  
                <img
                        src="./h11.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover   h-[80vh]"/> 
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* SECOND hover */}

                <div className="relative overflow-hidden">
                    
                    <img
                        src="./h12.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-[80vh]"
                    />
                     <div className="absolute inset-0 bg-black opacity-80"></div>

                </div>
                
                {/* 3rd hover */}

                <div className="relative overflow-hidden">

           
                    <img
                        src="./h13.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-[80vh]"
                    />
                     <div className="absolute inset-0 bg-black opacity-50"></div>

                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;




// <div className=' z-50 lg:block hidden '>
        
// <AnimatePresence>
//    {value && (<motion.div 
//             initial={{x:0,opacity:0,zIndex:50,}}
//         animate={{ x: 150,opacity:1 ,zIndex:50, }}
        
//         transition={{ ease: "easeOut", duration: 2,   }}
//         exit={{ x:-70,opacity:0,zIndex:50  }}
   
   
//    className="h-96 flex justify-center lg:pt-32 lg:mt-12  flex-col bg-black/60 text-white absolute" >
//       <div className=' w-96 text-center gap-4'> <h1 className='text-4xl font-extrabold p-4'>ONLINE MBA</h1>
//        <p className=' p-4'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
//        <button className='border-2 border-blue-400  hover:bg-blue-500 hover:text-white transition

// ease-in-out delay-150  p-2'>Know More</button>
       
       
//        </div>
//        </motion.div>)}
//             </AnimatePresence>

          

      
//        </div>
//        {/* moble */}
//        <div className="lg:hidden">
//        <AnimatePresence>
//    {value && (<motion.div 
//             initial={{x:-10,opacity:1,zIndex:50}}
//         animate={{ x: 45,opacity:1 ,zIndex:50 }}
        
//         transition={{ ease: "easeOut", duration: 2, }}
//         exit={{opacity:0,x:0}}

//         className="md:hidden flex flex-col absolute items-center justify-center  h-96  z-50  w-72">
//         <h1>ONLINE MBA</h1>
//        <p className="text-sm">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
//        <button className='border-2 text-sm border-blue-400  hover:bg-blue-500 hover:text-white transition

// ease-in-out delay-150  p-2'>Know More</button>
       
       
       

//        </motion.div> )}
//             </AnimatePresence>

// </div>
    