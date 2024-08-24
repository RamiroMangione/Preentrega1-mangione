import React from 'react'
import "./Checkout.css"
const FormularioCheckout = ({datos, handleChangeInput, handleSubmit}) => {
  return (
    <div >
        <form className='form' onSubmit={handleSubmit}>
        <label > Nombre</label>
        <input type="text" name='nombre' value={datos.nombre} onChange={handleChangeInput} />
        <label> Email</label>
        <input type="email" name='email' value={datos.email} onChange={handleChangeInput} />
        <label> Telefono</label>
        <input type="tel" name='tel' value={datos.tel} onChange={handleChangeInput} />
        <button type='submit'>Enviar orden</button>
    </form>
    </div>
  )
}

export default FormularioCheckout
