import React from 'react'

const TinkerCard = (props) => {
  return (
    <div className='  flex flex-col items-center justify-between w-50 h-66 mx-8'>
        <div className='w-50 h-50 bg-white border-1 border-cardLine  rounded flex justify-center items-center'>
          <img src={props.src} alt="..." />
        </div>
        <h3 className=' text-B3 text-center max-w-[80%]'>{props.title}</h3>
    </div>
  )
}

export default TinkerCard