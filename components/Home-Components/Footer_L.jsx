import Link from 'next/link'
import React from 'react'
import {TiSocialTwitterCircular,TiSocialFacebookCircular,TiSocialLinkedinCircular
,TiSocialYoutubeCircular ,TiSocialInstagram ,TiMail

} from "react-icons/ti"

const Footer_L = () => {
  return (
   <div className=' pb-4 bg-[#2E5F85] text-white pt-1'> 
    {/* Main */}
    <div className='md:grid md:grid-cols-3 md:place-items-center '>
        {/* 1 */}
        <div className='flex items-center'>
        <div className='flex flex-col items-center p-2 py-5' > 

<h3 className='font-bold text-[18.75px] ml-2 mt-4'>CONNECT WITH US</h3>
<ul className='flex items-center pt-4 lg:pt-3 '>
    <Link href='/'><li><TiSocialTwitterCircular className='text-[50px] md:text-[40px]'/></li></Link>
    <Link href='/'><li> <TiSocialFacebookCircular className='text-[50px] md:text-[40px]' /></li></Link>
    <Link href='/'><li><TiSocialLinkedinCircular className='text-[50px] md:text-[40px]'/></li></Link>
    <Link href='/'><li><TiSocialYoutubeCircular className='text-[50px] md:text-[40px]'/></li></Link>
    <Link href='/'><li><TiSocialInstagram className='text-[45px] md:text-[35px]'/></li></Link>

</ul>


        </div></div>
                {/* 2 */}
        <div> 

<form className='ml-4 md:ml-0 md:border-r md:border-l xl:pl-16 xl:pr-16 lg:pl-4 md:pl-4  '>
<h3 className='font-bold text-[18.75px] ml-2 mt-4 uppercase '>Subscribe  with Us</h3>
<div className='flex items-center mr-8 pt-5 lg:pt-3'>
<input placeholder='ENTER YOUR EMAIL' className='p-2 md:px-4 xl:px-10 w-full text-black text-md  rounded-l-md placeholder-black '/>
<button className='p-[6px] bg-[#2C97EA] md:rounded-e-md'><TiMail size={30}/></button>
</div>

</form>



        </div>



        {/* 3 */}

        <div className='pt-10 ml-3 md:pt-0 md:ml-0  '> 
            <h3 className='tfont-bold text-[18.75px] ml-2 mt-4'>@ INSTAGRAM</h3>
            
            <ul className='flex pt-4 gap-1 mx-3 md:mx-0 md:mr-1'>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                 lg:w-[43px] lg:h-[43px]'/></li>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]'/></li>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]'/></li>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]'/></li>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]'/></li>
                <li><img src='./footer-b.webp ' className='w-[56px] h-[56px] md:w-[29px] md:h-[29px]
                   lg:w-[43px] lg:h-[43px]'/></li>

               

            </ul>
            
            
            
            </div>

    </div>
</div>

  )
}

export default Footer_L