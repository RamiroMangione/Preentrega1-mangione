import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const  {cantidadTotal} = useContext(CartContext)
  let cantidad = cantidadTotal()
  return (
    <Link to ={'/cart'}>
      <BsCart3 size={50} className='carrito' />
      <p className='cantidadCarrito'>{cantidad >0 && cantidad}</p>
    </Link>
  )
}

export default CartWidget
