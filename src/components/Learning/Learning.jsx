import React from 'react'
import './LearningStyles.css'

function Learning(props) {
  return (
    <div className='learning'>
        <i><img  src={props.icon} alt={props.alt} height={props.height}/></i>
        <span>{props.skill}</span>
    </div>
  )
}

export default Learning