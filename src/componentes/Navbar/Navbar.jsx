import React from 'react'
import Logo from '../../multimedia/logo.png'
import CartWidget from './CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <Link to={"/"} className='logo'>
        <img src={Logo} width="100px" alt="Logo DyRx" />
      </Link>
        <ul>
          <li><Link to={"/"}><h3>Inicio</h3></Link> </li>
          <li><Link to={"/categoria/diarios"}><h3>Diarios</h3></Link></li>
          <li><Link to={"/categoria/revistas"}><h3>Revistas</h3></Link></li>
          <li><Link to={"/categoria/otros"}><h3>otros</h3></Link></li>
        </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
