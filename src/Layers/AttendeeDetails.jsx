import React, { useContext, useState } from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import FormContext from '../Context/FormContext';


const AttendeeDetails = () => {
  const{ formData,setFormData } = useContext(FormContext)

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })
  }
  return (
    <div className='bg-[#041e23] text-[#ffff] h-auto flex justify-center '>
{/* 

*/}
<div className='bg-[#041e23] border p-[48px] justify-center items-center  my-[112px] border-[#0e464f]
gap-[32px] w-[700px]  flex flex-col  rounded-[24px]  '>

{/* Header Starts Here */}
<div>
<div className='flex gap-[300px] text-white'>
    <h1 className='text-[#fff] font-[JejuMyeongjo] self-stretch text-[32px] font-normal '>Attendee Details</h1>
    <p className='font-[Roboto] mt-4 text-[16px] font-normal  '>
      Step 2/3</p>
</div>

{/* Progress bar */}

<div className='self-stretch w-full flex rounded-[5px] bg-[#0E464F] h-[4px] pr-[278px] items-center '>
<div className='w-[326px]  self-stretch bg-[#24a0b5] '></div>
<div className='bg-[#0E464F] '></div>


</div>
</div>


{/* Header ends here */}

{/* multi step form starts here */}

<div className='border border-[#0E464F] rounded-[32px] flex 
p-[24px] flex-col justify-center items-star gap-[32px] self-stretch '>


{/* Component instance starts here */}




<div className='bg-[#052228] border border-1-[#07373F]
border-[#07373F] rounded-[24px] flex flex-col w-[556px] 
p-[24px] items-start gap-[32px]  '>

<h1 className='text-white font-[Roboto] text-[16px] font-normal
font-400 '>Upload Photo Here</h1>

{/* Photo frame starts here */}
<div className='flex justify-center border-[#0e464f] border px-[24px]
  gap-[10px] self-stretch items-center bg-[rgba(0,0,0,0.20)]'>
  {/* image container */}
  
  <div className='flex flex-col justify-center bg-[#0E464F] border border-[#0e464f] rounded-[32px] gap-[16px]
  items-center w-[240px] h-[240px] p-[24px]  '>
    <h1 className='w-[32px] h-[32px] flex shrink  aspect-square '> <IoCloudDownloadOutline /> </h1>
  <h1 className='text-center text-[#fafafa] font-[Roboto]
  text-[16px] font-400  '>
    Drag & drop or click to upload</h1>
  </div>
</div>

{/* Photo Frame ends here */}
</div>
{/* component instance ends here */}

{/* progress bar starts here */}
<div className='h-[4px] self-stretch bg-[#07373F]  '></div>
{/* progress bar ends here */}


  {/*form starts here  */}
  <form action="" className='text-white gap- '>

            
            <label htmlFor="enteryourname"className='font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>Enter Your Name</label>
            <input  id='enteryourname' name='name' value={formData.name} onChange={handleChange}  className='flex border w-full border-[#07373f] rounded-[12px] h-[48px] p-[12px] items-center gap-[8px] self-stretch ' type="text" />
                      
            <label htmlFor="email" className=' font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>Enter Your Email</label>
            <input id='email' name='email' value={formData.email} onChange={handleChange}
            className='flex border w-full border-[#07373f] rounded-[12px] h-[48px] p-[12px] items-center gap-[8px] self-stretch ' type="text" />
              <label htmlFor="aboutproject"className='font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>About The Project</label>
              <textarea className='flex w-full border border-[#07373f] gap-[8px] self-stretch p-[12px] items-start rounded-[12px] h-[127px]  '
              name="about" id="aboutproject" value={formData.about} onChange={handleChange}></textarea>
          </form>
          {/* form ends here */}

          {/* button starts here */}
            <div className='flex gap-[8px] border border-[#24A0B5] 
            rounded-[8px] flex-[1_0_0] items-center justify-center   '>
             
              <button className='flex flex-[1_0_0] font-400 font-[16px] font-[JejuMyeongjo] text-[#24A0B5]
              rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '> 
                 <Link to='/multistepform'> Back </Link></button>
                
              
               
           <button className='flex flex-[1_0_0] text-[16px] font-normal
            text-[#fff] font-[JejuMyeongjo] bg-[#24a0b5] rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '>  <Link to='/ticketready'> Get My Free Ticket </Link> </button>  
            
            </div>
            
          {/* button ends here */}

</div>
{/* multi step form ends here */}
</div>
        
    </div>
  )
}

export default AttendeeDetails