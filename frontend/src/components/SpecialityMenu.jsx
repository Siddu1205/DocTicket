import React from 'react'
import General_Physician from '../assets/General_Physician.svg'
import Gynecologist from '../assets/Gynecologist.svg'
import Dermatologist from '../assets/Dermatologist.svg'
import Pediatricians from '../assets/Pediatricians.svg'
import Neurologist from '../assets/Neurologist.svg'
import Gastroenterologist from '../assets/Gastroenterologist.svg'
import { specialityData } from '../assets/assets'
import '../Styles/SpecialityMenuStyles.css'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
  return (
    <div className='specialitycont' id='Speciality'>
      <h1 className='text'>Find by Speciality </h1>
      <p className='desc'>Simply browse through our extensive list of trusted doctors, schedule<br /> your appointmenthassle-free
      </p>
      <div className='section'>
        {specialityData.map((item, index) => (
            <Link onClick={() => scrollTo(0,0)} to={`/doctors/${item.speciality}`} key={index} className='speciality-card'>
                <img className='imgs' src={item.image} alt={item.speciality} /> 
                <p className='text2'>{item.speciality}</p>
            </Link>
        ))} 

      </div>
    </div>

  )
}

export default SpecialityMenu
