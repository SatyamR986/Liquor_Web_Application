import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'


const Hero = () => {
  return (
    <div className='Hero'>
        <div className="Hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="Hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Additions</p>
                <p>Of Quality</p>
            </div>
            <div className="Hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="Hero-right">
        </div>
    </div>
  )
}

export default Hero