import React, { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import TestimonialCarousel from '../Carousel/TestimonialCarousel';

const Testimonials = () => {
    const [firstButtonState, setFirstButtonState] = useState(true);
    const [secondButtonState, setSecondButtonState] = useState(false);

    function onClickFirstButtonHandler() {
      if(!firstButtonState){
        setFirstButtonState(!firstButtonState);
        setSecondButtonState(!secondButtonState);
      }
    }

    function onClickSecondButtonHandler() {
      if(!secondButtonState){
        setFirstButtonState(!firstButtonState);
        setSecondButtonState(!secondButtonState);
      }
    }
    

  return (
    <div className='mt-[88px]'>
        <div className='px-[122.5px] flex justify-between items-center'>
            <h3 className='text-H2 '>Testimonials</h3>
            <div>
                <PrimaryButton onClickButtonHandler={onClickFirstButtonHandler} text={"Students"} buttonState={firstButtonState}/>
                <PrimaryButton onClickButtonHandler={onClickSecondButtonHandler} text={"Teachers"} buttonState={secondButtonState}/>
            </div>
        </div>
        <div className='w-full px-[6rem] py-[41px] mt-[23px] bg-footer'>
          <TestimonialCarousel firstButtonState={firstButtonState}/>
        </div>
    </div>
  )
}

export default Testimonials