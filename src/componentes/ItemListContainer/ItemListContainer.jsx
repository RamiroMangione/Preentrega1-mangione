import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import db from '../../db/db.js'
const ItemListContainer = () => {

  const [data, setData] = useState([])
  const {categoria} = useParams()

  const getProducts = async() => {
    const productosRef = collection(db, 'productos')
    const dataDb = await getDocs(productosRef)

    const datos = dataDb.docs.map((productDb) => {
      return {id : productDb.id ,...productDb.data()}
    })

    setData(datos)
  }


  const getDataByCategory = async() => {
    const productosRef = collection(db, 'productos')
    const q = query(productosRef, where('categoria', '==', categoria))
    const dataDb = await getDocs(q)

    const datos = dataDb.docs.map((productDb) => {
      return {id : productDb.id ,...productDb.data()}
    })

    setData(datos)
  }

  useEffect(() => {
    if(categoria){
      getDataByCategory()
    }else{
      getProducts()
    }
  }, [categoria])

  if (data.length === 0) {
    return <div>Cargando...</div>
  }

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
