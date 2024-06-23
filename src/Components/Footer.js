import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <input name='user-input' id='user-input' type="text" placeholder='Message ChatGPT' />
      <p>By messaging ChatGPT, you agree to our <a href="#">Terms</a>  and have read our <a href="#">Privacy Policy</a> .</p>
    </footer>
  )
}

export default Footer
