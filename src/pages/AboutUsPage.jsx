import React from 'react'
import ReactPlayer from 'react-player'
import OurTeamSection from '../components/sections/OurTeamSection'
import Footer from '../components/sections/Footer'
import WhyChooseUs from '../components/sections/WhyChooseUs'

const AboutUsPage = () => {
  return (
    <div>
      <div id="Section-1" className=' mt[200px] mt-[132px] px-[96px] flex' >
        <ReactPlayer width={640} height={344} url='https://www.youtube.com/watch?v=szXr4GHPhQU' controls={true}/>
        <div className='px-[28px] w-[578px]'>
          <h3 className='text-H2'>About us</h3>
          <p className='text-b3 text-justify mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris. Ut tristique elit in diam mollis posuere. Sed commodo laoreet enim eu vestibulum. Nam sagittis diam nec tellus blandit, vel rutrum est volutpat. Donec lacinia sit amet eros vitae condimentum. Mauris ultricies massa at tincidunt pulvinar.Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris.  </p>
        </div>
      </div>
      <div id="Section-2" className='mt-[64px] px-[96px]'>
        <h3 className='text-H3'>Who We Are</h3>
        <p className='text-b3 mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris. Ut tristique elit in diam mollis posuere. Sed commodo laoreet enim eu vestibulum. Nam sagittis diam nec tellus blandit, vel rutrum est volutpat. Donec lacinia sit amet eros vitae condimentum. Mauris ultricies massa at tincidunt pulvinar.Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris. Ut tristique elit in diam mollis posuere. Sed commodo laoreet enim eu vestibulum. Nam sagittis diam nec tellus blandit, vel rutrum est volutpat. Donec lacinia sit amet eros vitae condimentum. Mauris ultricies massa at tincidunt pulvinar.Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris. Ut tristique elit in diam mollis posuere. Sed commodo laoreet enim eu vestibulum. Nam sagittis diam nec tellus blandit, vel rutrum est volutpat. Donec lacinia sit amet eros vitae condimentum. Mauris ultricies massa at tincidunt pulvinar.Vivamus tellus magna, finibus viverra lacinia elementum, mollis eu mauris.  </p>
      </div>
      <WhyChooseUs/>
      <OurTeamSection/>
      <Footer/>
    </div>
  )
}

export default AboutUsPage