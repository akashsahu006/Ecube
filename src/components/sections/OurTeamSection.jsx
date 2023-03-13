import React from 'react'
import OurTeamCard from '../Cards/OurTeamCard'

const OurTeamSection = () => {
  return (
    <div className=' mt-[5.5rem]  w-full flex flex-col'>
        <div className='px-[96px]'>
            <h1 className='text-H2'>Our Team</h1>
        </div>
        <div className='w-full px-[96px] bg-footer py-[48px] mt-[3.75rem] flex justify-between'>
            <OurTeamCard title={"Priya Sharma"}/>
            <OurTeamCard title={"Neha Sharma"}/>
            <OurTeamCard title={"Ananya Pandey"}/>
        </div>
    </div>
    
    


  )
}

export default OurTeamSection