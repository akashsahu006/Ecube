import React from 'react'
import SendButton from '../buttons/SendButton'

const ContactUsForm = () => {
  return (
    <div>
        <h1 className='text-H6 flex justify-center'>Leave us a message</h1>
        <form className='w-[332px]'  action="">
            
            <input className='mb-[16px] mt-[32px] w-full h-[40px] rounded-[5px] shadow-sm py-[10px] px-[16px] placeholder:text-b4 placeholder:text-liteBlack ' type="text" placeholder='Your name'/>
            <input className='mb-[16px] w-full h-[40px] rounded-[5px] shadow-sm py-[10px] px-[16px] placeholder:text-b4 placeholder:text-liteBlack ' type="text" placeholder='Email Address/Mobile no.'/>
            <input className=' mb-[16px] w-full h-[150px] rounded-[5px] shadow-sm py-[10px] px-[16px] placeholder:-translate-y-12 placeholder:text placeholder:text-b4 placeholder:text-liteBlack ' type="text" placeholder='Your message'/>
            <SendButton/>
        </form>
    </div>
  )
}

export default ContactUsForm