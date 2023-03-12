import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-primary h-68 px-96 flex flex-row items-center justify-between'>
        <div>ECube</div>
        <div className='flex text-b3 flex-row text-offwhite space-x-48px'>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/AboutUs"> <h3>About us</h3></Link>
            <h3>Programs</h3>
            <h3>News</h3>
            <h3>Gallery</h3>
            <h3>Testimonials</h3>
            <h3>Contact</h3>


        </div>
    </div>
    
  )
}

export default NavBar