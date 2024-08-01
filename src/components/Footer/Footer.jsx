import React from 'react'
import './FooterStyles.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        Designed by <Link to={"mailto:krishnendu2002m@gmail.com"}>Krishnendu Mondal</Link>. &copy; 2024, All right reserved.
    </div>
  )
}

export default Footer