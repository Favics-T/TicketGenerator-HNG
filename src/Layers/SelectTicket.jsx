import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaMapPin } from "react-icons/fa";
import FormContext from '../Context/FormContext';

const SelectTicket= () => {
  // const[ticket, setTicket] =useState({
  //   type:"",
  //   quantity:1
  // })

  const {ticketList, ticket,setTicket,handleSelectTicket} = useContext(FormContext)

 


  return (
   <div classname='bg-[#041e23]'>
    <div className='flex flex-col md:w-[700px] w-[375px] border border-[#0e464f]  
    md:m-[48px] m-[64px 20px] py-[24px] md:py-[48px] px-[24px] md:p-[24px] 
    rounded-[40px] items-center md:justify-center md:gap-[32px] gap-[48px]  '>

{/* Header Starts Here */}
<div className=' flex flex-col gap-[12px] justify-end items-start
self-stretch'>
 <div>
  
 </div>
  {/* header message starts here */}
<div className='flex flex-col text-[#fff] font-[Roboto] md:flex-row gap-[12px]'>
  
  <h1 className='w-[531px] self-stretch font-[JejuMyeongjo]
  text-[24px] md:text-[32px]'>
    Ticket Selection</h1>
  <p className='text-[16px] leading-[24px] text-[fafafa]'>
    Step 1/3</p>
</div>
{/* header message ends here */}


{/* progress bar starts here */}
<div className='flex w-[287px] md:w-[604px] bg-[#0E464F] h-[4px] self-stretch rounded-[5px]'>
  <div className='bg-[#24A0B5] w-[232px] md:w-[325px]'></div>
  
</div>
{/* progress bar ends here */}
</div>
{/* Header Ends Here */}

{/* Body Start here */}
<div className='p-[24px] flex flex-col gap-[32px] md:border border-[#0e464f] justify-center item-start
rounded-[32px] bg-[#08252b]'>

    {/* section title starts here */}
    
  <div className='flex flex-col py-[16px] px-[24px] sm:justify-between md:p-[24px] 
  md:h-[220px] h-[243px] items-center gap-[8px] self-stretch rounded-[24px] border-r-2
   border-r-[#07373f] border-b-2
  border-[#07373f] border-l-2 border-l-[#07373f]
   bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0.00)_100%),rgba(10,12,17,0.10)] 
   backdrop-blur-[7px]'>

{/* Title starts here */}
<h1 className='font-RoadRage  self-stretch text-center
 text-[#fafafa] md:text-[62px] text-[40px] heading-[48px] 
  md:heading-[62px] font-normal'>
  Techember Fest "25
  </h1>
{/* Title ends here */}

{/* Paragraph starts here */}
<p className='text-center font-normal md:leading-[24px] leading-[21px] md:w-[340px] w-[239px]
 font-[Roboto] text-[#fafafa] md:text-[16px] text-[14px]'>
  Join us for an unforgettable experience at Techember! Secure Your Spot now </p>
{/* Paragraph ends here */}

{/* Location Starts here */}
<div className='flex font-Roboto flex-col md:flex-row gap-[16px] items-start text-[#fafafa]  '>
 
  <div className='flex'>
        📍 [Event Location] </div>
        <div className='md:flex hidden'>||</div>
  <div>March 15, 2025 | 7:00 PM</div>
</div>
{/* Location Ends here */}

  </div>
  {/* section title Ends here */}

  {/* Progress bar starts here */}
<div className='self-stretch h-[4px] bg-[#07373F;]'>

</div>
{/* Progress bar ends here */}


  {/* Ticket Type Starts here */}
  <div>
    <h1 
    className='text-white font-Roboto'>
      Select Ticket Type</h1>
  <div 
  className="  border-[#0E464F] max-w-screen-sm mt-7 p-5 border-2 rounded-3xl
   md:flex justify-around gap-2">
              {
              
              ticketList.map(({ type, price, access }) => (
                <button
                  key={type}
                  className={`border-[#197686] px-4 py-3 border-2 rounded-xl cursor-pointer w-full mt-3 
                    ${
                    ticket.type === type ? " border-4" : ""
                  }`}
                  onClick={() => handleSelectTicket(type)}
                >
                  <h5 className="font-bold text-white text-xl pb-2 text-start">
                    {price}
                  </h5>
                  <p className="text-gray-300 text-sm text-start">{access}</p>
                  <p className="text-gray-300 text-sm text-start">20/52</p>
                </button>
              ))}
            </div>
  </div>
  {/* Ticket Type Ends Here */}

  {/* Number of tickets starts here */}
  <div>
  <div className="">
            <label className="text-gray-300">Number of Tickets:</label>
            <select
              className="w-full mt-3 p-3 border-2 rounded-xl text-white bg-inherit outline-none"
              value={ticket.quantity}
              onChange={(e) =>
                setTicket({
                  ...ticket,
                  quantity: e.target.value,
                })
              }
            >
              {[...Array(20).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
  </div>
  {/* Number Of ticket ends here */}

  {/* buttons start here */}
   <div className='flex gap-[8px] border px-8 border-[#24A0B5] 
             rounded-[8px] flex-[1_0_0] items-center justify-center   '>
              
               <button className='flex flex-[1_0_0] font-400 font-[16px] font-[JejuMyeongjo] text-[#24A0B5]
               rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '> 
                  <Link to='/multistepform'> Cancel </Link></button>
                 
               
                
            <button 
            className='flex flex-[1_0_0] text-[16px] font-normal
             text-[#fff] font-[JejuMyeongjo] bg-[#24a0b5] rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '>  <Link to='/attendeedetails'> Next </Link> </button>  
             
             </div>
  {/* button ends here */}

</div>
{/* Body Ends here */}
    </div>
    
   </div>
  )
}

export default SelectTicket



