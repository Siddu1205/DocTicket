import React, { use, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Styles/NavbarStyles.css'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
  return (
    <div className='navbar'>
      <img className='logo' src={assets.admin_logo} alt="DocTicket Logo" />
      <ul className='nav-links'>
        <NavLink to="/">
            <li className='nav-link'>HOME</li>
            <hr className='nav-hr'/>
        </NavLink>
        <NavLink to="/doctors">
            <li className='nav-link'>ALL DOCTORS</li>
            <hr className='nav-hr'/>
        </NavLink>
        <NavLink to="/about">
            <li className='nav-link'>ABOUT</li>
            <hr className='nav-hr'/>
        </NavLink>
        <NavLink to="/contact">
            <li className='nav-link'>CONTACT</li>
            <hr className='nav-hr'/>
        </NavLink>
      </ul>
      <div classNAme='butcont'>
        {
            token ? <div></div> 
            :  <button onClick={() => navigate('/login')} className='but'>Create Account</button>
        }
       
      </div>
      
    </div>
  )
}

export default Navbar
