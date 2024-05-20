import React from 'react'
import Image from 'next/image'
import {AiFillPlayCircle} from "react-icons/ai"
const TopNav = () => {
  return (
    
    <div>
      {/* for mobile button */}
    <nav className='flex p-4 items-center justify-between md:justify-normal md:hidden' >

<span className="flex items-center p-2 md:p-0 gap-1 md:mr-10">

  <Image src="/logo.jpeg" alt='logo' width={40} height={40}/>
  <p className='text-xs md:hidden'>Medicaid College <br/> Chakdara</p>


</span>
<button className='p-2 border-blue-400 rounded-md border-2 md:hidden flex items-center gap-1 text-gray-600 font-bold text-sm'>Apply Now
 <AiFillPlayCircle className='text-blue-400'/>

  </button>
    </nav>


    <div className='hidden md:flex p-4 lg:justify-between xl:justify-normal lg:mx-10' >

  <span className="flex items-center p-2 md:p-0 gap-1 md:mr-10 xl:mr-48">
<Image src="/logo.jpeg" alt='logo' width={40} height={40}/>
<h2 className='hidden md:block md:text-sm '>Medicaid College<br/>  Chakdara</h2></span>

<ul className='flex'>
  <li className='hidden md:block  border-r p-2 justify-center md:mr-8 md:text-sm lg:px-10 xl:mr-24'>
    
    
     <div className="text-gray-600 text-xs lg:text-sm">EMAIL 
     </div><p className=''>Arifshah715@gmail.com 
     </p>
     </li>
     {/*FirstLINE end*/} 
     <li className='hidden md:block  border-r p-2 justify-center md:mr-10 lg:mr-4 md:text-sm lg:px-10 xl:mr-20'>
      <div className='text-gray-600 text-xs lg:text-sm'>CONTACT No:
        
         </div>        <p>0345-9260037</p>
   </li>
   
 </ul>
 <div className='flex items-center'>
 <button className='p-2 md:px-8  border-blue-400 rounded-md border-2 flex items-center gap-1
  text-gray-600 font-bold md:text-xs text-sm lg:p-3 lg:px-10 xl:px-14 xl:ml-2'>
  Apply Now
 <AiFillPlayCircle className='text-blue-400 lg:text-lg' />

  </button>
  </div>






    </div>
    </div>
  )
}

export default TopNav




// <div className='flex'>
// <ul className='flex'>
//   <li className='hidden md:block  border-r p-2 justify-center md:mr-10 md:text-sm'>
    
    
//     <div className="text-gray-600">EMAIL 
//     </div><p className=''>Arifshah715@gmail.com 
//     </p>
//     </li>
//     {/*end*/} 
//     <li className='hidden md:block  border-r p-2 justify-center md:mr-10 md:text-sm'><div className='text-gray-600'>CONTACT No:
        
//         </div>        <p>0345-9260037</p>
//   </li>
// </ul>
// <button className='p-2 border-blue-400 rounded-md border-2 flex items-center gap-1 text-gray-600 font-bold text-sm'>Apply Now
// <AiFillPlayCircle className='text-blue-400'/>

//  </button>
// </div>
