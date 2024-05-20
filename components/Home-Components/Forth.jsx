import Image from 'next/image'
import React from 'react'

const Forth = () => {
  return (
    <div className='min-h-[90vh] grid md:grid-cols-3 grid-cols-1 gap-4'>
        {/* 1 */}

        <div className='border-r'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./study-time-ico.webp' className='w-[56px] h-[56px] my-4'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[18.72 px] uppercase font-bold mb-1'>Malleable Study Time</h3>
            <p className='text-xs text-gray-400 text-center py-2'>Study material available online 24/7. 
                Study in your free time, no time management issues, perfect balance between work and study time.<span className='text-blue-600'>...more</span></p>
            </div>
            </div>
            {/* 2 */}

            <div className='border-r'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./placement-ico.webp' className='w-[56px] h-[56px] my-4'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[18.72 px] font-bold mb-1'>PLACEMENT ASSISTANCE</h3>
            <p className='text-xs text-gray-400 text-center py-2'>ITM University Online has access to all of ITM Group’s placement resources and alumni network,
             through which thousands of job opportunities are generated<span className='text-blue-600'>...more</span></p>
            </div>
            </div>

{/* THIRD */}

            <div className='border-r'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./easy-access-ico.webp' className='w-[56px] h-[56px] my-4'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[18.72 px] font-bold mb-1 uppercase'>Easy To Access</h3>
            <p className='text-xs text-gray-400 text-center py-2'>
            There is easy accessibility to online help in terms of online teachers and online forums. 
            Teachers can be contacted with the help of video chats and e-mails..<span className='text-blue-600'>...more</span>
            </p>
            </div>
            </div>
{/* FORTH */}

            <div className='border-r border-t'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./study-go-ico.webp' className='w-[56px] h-[56px] my-4'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[18.72 px] font-bold mb-1 uppercase'>Study on the Go</h3>
            <p className='text-xs text-gray-400 text-center py-2'>LMS that is easily accessible on a number of devices such as mobile phones, I-pads, computers and other such devices. Availability of ready reckoners
             such that students can remember the key points of the session learnt. .<span className='text-blue-600'>...more</span></p>
            </div>
            </div>

            {/* 5 */}

            <div className='border-r border-t'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./get-innovative-ico.webp' className='w-[56px] h-[56px] mt-3 mb-2'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[17px] font-bold uppercase'>Get an Innovative ,<br/> 
            In-depth Transition</h3>

            <p className='text-xs text-gray-400 text-center py-2'>The transition to an environment of learning becomes easy with the availability of multiple sources of learning such as text books, 
            power-point presentations, and story boards on various subjects. .<span className='text-blue-600'>...more</span></p>
            </div>
            </div>
            {/* 6 */}
            <div className='border-r border-t'>
            <div className='p-2'>
            <div className='flex justify-center'>
                 <img src='./placement-ico.webp' className='w-[56px] h-[56px] mt-3 mb-2'/>
</div>
            
            <h3 className='text-center text-gray-700 text-[18.72 px] font-bold mb-1 uppercase'>Practical & Interactive <br/>
            Participation</h3>
            <p className='text-xs text-gray-400 text-center py-2'>Assessments and interactivities are given at the end of every session 
            such that the practical application of theory learnt can be gauged. .<span className='text-blue-600'>...more</span></p>
            </div>
            </div>
        
        
          

    </div>
  )
}

export default Forth