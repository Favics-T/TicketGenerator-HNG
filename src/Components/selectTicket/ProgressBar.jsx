import React from 'react'
import { useLocation } from 'react-router-dom'

const ProgressBar = () => {
  const {pathname } = useLocation();
  return (
    <div className='w-full bg-[#0E464F] p-2  m-1'>
      <div className={`bg-[#24a0b5] ${pathname=== '/attendeedetails' ? 'w-3/4 p-1':"w-1/2"}`}>
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProgressBar
