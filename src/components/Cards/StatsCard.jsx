import React from 'react'

const StatsCard = (props) => {
  return (
    <div className=' mx-[14px] border-1 border-cardLine  rounded-[10px] flex justify-center items-center p-[22px] bg-transparent min-w-[280px] max-h-[100px]'>
        <h3 className='text-H3 mr-[28px] text-white'>{props.number}</h3>
        <h3 className='text-b1 text-white max-w-[144px]'>{props.title}</h3>
    </div>
  )
}

export default StatsCard