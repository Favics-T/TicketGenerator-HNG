import React from 'react'

const TicketReady = () => {
  return (
    <div>
        
      <div className='flex flex-col items-center gap-[80px] h-auto text-white bg-[#041e23] py-[112px] px-[0px] '>
   {/* Ticket Body starts here */}
    <div className='bg-[ #041E23]  border w-[700px] p-[48px] flex flex-col
    justify-center items-center border-[#0E464F] gap-[32px] rounded-[24px] '>
 


{/* Header starts here */}
<div>
    <div className='flex gap-96 self-stretch   items-center '>
       
    <h1 className='text-[#fff] font-[JejuMyeongjo] text-[32px] font-normal '>Ready</h1>
    <p 
className='text-[#fafafa] font-[Roboto] text-[16px] font-normal  '>Step 3/3</p>
    </div>

    {/* Progress bar starts here */}
    <div className='rounded-[5px] self-stretch
    items-center  
     flex h-[4px] pr-[372px] bg-[#0E464F] '>
          <div className='rounded-[5px] bg-[#24A0B5] w-[232px] self-stretch'></div>
        <div></div>
    </div>
    {/* Progress bar ends here */}

</div>
{/* Header ends here */}

{/* Booked Ticket Mesage starts here */}
<div>
    <h1 className='text-[#fff] self-stretch font-normal text-[32px] text-center font-[Alatsi]  '>Your Ticket is Booked Here</h1>
    <p className='font-[Roboto] text-[#fafafa]
    text-center text-[16px] font-normal   '>
           You can download or check your email for a copy</p>
</div>
{/* Booked Ticket Messge ends here */}

{/* Ticket Image Starts Here  */}
<div className='w-[562px] h-[199.849px] fill-[#D9D9D9] flex shrink-0'>
<div className='flex  shrink-0 bg-[#0E464F]  border w-[467.562px] h-[195.004px] rounded-[16.957px_4.845px_4.845px_16.957px]'>
    
</div>
</div>
{/* Ticket Image Ends here */} 

{/* buttons starts here */}

<div className=' items-center gap-[32] justify-center 
p-[48]  rounded-[24px] self-stretch flex h-[48px] 
border border-[#0E464F] bg-[#041E23] '>


<button
className='text-[#24a0b5] text-[16px] font-normal  font-[JejuMyeongjo] flex rounded-[8px] py-[12px] px-[24px] border-[#24a0b5] gap-[8px] border  flex-[1_0_0] justify-center items-center   '
>Book Another Ticket</button>


<button className='flex py-[12px] px-[24px] justify-center items-center gap-[8px] flex-[1_0_0] 
rounded-[8px] bg-[#24a0b5] text-[#FAFAFA] font-[JejuMyeongjo] text-[16px] font-normal '>Download Ticket</button>

</div>
{/* buttons ends here */}
   
   
    </div>
    {/* Ticket Body Ends Here */}

      </div>
    </div>
  )
}

export default TicketReady
