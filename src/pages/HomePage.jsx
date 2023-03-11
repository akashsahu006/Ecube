import React from 'react'
import OurPrograms from '../components/sections/OurPrograms'
import OurCollaborationSection from '../components/sections/OurCollaborationSection'
import HeroSection from '../components/sections/HeroSection'
import OurTeamSection from '../components/sections/OurTeamSection'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/sections/Footer'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <OurPrograms/>
    <OurCollaborationSection/>
    <Testimonials/>
    <OurTeamSection/>
    <Footer/>
    </>
  )
}

export default HomePage