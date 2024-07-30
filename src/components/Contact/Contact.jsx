import React from 'react'
import './ContactStyles.css'

function Contact() {
  return (
    <>
      <form>
        <input type="text" name="name" id="name" placeholder='Name'/>
        <input type="email" name="email" id="email" placeholder='Email'/>
        <textarea type="textarea" name="text_content" rows={10} cols={10} placeholder='Comments & queries'/>
        <button type="button">Submit</button>
      </form>
    </>
  )
}

export default Contact