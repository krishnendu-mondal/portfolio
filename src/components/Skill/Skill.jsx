import React from 'react'
import './SkillStyles.css'

function Skill(props) {
  return (
    <div className="skill">
        <div className="head">
          <i><img  src={props.icon} alt={props.alt} height={props.height}/></i>
          <span>{props.skill}</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{width:props.progress+"%"}}> {props.progress+"%"} </div>
        </div>
    </div>
  )
}

export default Skill