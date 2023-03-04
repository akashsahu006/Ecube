import React from 'react'
import TinkerCard from '../Cards/TinkerCard'
import Marquee from 'react-fast-marquee'

import { OurCollaborationData } from '../../data/OurCollaborationData'

const Tinker = () => {
  return (
    <div className='h-96 bg-footer flex'>
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
            {OurCollaborationData.map((school) => (
              <TinkerCard id={school.id} src={school.src} title={school.title}/>
            ))}
        </Marquee>
    </div>
  )
}

export default Tinker