import React from 'react'
const ItemList = ({data}) => {
  return (
    <div>
      <div className=" row alert alert-info tarjetas" role="alert">
        {data.map((item) => ( 
          <div className='col-md-3 col-sm-6 tarjeta' key={item.id}>
            <h3>{item.titulo}</h3>
            <img width={200} src={item.imagen} alt={item.titulo}/>
            <h4>${item.precio}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemList
