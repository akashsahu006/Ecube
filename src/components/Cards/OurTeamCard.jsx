import React, { useState } from 'react'
import {FiArrowUpRight} from "react-icons/fi"
import PersonInfoModal from '../Modals/PersonInfoModal';

const OurTeamCard = (props) => {
  const [modal, setModal] = useState(false);
  function onClickModalHandler() {
    setModal(!modal);
  } 
  return (
    <div>
      <div className=' flex items-end w-[400px] h-[450px] bg-center bg-cover bg-TeamBackground rounded-lg'>
          <div className='text-white w-full h-[106px] pl-[20px] py-[12px] bg-black/60 rounded-b-lg'> 
              <h4 className='text-H4'>{props.title}</h4>
              <div className='flex justify-end items-center'>
                <button onClick={onClickModalHandler}><h3 className='flex justify-end'>Know more</h3></button>
                <button onClick={onClickModalHandler}><FiArrowUpRight size={24}/></button>
              </div>
              
              <h3 className=''>Coordinator</h3>
          </div>
      </div>
      {modal && <PersonInfoModal title={props.title} onClickModalHandler={onClickModalHandler}/>}
    </div>
  )
}

export default OurTeamCard