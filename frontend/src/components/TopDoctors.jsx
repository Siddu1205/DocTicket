import React, { useContext } from 'react'
import '../Styles/TopDoctorsStyles.css'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
  return (
    <div className='top-doctors'>
      <h1 className='text'>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className='doctorslist'>
        {doctors.slice(0, 10).map((item,index)=> (
            <div onClick={() => navigate(`./appointment/${item._id}`)} key={index} className='doctoritems'>
                <img className='imgs2' src={item.image} alt={item.name} />
                <div className='info'>
                    <div>
                        <p className="available">● Available</p>
                    </div>
                       <p className='namedoc'>{item.name}</p>
                       <p>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={() => {navigate('/doctors'); window.scrollTo(0, 0)}} className='btn3'>more</button>
    </div>
  )
}
export default TopDoctors