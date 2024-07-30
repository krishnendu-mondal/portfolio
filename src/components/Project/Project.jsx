import React from 'react'
import './ProjectStyles.css'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

function Project(props) {
  const openProject = ()=>{
    window.open(props.url).focus()
  }
  return(
    <div className="project">
      <h2>{props.projectTitle}</h2>
      <span>{props.projectAbout}</span>
      <p>{props.projectDescription}</p>
      <button onClick={openProject}>Visit project<LiaExternalLinkAltSolid className='logo'/></button>
    </div>
  )
}

export default Project