import React from 'react'
import './Header.css'
import logo from '../../public/Image/logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} height="200px" width="200px"></img>
      <h1>Tirumala Tirupati Devasthanam</h1>
    </div>
  )
}

export default Header
