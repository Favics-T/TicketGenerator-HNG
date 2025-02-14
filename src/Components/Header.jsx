import React from 'react'
import Hug from '../assets/Image/Hug'
import Tic from '../assets/Image/Tic'
import { MdArrowRightAlt } from "react-icons/md";

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-[#03161a] '>
      
      {/* Header Container Starts Here */}
      <div className='flex w-[320px]  justify-between mt-[12px] md:w-[1200px] py-[12px] px-[16px] items-center rounded-[24px] border-[1px] border-[#197686] 
      bg-[#05252c66] backdrop-blur-[2px]   '> 

        {/* Icons starts here */}
        <div className='flex gap-[8px]'>
          <Hug />
          <Tic />
        </div>
        {/* Icons ends Here */}

        {/* List Starts here */}
        <div>

                   
          <ul className='md:flex font-[JejuMyeongjo] text-[18px] font-normal text-[#B3B3B3] hidden gap-[16px] items-center'>
            <li className='text-[#fff]  '>Events</li>
            <li>Ticket</li>
            <li>About Project</li>
          </ul>
        </div>
        {/* List Ends Here */}


        {/* My ticket starts here */}
        <div className=' flex py-[12px] px-[16px] md:py-[16px] md:px-[24px] border-[rgba(213,234,0,0.10)] justify-center items-center gap-[8px] rounded-[8px] border bg-[#fff]'>
         
    <h1 className='text-[#0a0c11] font-[JejuMyeongjo] md:text-[16px] text-[14px] uppercase leading-[20px]  '>My Ticket</h1>
    <MdArrowRightAlt />
        </div>
        {/* MY Ticket ends here */}
        
        
        </div> 
           {/* Header Container Ends Here */}

               </div>
  )
}

export default Header
