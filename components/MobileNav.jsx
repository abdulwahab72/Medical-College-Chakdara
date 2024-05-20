"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import {AiFillCloseCircle} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {BsSearch} from "react-icons/bs"
const Navbar = () => {
    const [go,setgo]=useState(false)
    const [smenu,setsmenu]=useState(false)
    const [open, setOpen] = useState(false);
    const [op, setOp] = useState(false);

    


  return (
    <div>
<div className= {`flex justify-end  bg-green-600 w-full ${go ? "bg-white" :""}
p-4 md:p-0  w-full  relative z-20 items-center 
`}
>
   
 <div onClick={()=>{setgo(!go)}} className='md:hidden relative z-20'>
        { go ? "":<RxHamburgerMenu size={23} className='text-white'/> }
        </div>     
     </div>
    
    <div className=''>
      
      
       < motion.div 
   animate={{x: go ? 0 : "100%"}}
   initial={{x:"100%"}}
   transition={{duration:2, ease:"easeInOut" }} 
   exit={{x:"100%"}}
     
     className= {`  
     flex-col gap-3  font-bold text-xl z-20 h-[100vh]
     
      bg-green-600 opacity-95  w-full  top-0 pt-10 text-center absolute  ${go ? "flex" :"hidden"} md:hidden `}>
  <button className='justify-end grid mx-10' ><AiFillCloseCircle size={33} onClick={()=>{setgo(!go)}} />
  </button>

<div className='bg-green-600 opacity-95 flex items-center  px-10 text-white text-sm '>
<input placeholder='SEARCH NOW' className='bg-green-600 opacity-95 p-5  border-b   text-white  w-full 

 outline-none '/>
<BsSearch size={23}/>

</div>
<div className='text-left mx-20 text-white'>HOME</div>
<div className='text-left mx-20 text-white'>ABOUT</div>
<div className='text-left mx-20 text-white'>CONTACT</div>
<div>
<div onClick={() => setOpen(!open)} className="relative text-left mx-20">
        <button
          onClick={() => setOpen(!open)}
        >
          <span className="flex text-white ">ACADEMICS <IoIosArrowDown/></span>
        </button>
        <ul
          className={`  py-2  pt-4 rounded-lg shadow-xl w-full  text-white bg-green-400 ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-6 py-2 text-sm ">
            Health Technology 
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
            BS Emergency
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
            Faculty of Science
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
            Pathology
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
            DIT
          </li>
        </ul>
      </div>
    
</div>
<div onClick={() => setOp(!op)}

onC={()=>setOpen(false)}
className=" text-left mx-20">
        <button
onClick={()=>{setOpen(false)}}
>
          <span className="flex text-white items-center  ">PAGES <IoIosArrowDown/></span>
        </button>
        <ul
          className={`  py-2 mx-10  rounded-lg shadow-xl w-full  text-white bg-green-400 ${
            op ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-6 py-2 text-sm ">
          Latest News
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
          Blog
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
          Blog Details
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
          Testimonials
          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
          Private Policy

          </li>
          <li className="flex w-full items-center px-6 py-2 text-sm  ">
          Terms of use

          </li><li className="flex w-full items-center px-6 py-2 text-sm  ">
          generic Ui

          </li><li className="flex w-full items-center px-6 py-2 text-sm  ">
          FAQ

          </li>
        </ul>
      </div>
    

      <div className='text-left mx-20 text-white'>GALLARY</div>

        
        </motion.div>
        </div>

    </div>
  )
}

export default Navbar

