import React from 'react'
import appointmentimg from '../assets/appointment_img.png'
import '../Styles/BannerStyles.css'

const Banner = () => {
  return (
    <div className='bannersec'>
     <div className="contentSec">
  <h1 className="bannerTitle">
    Book Appointment <br />
    <span className="noWrap">With 100+ Trusted Doctors</span>
  </h1>

  <button className="btn4">Create account</button>
</div>

      <div className='imgdiv'> 
        <img className='imgapp' src={appointmentimg} alt="banner" />
      </div>
    </div>
  )
}

export default Banner
