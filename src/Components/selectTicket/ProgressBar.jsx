import React from 'react'
import { useLocation } from 'react-router-dom'

const ProgressBar = () => {
  const {pathname } = useLocation();
  return (
    <div className='w-full bg-[#0E464F] flex  h-1 rounded-lg transition-all duration-300 '>
      <div className={`bg-[#24a0b5] ${pathname=== '/attendeedetails' ? 'w-3/4 ' :"" } ${pathname==='/home'?'w-1/2':''}`}>
      </div>
      {/* <div className='w-full   '>
      </div> */}
    </div>
  )
}

export default ProgressBar
