import React from 'react'

const Six_H = () => {
  return (
    <div>
    <div  className={`mt-4 min-h-[50vh] relative bg-[url('../public/why-choose-bg.webp')] bg-cover
    
    -z-10  over overflow-hidden md:min-h-[40vh] xl:min-h-[60vh]`}>
      <div className="absolute inset-0 bg-[#17a43b] opacity-[0.8] -z-10 "></div>

      <div className='py-8 mx-5'>
        <h2 className='text-center text-sm text-gray-50'>THE NUMBERS SAY IT ALL  </h2>
        <h2 className=' text-center text-white text-2xl font-bold '>WHY CHOOSE US</h2>
        </div>


<ul className='text-center grid grid-cols-2 md:grid-cols-4 lg:flex  lg:justify-center lg:gap-12


text-[#fff] gap-4 '>

  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md lg:px-6    '>
    
    <div className=''>
<img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-medium xl:py-1'>36</p>

    <div className='md:text-lg'>Certified Courses</div>



  </li>
  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md  lg:px-6   '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-medium xl:py-1'>245000</p>

    <div className='md:text-lg'>Certified Courses</div>



  </li>
  <li className='border-[#94d3a4] md:border-r flex flex-col justify-center items-center text-md   lg:px-6  '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-medium xl:py-1' >95%</p>

    <div className='md:text-lg'>Certified Courses</div>



  </li>
  <li className='border-[#94d3a4]  flex flex-col justify-center items-center text-md   lg:px-6  '>
    
    <div className=''>
    <img src='./practical-ico.webp' className='md:w-24'/>


    </div>
    <p className='text-xl md:text-2xl xl:text-4xl font-medium xl:py-1'>100%</p>

    <div className='md:text-lg'>Certified Courses</div>



  </li>
  
  
</ul>
      



 
 







</div>


    </div>
  )
}

export default Six_H