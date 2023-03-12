import React from 'react'
import {BsCheckLg} from 'react-icons/bs'

const WhyChooseUs = () => {
  return (
    <div className='pt-[128px] bg-WhyChooseUsBackground w-screen h-[650px] mt-[90px]'>
        <h3 className='w-[547px] h-[68px] text-H2 grid place-items-center text-white bg-liteBlack'>Why Choose us ?</h3>    
        <div className='mt-[58px] px-[100px] space-y-6'>
            <div className='bg-footer w-[572px] h-[56px] rounded-[30px] flex justify-center items-center'>
               <BsCheckLg size={21} color="#49C958"/>
               <p className='text-b2 ml-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing eli.n</p> 
            </div>
            <div className='bg-footer w-[572px] h-[56px] rounded-[30px] flex justify-center items-center'>
               <BsCheckLg size={21} color="#49C958"/>
               <p className='text-b2 ml-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing eli.n</p> 
            </div>
            <div className='bg-footer w-[572px] h-[56px] rounded-[30px] flex justify-center items-center'>
               <BsCheckLg size={21} color="#49C958"/>
               <p className='text-b2 ml-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing eli.n</p> 
            </div>
            <div className='bg-footer w-[572px] h-[56px] rounded-[30px] flex justify-center items-center'>
               <BsCheckLg size={21} color="#49C958"/>
               <p className='text-b2 ml-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing eli.n</p> 
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs