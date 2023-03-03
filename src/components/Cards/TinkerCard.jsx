import React from 'react'
import image from "../../assets/Ourcollaboration1.png"

const TinkerCard = () => {
  return (
    <div className='  flex flex-col items-center justify-between w-50 h-66 mx-8'>
        <img src={image} alt="..." />
        <h3 className=' text-B3 text-center max-w-[70%]'>Dav Public School, New Delhi</h3>
    </div>
  )
}

export default TinkerCard