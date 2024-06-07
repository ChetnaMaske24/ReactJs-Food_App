import React from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from "react-router-dom";
import Home from '../pages/Home';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={logo} />
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contactUs">ContactUs</Link>
        </div>  
    </div>
  )
}

export default Navbar
