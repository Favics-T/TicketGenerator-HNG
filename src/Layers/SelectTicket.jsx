import React from 'react'
import { Link } from 'react-router-dom';

const SelectTicket= () => {
  return (
    <div className='flex flex-col  items-center justify-center  border-[#0e464f] bg-[#041e23]  '>
       <div className=' px-[48px] border-[#0E464F] py-[20px] my-10  w-[700px] h- gap-[32px]  rounded-[40px] border-[1px] bg-[#041e23] text-[#fafafa]  '> 

{/* header starts here */}
<div className=' place-content-between grid grid-cols-2  border-b-[5px] py-2 border-b-[#24A0B5]'>
  <h1 className='text-[#fff] text-[32px] font-[Jejumyeongjo]  '>Ticket Selection </h1>
  <p className='ml-52 text-[16px] mt-4'>Step 1/3</p>
</div>
{/* Header ends here */}

{/* form content starts here */}
<div className='self-stretch p-[24px] mx-[48px] mt-[32px] my-[48px] rounded-[32px] border-[1px] border-[#0e4647] item-start my-[24px] mx-[24px]  flex flex-col justify-center gap-[32px] align-[flex-startk]  '>
{/* Section Title strats here */}
<div className='text-center border-[1px] flex flex-col justify-center  p-[24px] border-[#0e464f] rounded-[32px] bg-[#08252b] '>

<div>

  
  <h1 className='text-center font-"Road Rage text-[62px] font-normal font-"road rage"  '>Techember FEST "25</h1>
  <p>Join us for an unforgettable experience at Techember! Secure your spots now</p>
</div>
</div>
{/* Section title ends here */}


{/* Progress starts here */}
<div className='h-[4px] self-strech bg-[#07373F] '></div>
{/* Progress Ends here */}


{/* Ticket Type Starts here */}
<div>

  <h1 className='text-[16px] self-stretch  '>Select Ticket Type:</h1>


  <div className='p-[16px]  bg-[#052228] rounded-[24px]
 border-[#07373f] border-[1px] w-full justify-center items-center gap-[16px] self-stretch '>
  
  {/* Regular Starts here */}
   <div className='flex bg-[#197686] w-[242px]  gap-[8px] border border-[#197686] rounded-[12px]  items-start p-[8px] '>
{/* left div */}
<div >
  <h1>REGULAR ACCESS</h1>
  <p>20 left!</p>
</div>

{/* right div */}
<div className=' border-[1px] border-[#2ba4b9] rounded-[12px] bg-[#0e464f] flex flex-col shrink items-end gap-[10px] justify-center w-[80px] p-[8px]  '>
  Free
  </div>
  </div>
  {/* Regular ends here */}

{/* Vip Starts Here */}
  <div className='rounded-[12px] w-[242px] border-[1px] border-[#073737]
   flex p-[8px] items-start gap-[8px] '>
  
  {/* vip-left div */}

<div className='flex flex-cols justify-center items-start gap-[4px] '>
 
<div>
<h1>VIP ACCESS</h1>
<p>20 slots left!</p>
</div>
 
</div>

{/* vip right div */}
<div>
  <h1>50$</h1>
</div>
<div>

</div>

  </div>
  {/* Vip ends here */}

  {/* VVIP starts here */}
  <div className='border rounded-[12px] border-[#07373f] flex w-[242px] p-[8px] items-start gap-[8px]'>

    {/* left div */}
    <div className=' '>
      <h1>VVIP ACCESS</h1>
      <p>20 left!</p>
    </div>

    {/* right div */}
    <div>
      <p>$150</p>
    </div>
  </div>
{/* VVIP ends here */}
  </div>

{/* Number of Tickets starts here */}

<div>
  <h1 className='w-full h-auto'>Number Of Tickets</h1>
  <input className='flex w-full p-[12px] items-center gap-[8px] self-stretch border rounded-[12px] border-[#07373f] ' type="number" value='1' />
</div>
{/* Number Of Ticket Ends Here */}

</div>

{/* Ticket Type Ends Here */}

{/* Buttons starts here */}

<div className='flex h-[48px] self-stretch p-[4px] 
 justify-center items-center gap-[32px] bg-[#041e23] border border-[#0e464f] rounded-[24px]  '>

{/* cancel */}
<button className='flex-1 basis-0  flex py-[12px] px-[24px] rounded-[8px] border-[#24a0b5] border  justify-center items-center gap-[8px] '>
  Cancel
</button>



<button className='flex-1  basis-0 py-[12px] px-[24px] justify-center 
items-center gap-[8px] border-[#0e464f] border bg-[#24A0B5] rounded-[40px]  '>
 <Link to='/attendeedetails'>Next</Link>  
</button>


{/* next */}

</div>

{/* Button Ends here */}

</div>
{/* form content ends here */}

       </div>
    </div>
  )
}

export default SelectTicket



{/* may it be enya */}
