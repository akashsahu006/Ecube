import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-primary h-68 px-96 flex flex-row items-center justify-between'>
        <div>ECube</div>
        <div className='flex flex-row text-offwhite space-x-48px'>
            <div>Home</div>
            <div>About us</div>
            <div>Programs</div>
            <div>News</div>
            <div>Gallery</div>
            <div>Testimonials</div>
            <div>Contact</div>


        </div>
    </div>
    
  )
}

export default NavBar