import React from 'react'

const SubHeader = ({title, step}) => {
  return (
    <div className='w-full'>
      <div className='flex px-8 justify-between items-center  flex-col text-[#fff] font-[Roboto]  md:flex-row w-full  sm:flex-row    '>
        <h1 className='font-[JejuMyeongjo] self-stretch text-[24px] md:text-[32px]'>{title}</h1>
        <p className='text-[16px] leading-[24px] text-[fafafa]'>{step}</p>
      </div>
    </div>
  )
}

export default SubHeader
