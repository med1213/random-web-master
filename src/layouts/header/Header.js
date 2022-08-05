import React from 'react'
import Logo from '../../assets/images/logo.jpeg'
import './style.css'

const Header = () => {
  return (
    <div className='bg-white'>
      <div className="logo"><img src={Logo} alt="logo" /></div>
    </div>
  )
}

export default Header