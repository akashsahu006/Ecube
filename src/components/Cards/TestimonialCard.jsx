import React from 'react'
import quotesImage from "../../assets/quotes.png"
import personImage from "../../assets/PersonIcon.png"

const TestimonialCard = () => {
  return (
    <div className='w-[384px] h-[409px] p-[29px] flex flex-col border-[0.8px] rounded-[10px] border-cardLine/50 bg-white'>
        <div className='flex'>
            <img className='w-[16px] h-[14px] mr-[4px]' src={quotesImage} alt="" />
            <h3 className='text-b1-1 text-justify'>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.I was looking for a landing page UI Kit. Landify is one of.</h3>
        </div>
        <div className='flex justify-center mt-[28px] '>
            <img className='mr-[32px] rounded-full' src={personImage} alt="" />
            <div className='flex flex-col items-start justify-center'>
                <h3 className='text-b2 mb-[4px]'>Nisa</h3>
                <h3 className='text-b4 text-liteBlack'>Student</h3>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard