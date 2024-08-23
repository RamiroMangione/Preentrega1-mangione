import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({data}) => {

    const{agregarProducto} = useContext(CartContext)
    const agregarAlCarrito = (count) => {
    const productoCarrito = {...data, cantidad:count}

    agregarProducto(productoCarrito)
  }
  return (
    <div className='container'>
      <h1>{data.titulo}</h1>
      <img width={400} src={data.imagen} alt={data.titulo} />
      <p>${data.precio}</p>
      <p>Stock:{data.stock}</p>
      <p>Categoria:{data.categoria}</p>
      <p>Descripcion:{data.descripcion}</p>
      <ItemCount stock={data.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail
