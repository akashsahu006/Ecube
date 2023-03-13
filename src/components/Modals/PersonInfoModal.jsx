import React from 'react'
import PersonModalImage from "../../assets/PersonModalImage.png"
import {IoMdCloseCircle} from "react-icons/io"

const PersonInfoModal = (props) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm grid place-items-center w-screen h-screen'>
        <div className='w-[932px] h-[500px] rounded-[8px] flex bg-white'>
            <img className='h-[500px]' src={PersonModalImage} alt="..." />
            <div className='w-full'>
                <div className='flex justify-end mr-[26px] mt-[26px]'><button onClick={props.onClickModalHandler}><IoMdCloseCircle size={34} color='#FF0000'/></button></div>
                <div className='px-[40px] w-full'>
                    <h3 className='text-H4'>{props.title}</h3>
                    <h2 className='text-b2 text-liteBlack mt-[12px]'> Coordinator</h2>
                    <p className='text-b3 mt-[20px]'>Lorem ipsum dolor sit amet. Ex nesciunt ipsa et tenetur officia ut illum reiciendis eos veniam exercitationem et atque fuga aut commodi quia cum libero voluptate.Lorem ipsum dolor sit amet. Ex nesciunt ipsa et tenetur officia ut illum reiciendis eos veniam exercitationem et atque fuga aut commodi quia cum libero voluptate.Lorem ipsum dolor sit amet. Ex nesciunt ipsa et tenetur officia ut illum reiciendis eos veniam exercitationem et atque fuga aut commodi quia cum libero voluptate.Lorem ipsum dolor sit amet. Ex nesciunt ipsa et tenetur officia ut illum.</p>
                    <div>
                        <h3 className='text-B3 text-liteBlack mt-[35px]'>Connect on:</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonInfoModal