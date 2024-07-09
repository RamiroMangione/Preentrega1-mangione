import React from 'react'
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsCart3 size={50} className='carrito'  />
      <p>7</p>
    </div>
  )
}

export default CartWidget
