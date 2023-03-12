import React from 'react'
import AboutUsButton from '../buttons/AboutUsButton'
import ContactUsButton from '../buttons/ContactUsButton'
import StatsCard from '../Cards/StatsCard'

import image from "../../assets/hero1.png";

const HeroSection = () => {
  return (
    <div className='w-full grid grid-cols-4 grid-row-1'>
        <div className='flex flex-col items-center justify-center my-[112px] col-start-1 col-end-5 row-start-1 z-10'>
          <div>
              <h1 className='text-H1  text-white'>EDUCATING. EMPOWERING. ENCOURAGING</h1>
              <h3 className='text-h3 text-white flex justify-center mt-4'>The Future Minds</h3>
              <div className='flex justify-center mt-[60px] mb-[108px]'>
                <AboutUsButton/>
                <ContactUsButton/>
              </div>
              <div className='flex justify-center '>
                <StatsCard number={"50+"} title={"No. of Schools collaborated"}/>
                <StatsCard number={"50+"} title={"Activities"}/>
                <StatsCard number={"50+"} title={"Workshops"}/>
              </div>
          </div>
        </div>
        <div className='  col-start-1 col-end-5 row-start-1'>
            <img src={image} className="w-full"  alt="" />
        </div>
    </div>
  )
}

export default HeroSection