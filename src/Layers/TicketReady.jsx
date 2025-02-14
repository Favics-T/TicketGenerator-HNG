import React, { useContext,useRef } from 'react'
import Frame from '../assets/Image/ready_bg.png';
import { Link, useNavigate } from 'react-router-dom';
import FormContext from '../Context/FormContext'
import barCode from '../assets/Image/qr-code.png'
import html2canvas from 'html2canvas';

const TicketReady = () => {

  const{formData} = useContext(FormContext);
  const ticketRef = useRef(null);
  const navigate = useNavigate();

  const handleTicketDownload = () => {
    if (ticketRef.current && imagesLoaded) {
      html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `${formData.fullName}_ticket.png`;
        link.click();
      });
    }
  };
  

  return (
    <div className='flex justify-center text-white'>
      <div classname='bg-[#041e23] flex justify-center items-center '>
    <div className='flex flex-col   md:w-[700px] w-[375px] border border-[#0e464f]  
    md:m-[48px] m-[64px 20px] py-[24px] md:py-[48px] px-[24px] md:p-[24px] rounded-[40px] items-center md:justify-center md:gap-[32px] gap-[48px]  '>

{/* Header Starts Here */}
<div className=' flex flex-col gap-[12px] justify-end items-start
self-stretch'>
 
  {/* header message starts here */}
<div className='flex flex-col text-[#fff] font-[Roboto] md:flex-row gap-[12px]'>
  
  <h1 className='w-[531px] self-stretch font-[JejuMyeongjo]
  text-[24px] md:text-[32px]'>Ready</h1>
  <p className='text-[16px] leading-[24px] text-[fafafa]'>Step 1/3</p>

  
</div>
{/* header message ends here */}


{/* progress bar starts here */}
<div className='flex w-[280px] md:w-[604px] bg-[#0E464F] h-[4px] self-stretch rounded-[5px]'>
  <div className='bg-[#24A0B5] w-1/3 md:w-1/3'></div>
  <div></div>
</div>
{/* progress bar ends here */}
</div>
{/* Header Ends Here */}

{/* Body Start here */}
<div className='p-[24px]  grid place-items-center gap-[32px] '>

   {/* Your Ticket is Booked & co starts here  */}
   <div className='text-[#fafafa] font-Inter flex flex-col  text-center justify-center items-center'>
    <h1 className='md:text-[40px] text-[24px] font-Inter'>Your Ticket is Booked!</h1>
    <p className=''>Check Your email for a copy or you can <span className='font-extrabold'>download</span> </p>
   </div>
   {/* Your Ticket is Booked & co ends here  */}

{/* Ticket Frame Starts Here */}
<div className='relative w-full' ref={ticketRef}>
<div className='' >
<img src={Frame} alt="Frame" />
</div>
{/* Frame div ends here */}

<div className='mt-2'>
 
{/* Text div starts here */}
<div className='border md:h-[450px] h-[440px] md:w-[280px] w-[250px] font-Roboto absolute bottom-[118px] md:bottom-[140px] md:left-[2%] left-[5%]  p-[40px] rounded-[24px] border-[#0e464f] '>
{/* title and location starts here */}
    <div className='md:-mt-10 -mt-8'>
      
    <div className='text-center'>
    <h1 className='md:text-[32px]  text-center text-[20px] text-[#fafafa] font-RoadRage '>TECHEMBER FEST "25</h1>
    <p>📍 04 Rumens road, Ikoyi, Lagos</p>
    <p>📆 March 15, 2025 | 7:00 PM</p>
    </div>
{/* title and location ends here */}
<div
className='px-8 flex justify-center py-1  md:h-[115px] h-[90px] border-[#19cae9] bg-[#198699]  border-4 rounded-2xl  ' >
<img src={formData.avatar} alt="Avatar" crossOrigin="anonymous" 
 className=' rounded-lg md:h-[100px] h-[70px]'/>
</div>

<div className='bg-[#0a4149] md:h-auto h-[200px] gap-2 text-white text-[10px] rounded-[24px] px-4 mt-4 py-4 flex flex-col'>
{/* User Details Start here name-ticket type */}
<div className='border-b border-[#145d68] object-contain flex flex-col gap-2 '>
  {/* name and email starts here */}
  <div className='flex gap-1'>

{/*name starts here  */}
    <div className='w-1/2'>
      <p className='text-gray-500'>Enter Your Name</p>
      <p>{formData.name}</p>
    </div>
    {/* name div ends here */}

    {/* email div starts here */}
    <div className='w-1/2 '>
      <p className='text-gray-500 '>Enter Your Email</p>
      <p className='break-all'>{formData.email}</p>
          </div>
    {/* email div ends here */}
      </div>
  {/* name and email ends here */}

  {/* ticket type start here */}
  <div className='flex border-t px-1 border-[#145d68]'>
    <div className='w-1/2 border-r  border-[#145d68]'>
      <p className='text-gray-500'>Ticket Type</p>
      <p>VIP</p>
          </div>

    <div className='flex-col flex gap-1 px-1'>
      <p className='text-gray-500 '>Ticket Number</p>
      <p>1</p>
    </div>
  </div>
  {/* ticket type ends here */}
</div>
{/* User Details ends here  name-ticket type*/}

{/* Text area starts here */}
<div>
  <p>Specail needs</p>
  <p>{formData.about}</p>
</div>
{/* Text area ends here */}
</div>

    </div>
   

</div>
{/* Text Div ends Here */}

</div>
<div className='absolute bottom-6 left-8'> <img src={barCode} alt="" /> </div>





</div>
{/* frame div starts here */}


{/* Ticket Frame Ends Here */}

   

  {/* buttons start here */}
   <div className='flex gap-[8px] rounded-[8px]  items-center    '>
              
               <button className='flex  font-400 font-[16px] font-[JejuMyeongjo] text-[#24A0B5]
               rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '
                onClick={() => navigate("/")}> 
                  
                   Book Another Ticket </button>
                            
                
            <button 
            className='flex cursor-pointer flex-[1_0_0] text-[16px] font-normal
             text-[#fff] font-[JejuMyeongjo] bg-[#24a0b5] rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5]'
             onClick={handleTicketDownload}>  Download Ticket  </button>  
             
             </div>
  {/* button ends here */}

</div>
{/* Body Ends here */}
    </div>
    
   </div>
  




    </div>
  )
}

export default TicketReady
