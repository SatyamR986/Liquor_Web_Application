import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import footer_logo from '../Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-logo">
          <img src={footer_logo} alt="" style={{ width: '100px', height: '100px' }} />
            <p>TIPSY</p>
        </div>
      
        <ul className="Footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="Footer-social-icons">
            <div className="Footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="Footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="Footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer