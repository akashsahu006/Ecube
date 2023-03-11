import React from 'react'

const PrimaryButton = (props) => {
  function active(props){
    const isActive = props.buttonState;
    if(isActive){
      return (
        <button onClick={props.onClickButtonHandler} className=' bg-button/80 px-[28px] py-[8px] h-12 rounded-[10px] mx-5'>
            <h3 className='text-h5 text-white'>{props.text}</h3>
        </button>
      )
    }
    else{
      return (
        <button onClick={props.onClickButtonHandler} className=' bg-inactive px-[28px] py-[8px] h-12 rounded-[10px] mx-5'>
            <h3 className='text-h5 text-white'>{props.text}</h3>
        </button>
      )
    }
  }

  return (
    
    active(props)
  )
}

export default PrimaryButton