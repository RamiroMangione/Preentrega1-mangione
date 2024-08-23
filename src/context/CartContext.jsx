import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnCarrito(productoNuevo.id)
        if(condicion){
            let nuevoCarrito = [...cart]
            nuevoCarrito.forEach((productoCarrito) => {
                if (productoCarrito.id === productoNuevo.id) {
                    productoCarrito.cantidad =productoNuevo.cantidad+productoCarrito.cantidad
                }
            })
            setCart(nuevoCarrito)
        }
        else{
            setCart([...cart,productoNuevo])
    }
    }
    
    const cantidadTotal = () => {
        const totalProductos = cart.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0)
        return totalProductos
    }
    
    const precioTotal = () => {
        const precio = cart.reduce((total, productoCarrito) => total + (productoCarrito.precio * productoCarrito.cantidad), 0)
        return precio
    }

    const borrarProducto = (id) => {
        const productosFiltrados = cart.filter((productoCarrito) => productoCarrito.id !== id)
        setCart(productosFiltrados)
    }

    const vaciarCarrito = () => {
        setCart([])
    }
    
    const estaEnCarrito = (id) => {
        const condicion = cart.some((productoCarrito) => productoCarrito.id === id)
        return condicion
    }

    return(
        <CartContext.Provider value={{cart, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito}} >
            {children}
        </CartContext.Provider>
    )
}


export {CartContext, CartProvider}