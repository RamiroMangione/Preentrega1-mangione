import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import db from '../../db/db.js'

const ItemDetailContainer = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  const getProduct = async () => {
    const docRef = doc(db, 'productos', id)
    const dataDb = await getDoc(docRef)

    setData({id: dataDb.id, ...dataDb.data()})
  }

  useEffect(() => {
    getProduct()
  }, [id])

  if (!data) {
    return <div>cargando...</div>
  }

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
