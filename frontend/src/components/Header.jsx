import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        <p>
          Book Appointment <br /> with Trusted Doctors  
        </p>
      </div>
      <div>
        <img src={assets.group_profile}/>
        <p>Simply browse through our extensive list of trusted doctors,<br /> 
        schedule your appointment hassle-free.</p>
      </div>
      <a href="">
        Book appointment
      </a>
    </div>
  )
}

export default Header
