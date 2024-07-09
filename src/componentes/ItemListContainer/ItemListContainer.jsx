import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <div className="alert alert-info" role="alert">
        {greeting}
      </div>
    </div>
  )
}

export default ItemListContainer
