import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../../data/productos.json'

const ItemDetailContainer = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  const TryData = () => {
    return new Promise((resolve, reject) => {
      if (productos) {
        resolve(productos)
      } else {
        reject(console.log(err))
      }
    })
  }

  useEffect(() => {
    TryData()
      .then((res) => {
        const filtrado = res.find((item) => item.id === parseInt(id))
        if (filtrado) {
          setData(filtrado)
        } else {
          console.log('Item not found')
        }
      })
      .catch((err) => console.log(err))
  }, [id])

  if (!data) {
    return <div>cargando...</div>
  }

  return (
    <div className='container'>
      <h1>{data.titulo}</h1>
      <img width={400} src={data.imagen} alt={data.titulo} />
      <p>${data.precio}</p>
      <p>Stock:{data.stock}</p>
      <p>Categoria:{data.categoria}</p>
      <p>Descripcion:{data.descripcion}</p>
    </div>
  )
}

export default ItemDetailContainer
