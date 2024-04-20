import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'

const Navbar = () => {

    const [menu,setMenu] = useState("Home");
    const {getTotalCartItems} = useContext(HomeContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>TIPSY</p>
        </div>
        <ul className="nav-menu">
            <li onClick= {() =>{setMenu("Home")}} ><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Whisky")}} ><Link style={{textDecoration: 'none'}} to='/Whisky'>Whisky</Link>{menu==="Whisky" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Wine")}} ><Link style={{textDecoration: 'none'}} to='/Wine'>Wine</Link> {menu==="Wine" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Beer")}} ><Link style={{textDecoration: 'none'}} to='/Beer'>Beer</Link>{menu==="Beer" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Gin")}} ><Link style={{textDecoration: 'none'}} to='/Gin'>Gin</Link>{menu==="Gin" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Vodka")}} ><Link style={{textDecoration: 'none'}} to='/Vodka'>Vodka</Link>{menu==="Vodka" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Rum")}} ><Link style={{textDecoration: 'none'}} to='/Rum'>Rum</Link>{menu==="Rum" ? <hr/> : <></>}</li>
            <li onClick= {() =>{setMenu("Tequila")}} ><Link style={{textDecoration: 'none'}} to='/Tequila'>Tequila</Link>{menu==="Tequila" ? <hr/> : <></>}</li>
            
        </ul>
        <div className="nav-login-cart">
            <Link to='/Login'><button>Login</button></Link>
            <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
    
  )
}

export default Navbar