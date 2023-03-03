import React from 'react'
import OurProgramCard from '../components/Cards/OurProgramCard'

import { OurProgramData } from '../data/OurProgramData'

const Testing = () => {
  return (
    <div className='max-w-3xl'>
        <h1 className='mt-30 mb-16 text-h2'>Our Programs</h1>
        <div className=' bg-yellow-300 grid grid-cols-2 grid-rows-2 place-content-center place-items-center'>
            {OurProgramData.map((program) => (
                <OurProgramCard/>
            ))}
        </div>
    </div>
    
  )
}

export default Testing