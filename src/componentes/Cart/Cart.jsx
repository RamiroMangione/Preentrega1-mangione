import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
    const {cart, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='carritoVacio'>
                <h2>No hay productos en el carrito</h2>
                <BsCart3 size={150} />
                <h2 ><Link to={'/'} className='volverAlInicio'>Volver al inicio</Link></h2>
            </div>
        )
    }

  return (
    <div>
      <ul className='listaProductos'>
        {cart.map( (productoCarrito) => (
            <li className='filaProducto' key={productoCarrito.id}>
              <Link to={`/detalle/${productoCarrito.id}`}>
                <img width={150} src={productoCarrito.imagen} alt={productoCarrito.titulo}  />
              </Link>
              <Link to={`/detalle/${productoCarrito.id}`}>
                <h3>{productoCarrito.titulo}</h3> 
              </Link>
                <p>Cantidad: {productoCarrito.cantidad}</p>
                <p>Precio unitario: ${productoCarrito.precio}</p>
                <p>Subtotal: ${productoCarrito.precio * productoCarrito.cantidad}</p>
                <button className='borrar' onClick={() => borrarProducto(productoCarrito.id)}>Eliminar</button>
            </li> 
        ))}
      </ul>
      <div className='botones'>
      <h2 className='total'>Total: ${precioTotal()}</h2>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to={'/checkout'}><button>Finalizar compra</button></Link>
      </div>
    </div>
  )
}

export default Cart
