

import Fifth_hs from "@/components/Home-Components/Fifth_hs"
import Forth from "@/components/Home-Components/Forth"
import HeroBanner from "@/components/Home-Components/HeroBanner"
import Six_H from "@/components/Home-Components/Six_H"
import ThirdH_com from "@/components/Home-Components/ThirdH_com"
import SecondCOMPUNENT from "@/components/localcompunents/SecondCOMPUNENT"
import {AiFillPlayCircle} from "react-icons/ai"


export default function Home() {

  return (
   <main className="overflow-hidden ">
    

{/* <div className="relative"><Loading_State/> */}
<div>
<HeroBanner/>
<SecondCOMPUNENT/>

</div>



<div className="lg:mx-8 md:mx-4  ">

{/* ThirdCompuent */}
<div> 
  <div className=' '>
<div className=' md:grid-cols-3 grid grid-cols-1 gap-4 xl:gap-0  '>

    <div  className='md:w-64 md:h-64 lg:h-auto lg:w-auto mx-4 pt-2  mt-2'> 
    <img  src='./1.png' className="w-auto xl:h-80" /></div>


    <div className="col-span-2 mx-10 xl:mx-0">
      <h2 className='md:text-3xl text-xl p-2 font-bold xl:text-5xl xl:py-4  '>CEO MESSAGE</h2>

       <p className=' text-gray-500 xl:text-xl text-sm md:p-2 '>A federation of all humanity, together with a sufficient measure of
        social justice, to ensure health, education, and a rough equality of opportunity to most of the 
         children born into the world, would mean such a release and increase of human energy as to open
        a  new phase in human history</p>
        <div className='flex items-center mt-10 '> <h2 className='font-bold '>KNOW MORE </h2>
    <AiFillPlayCircle className='text-blue-600'/>


    </div>

    </div>



</div>




    </div>
    
    
    </div>
</div>

<ThirdH_com/>
<Forth/>
<Fifth_hs/>
<Six_H/>
   </main>
  )
}
