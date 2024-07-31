import React from 'react'
import Logo from '../../multimedia/logo.png'
import CartWidget from './CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to={"Preentrega1-mangione/"} className='logo'>
        <img src={Logo} width="100px" alt="Logo DyRx" />
        </Link>
        <ul>
          <li><Link to={"Preentrega1-mangione/"}>inicio</Link> </li>
          <li><Link to={"/categoria/diarios"}>Diarios</Link></li>
          <li><Link to={"/categoria/revistas"}>Revistas</Link></li>
          <li><Link to={"/categoria/otros"}>Otros</Link></li>
        </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar
