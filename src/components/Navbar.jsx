import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="main">
    <img src={BurgerLogo} alt="" className='navbar-logo' />
    <div className='mainLink'>
    <Link to='/'>Anasayfa</Link>
    <Link to='/Menu'>Menü</Link>
    <Link to='/About'>About</Link>
    <Link to='/Contact'>Contact</Link>
    </div>
        </div>
    </div>
  )
}

export default Navbar
