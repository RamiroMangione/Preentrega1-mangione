import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({data}) => {

    const{agregarProducto} = useContext(CartContext)
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const agregarAlCarrito = (count) => {
    const productoCarrito = {...data, cantidad:count}
    
    agregarProducto(productoCarrito)
    setMostrarItemCount(false)
  }
  return (
    <div className='container'>
      <h1>{data.titulo}</h1>
      <img width={400} src={data.imagen} alt={data.titulo} />
      <p>${data.precio}</p>
      <p>Stock:{data.stock}</p>
      <p>Categoria:{data.categoria}</p>
      <p>Descripcion:{data.descripcion}</p>
      {mostrarItemCount ? (<ItemCount stock={data.stock} agregarAlCarrito={agregarAlCarrito}/>) : (<Link to="/cart" className='irAlCarrito'>ir al carrito</Link>)}
      
    </div>
  )
}

export default ItemDetail
