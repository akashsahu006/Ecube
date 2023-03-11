import React from 'react'
import { OurProgramData } from '../../data/OurProgramData'
import OurProgramCard from '../Cards/OurProgramCard'

const OurPrograms = () => {
  return (
    <div className='px-24 mb-22 flex flex-col justify-center'>
        <h1 className='mt-30 mb-16 text-H2'>Our Programs</h1>
        <div className='  w-full grid grid-cols-2   place-content-center gap-12'>
            {OurProgramData.map((program) => (
                <OurProgramCard title={program.title} id={program.id} status={program.status} duration={program.duration} body={program.body} src={program.src} />
            ))}
        </div>
    </div>
  )
}

export default OurPrograms