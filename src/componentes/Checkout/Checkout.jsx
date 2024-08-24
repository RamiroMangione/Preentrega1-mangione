import React from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import FormularioCheckout from './FormularioCheckout'
import db from '../../db/db'
import validarFormulario from '../../utils/validacionFormulario'
import { toast } from 'react-toastify'

const Checkout = () => {
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        tel: "",
    })
    
    const [idOrden, setIdOrden] = useState(null)
    const {cart, precioTotal} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDatos({
            ...datos,[event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        const orden = {
            comprador: {...datos},
            productos:[...cart],
            fecha: Timestamp.fromDate(new Date()),
            total:precioTotal(),
        }
        const response =await validarFormulario(datos)
        if (response.status === "success") {
        sendOrder(orden)
        toast.success("Orden realizada con exito")
    }
        else {
            toast.warning(response.error)
        }
    }
    const sendOrder = async(orden) => {
        try {
        const ordenesRef = collection(db, 'ordenes')
        const ordendb = await addDoc(ordenesRef, orden)
        setIdOrden(ordendb.id)
        } catch (error) {
            console.log(error)
        }

    }

    if (idOrden) {  
        return (    
            <div>
                <h2>Gracias por su compra</h2>
                <h3>Tu codigo de orden es: {idOrden}</h3>
            </div>)}
    return (
    <div>
        <FormularioCheckout datos={datos} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit}/>
    </div>
)
}

export default Checkout
