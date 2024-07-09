import React from 'react'
import Logo from '../../multimedia/logo.png'
import CartWidget from './CartWidget'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} width="100px" alt="Logo DyRx" />
      </div>
        <ul>
          <li>Inicio</li>
          <li>Diarios</li>
          <li>Revistas</li>
          <li>Otros</li>
        </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar
