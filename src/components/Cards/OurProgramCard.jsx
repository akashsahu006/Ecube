import React from 'react'
import ActiveButton from '../buttons/ActiveButton'

const OurProgramCard = (props) => {
  return (
    <div className=' rounded-xl  flex flex-col h-140 w-150'>
        <div>
            <img src={props.src} alt="..."/>
        </div>
        <div className='p-5 rounded-b-xl bg-white border-1 border-cardLine'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-H4'>{props.title}</h3>
                </div>
                <div>
                    <ActiveButton/>
                </div>
            </div>
            <div>
                <h3 className='text-b3 mt-1 text-liteBlack'>{props.duration}</h3>
            </div>
            <div className='max-h-7.5 mt-6 mb-7'>
                <h3 className='text-b3 text-justify'>{props.body}</h3>
            </div>
            <div className='flex justify-end items-center'>
                <h3 className='text-b1 text-primary'>Know more</h3>
            </div>
        </div>
    </div>
    
  )
}

export default OurProgramCard