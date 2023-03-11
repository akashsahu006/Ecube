import React from 'react'
import ContactUsForm from '../forms/ContactUsForm'
import {GoLocation} from 'react-icons/go'
import {MdOutlineMailOutline, MdOutlineCall} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {CiFacebook, CiLinkedin} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='mt-[100px] w-full px-[96px] py-[48px] bg-footer h-[719px]'>
        <h1 className=' text-H2 flex justify-center items-center'>Contact Us</h1>
        <div className='mt-[64px] flex justify-between'>
            <div className='w-[332px]'>
                <h4 className='text-H4 flex justify-center'>ECUBE</h4>
                <h4 className='text-b3 text-justify mt-[40px]'>High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work.</h4>
            </div>
            <div>
                <ContactUsForm/>
            </div>
            <div >
                <div className=' h-[300px] w-[268px] border-l-[0.4px] border-b-[0.4px] border-liteBlack'>
                    <h2 className='text-B1 flex justify-center '>Contact Us</h2>
                    <div className='px-[34px] mt-[22px] '>
                        <div className='flex w-[240px] items-start '>
                            <GoLocation size={21}/>
                            <h4 className='ml-[22px] text-b3 w-[200px]'>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815 </h4>
                        </div>
                        <div className='mt-[16px] flex items-center '>
                            <MdOutlineMailOutline size={32}/>
                            <h4 className='ml-[15px] text-b3 w-[200px]'>support@figma.com </h4>
                        </div>
                        <div className='mt-[16px] flex items-center '>
                            <MdOutlineCall size={28}/>
                            <h4 className='ml-[15px] text-b3 w-[200px]'>+1 800 854-36-80 </h4>
                        </div>
                        <div className='mt-[16px] flex items-center '>
                            <BsWhatsapp size={26}/>
                            <h4 className='ml-[15px] text-b3 w-[200px]'>+1 800 854-36-80 </h4>
                        </div>
                    </div>
                </div>
                <div className='border-l-[0.4px] pl-[30px] pt-[20px] border-liteBlack'>
                    <h2 className='text-B1'>Follow us on</h2>
                    <div className='flex mt-[16px] space-x-4'>
                        <AiOutlineInstagram size={24}/>
                        <CiFacebook size={24}/>
                        <CiLinkedin size={24}/>
                        <RiTelegramLine size={24}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer