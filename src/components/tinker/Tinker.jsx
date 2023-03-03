import React from 'react'
import TinkerCard from '../Cards/TinkerCard'
import Marquee from 'react-fast-marquee'

const Tinker = () => {
  return (
    <div className='h-96 bg-footer flex items-center '>
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
            <TinkerCard/>
            <TinkerCard/>
            <TinkerCard/>
            <TinkerCard/>
            <TinkerCard/>
        </Marquee>
    </div>
  )
}

export default Tinker