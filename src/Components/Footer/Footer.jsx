import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-logo">
            <img src={footer_logo} alt="" />
            <p>TIPSY</p>
        </div>
        <div class="dropdown-center">
  <button class="btn btn-primary dropdown-toggle bg-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
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