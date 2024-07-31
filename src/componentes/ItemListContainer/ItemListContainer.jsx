import React, { useState, useEffect } from 'react'
import productos from '../../data/productos.json'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
const ItemListContainer = () => {

  const [data, setData] = useState(productos)
  const {categoria} = useParams()

  const TryData = () => {
    return new Promise((resolve, reject) => {
      resolve(productos)
      reject('Error')
    })
  }
  useEffect(() => {
    TryData()
      .then((res) => {
        if (categoria) {
          const filtrados =(res.filter((item) => item.categoria === categoria))
          setData(filtrados)

        } else {
          setData(res);
        }
      })
    .catch((err) => console.log(err))
  },[categoria]) 

  return (
    <div >
      <div className=" row alert alert-info tarjetas" role="alert">
        {data.map((item) => ( 
          <Link to={`/detalle/${item.id}`} className='col-md-3 col-sm-6 tarjeta' key={item.id}>
            <h3>{item.titulo}</h3>
            <img width={200} src={item.imagen} alt={item.titulo}/>
            <h4>${item.precio}</h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer
