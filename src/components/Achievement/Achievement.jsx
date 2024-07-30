import React from 'react'
import './AchievementStyles.css'
import { GiLaurelsTrophy } from "react-icons/gi";

function Achievement(props) {
  return (
    <div className='achievement'>
      <h2><GiLaurelsTrophy className='icon'/>{props.title}</h2>
      <p>{props.about}</p>
    </div>
  )
}

export default Achievement