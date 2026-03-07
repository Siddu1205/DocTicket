import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import General_Physician from '../assets/General_Physician.svg'
import Gynecologist from '../assets/Gynecologist.svg'
import Dermatologist from '../assets/Dermatologist.svg'
import Pediatricians from '../assets/Pediatricians.svg'
import Neurologist from '../assets/Neurologist.svg'
import Gastroenterologist from '../assets/Gastroenterologist.svg'
import doc1 from '../assets/doc1.png'
import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'
import doc4 from '../assets/doc4.png'
import doc5 from '../assets/doc5.png'
import doc6 from '../assets/doc6.png'
import doc7 from '../assets/doc7.png'
import doc8 from '../assets/doc8.png'
import doc9 from '../assets/doc9.png'
import doc10 from '../assets/doc10.png'
import doc11 from '../assets/doc11.png'
import doc12 from '../assets/doc12.png'
import doc13 from '../assets/doc13.png'
import doc14 from '../assets/doc14.png'
import doc15 from '../assets/doc15.png'

export const assets = {
    add_icon,

    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_Physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    }
];

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Experienced general physician dedicated to providing quality healthcare.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Sarah Wilson',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '6 Years',
    about: 'Specialist in women’s health, pregnancy and reproductive care.',
    fees: 60,
    address: {
      line1: '21 Park Street',
      line2: 'New York, USA'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Michael Brown',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '5 Years',
    about: 'Treats skin conditions including acne, eczema and allergies.',
    fees: 55,
    address: {
      line1: '44 Baker Street',
      line2: 'London, UK'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Emily Davis',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD Pediatrics',
    experience: '7 Years',
    about: 'Provides compassionate healthcare services for children.',
    fees: 65,
    address: {
      line1: '56 Lake View',
      line2: 'Chicago, USA'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Daniel Lee',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, DM Neurology',
    experience: '8 Years',
    about: 'Expert in diagnosing and treating neurological disorders.',
    fees: 80,
    address: {
      line1: '78 Hill Road',
      line2: 'Toronto, Canada'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Olivia Martinez',
    image: doc6,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM Gastro',
    experience: '9 Years',
    about: 'Specialist in digestive system diseases and treatments.',
    fees: 75,
    address: {
      line1: '89 River Street',
      line2: 'Madrid, Spain'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. James Anderson',
    image: doc7,
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '6 Years',
    about: 'Focused on skin care treatments and cosmetic dermatology.',
    fees: 58,
    address: {
      line1: '32 Sunset Blvd',
      line2: 'Los Angeles, USA'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Sophia Clark',
    image: doc8,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'General physician with experience in family medicine.',
    fees: 52,
    address: {
      line1: '12 Oxford Street',
      line2: 'London, UK'
    }
  },
  {
  _id: 'doc9',
  name: 'Dr. Ethan Walker',
  image: doc9,
  speciality: 'Pediatricians',
  degree: 'MBBS, MD Pediatrics',
  experience: '6 Years',
  about: 'Experienced pediatrician focused on providing comprehensive healthcare for children.',
  fees: 60,
  address: {
    line1: '45 Green Street',
    line2: 'Boston, USA'
  }
},
{
  _id: 'doc10',
  name: 'Dr. Isabella Moore',
  image: doc10,
  speciality: 'Gynecologist',
  degree: 'MBBS, MD',
  experience: '7 Years',
  about: 'Specializes in women’s health, prenatal care, and reproductive medicine.',
  fees: 65,
  address: {
    line1: '78 Maple Avenue',
    line2: 'Toronto, Canada'
  }
},
{
  _id: 'doc11',
  name: 'Dr. Benjamin Scott',
  image: doc11,
  speciality: 'Neurologist',
  degree: 'MBBS, DM Neurology',
  experience: '10 Years',
  about: 'Specialist in neurological disorders including stroke and epilepsy.',
  fees: 85,
  address: {
    line1: '22 River Road',
    line2: 'Seattle, USA'
  }
},
{
  _id: 'doc12',
  name: 'Dr. Amelia Turner',
  image: doc12,
  speciality: 'Dermatologist',
  degree: 'MBBS, DDVL',
  experience: '7 Years',
  about: 'Expert in skin treatments, acne care, and cosmetic dermatology.',
  fees: 60,
  address: {
    line1: '15 King Street',
    line2: 'London, UK'
  }
},
{
  _id: 'doc13',
  name: 'Dr. Lucas Green',
  image: doc13,
  speciality: 'General physician',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Provides general medical consultation and preventive healthcare.',
  fees: 50,
  address: {
    line1: '9 Central Avenue',
    line2: 'Sydney, Australia'
  }
},
{
  _id: 'doc14',
  name: 'Dr. Charlotte Adams',
  image: doc14,
  speciality: 'Gastroenterologist',
  degree: 'MBBS, DM Gastro',
  experience: '9 Years',
  about: 'Specializes in digestive system diseases and advanced gastro care.',
  fees: 75,
  address: {
    line1: '31 Ocean Drive',
    line2: 'Miami, USA'
  }
},
{
  _id: 'doc15',
  name: 'Dr. Henry Collins',
  image: doc15,
  speciality: 'Pediatricians',
  degree: 'MBBS, MD Pediatrics',
  experience: '6 Years',
  about: 'Dedicated to providing high-quality healthcare services for children.',
  fees: 65,
  address: {
    line1: '48 Elm Street',
    line2: 'Chicago, USA'
  }
}

];


