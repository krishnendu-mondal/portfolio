import React from 'react'
// import './CertificateStyles.css'

function Certificate(props) {
  return (
    <div className='certificate'>
        <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Certificate