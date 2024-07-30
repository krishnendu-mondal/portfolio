import React from 'react'
import './FooterStyles.css';

function Footer(props) {
  return (
    <div className='footer'>
        {props.paragraph}
    </div>
  )
}

export default Footer