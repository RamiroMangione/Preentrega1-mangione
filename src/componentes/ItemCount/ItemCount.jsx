import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({stock, agregarAlCarrito}) => {
  const [count, setCount] = useState(1)
  
  const aumentar = () => {
    if(count < stock){
      setCount(count + 1)
    }
  }
  const disminuir = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }


  return (
    <div className='contador'>
      <button onClick={aumentar}>+</button>
      <p>{count}</p>
      <button onClick={disminuir}>-</button>
      <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
