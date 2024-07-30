import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { LiaBarsSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [showMenu, setShowMenu] = useState("none")
  const set_show_menu = ()=>{
    if(showMenu == "none"){
      setShowMenu("block");
    }else{
      setShowMenu("none");
    }
  }
  const scrollTo = (elementID)=>{
    const element = document.getElementById(elementID);
    element?.scrollIntoView({
      behavior: 'smooth'
    }); 
  }
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to="/"><img src="portfolio_icon.png" alt="logo"/> Portfolio</Link>
        </div>
        <div className={showMenu=="none"?"links":"links active-menu"}>
            <i onClick={set_show_menu} className='close'><LiaTimesSolid size="22px"/></i>
            <ul>
                <li><a onClick={()=>{scrollTo("projects-container")}}>Projects</a></li>
                <li><a onClick={()=>{scrollTo("achievements-container")}}>Achievements</a></li>
                <li><a onClick={()=>{scrollTo("contact-container")}}>Contact</a></li>
            </ul>
        </div>
        <div className="mobile-navigations">
            <i onClick={set_show_menu} className='bars'><LiaBarsSolid size="30px"/></i>
        </div>
    </div>
  )
}

export default Navbar