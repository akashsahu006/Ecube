import React from 'react'
import {FiArrowUpRight} from "react-icons/fi"

const OurTeamCard = () => {
  return (
    <div className=' flex items-end w-[400px] h-[450px] bg-center bg-cover bg-TeamBackground rounded-lg'>
        <div className='text-white w-full h-[106px] pl-[20px] py-[12px] bg-black/60 rounded-b-lg'> 
            <h4 className='text-H4'>Priya Sharma</h4>
            <div className='flex justify-end items-center'>
              <h3 className='flex justify-end'>Know more</h3>
              <FiArrowUpRight size={24}/>
            </div>
            
            <h3 className=''>Coordinator</h3>
        </div>
    </div>
  )
}

export default OurTeamCard