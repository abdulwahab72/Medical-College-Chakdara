import React from 'react'

const SecondComp = () => {
  return (
    
    <div className='   md:grid-cols-4  gap-2 grid grid-cols-1'>

<div className=' p-2  xl:h-[30vh] h-[10vh] md:h-[20vh] lg:h-[22vh] items-center gap-2 bg-green-600 opacity-90
 shadow-md text-white  mb-4 md:mb-0 flex rounded-md '>
  
  <img src='./mouse.svg' className='xl:w-28 xl:h-28 h-10 w-10 md:w-12 md:h-12 lg:w-20 lg:h-20'/>
  
<div >  <h2 className='text-sm xl:text-xl lg:text-lg '>DESCIPLINES</h2>
</div>  
  
  </div>
<div  className=' bg-red-600 p-2 xl:h-[30vh] h-[10vh] md:h-[20vh] lg:h-[22vh]  items-center gap-2  opacity-90 shadow-md text-white  mb-4 md:mb-0 flex rounded-md'>

<img src='./cloud.svg' className='xl:w-28 xl:h-28 h-10 w-10 md:w-12 md:h-12 lg:w-20 lg:h-20'/>
  
  <div >  <h2 className='text-sm xl:text-xl lg:text-lg  2xl:text-4xl'>FEE STRUCTURE</h2>
  
  </div>  



</div>
<div className=' p-2 xl:h-[30vh] h-[10vh] md:h-[20vh]  lg:h-[22vh]  items-center gap-2 bg-green-600 opacity-90 shadow-md text-white  mb-4 md:mb-0 flex rounded-md '>
  
  <img src='./contact.svg' className='xl:w-28 xl:h-28 h-10 w-10 md:w-12 md:h-12 lg:w-20 lg:h-20 '/>
  
<div >  <h2 className='text-sm xl:text-xl lg:text-lg '>ADMISSION FORM</h2>
</div>  


</div>
<div className=' bg-red-600 xl:h-[30vh] h-[10vh] md:h-[20vh] lg:h-[22vh]  
items-center gap-2  opacity-90 shadow-md text-white p-2 mb-4 md:mb-0 flex rounded-md'>
  
  <img src='./job.svg' className='xl:w-28 xl:h-28 h-10 w-10 md:w-12 md:h-12 lg:w-20 lg:h-20'/>
  
  <div >  <h2 className='text-sm xl:text-xl lg:text-lg '>JOBS</h2>
  </div>
  
  
  
  
   </div>

    </div>
  )
}

export default SecondComp