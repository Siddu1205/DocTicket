import React from 'react'
import { assets } from '../assets/assets'
import group_profile from "../assets/group_profiles.png";
import header_img from "../assets/header_img.png";
import arrow_icon from "../assets/arrow_icon.svg";
import "../Styles/HeaderStyles.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='leftside'>
          <p className='left-text'>Book Appointment <br /> With Trusted Doctors </p>
        <div className='left-content'>
          <img className='img1' src={group_profile} alt="Group Profile" />
          <p className='left-desc'>Simply browse through our extensive list of trusted doctors,<br /> 
            schedule your appointment hassle-free.</p>
        </div>
        <a href="#Speciality" className='header-btn'>
        Book appointment <img src={arrow_icon} alt="Arrow Icon" />
        </a>
      </div>
      <div>
        <img className='img2' src={header_img} alt="Header" />
      </div>

    </div>
  )
}

export default Header
