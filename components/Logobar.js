import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from './images/logo1.png'
import desc1 from './images/desc1.png'
import info from './images/info.png'


const Logobar = () => {
  return (
    <div className='Logobar'>
      <img className = 'desc' src={desc1} alt="Description" />
      <Link to='/' >
        <img className = 'logo' src={logo1} alt="Logo" />
      </Link>
      <Link className='infoLink' to='/info'>
        <img className = 'howItWorks' src={info} alt="How It Works" />
      </Link> 
      
    </div>
  )
}

export default Logobar
