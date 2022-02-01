import React from 'react'
import './Items.css'
import Card from './Card'

const Items = ({ items, deleteItem }) => {
  const listItems = items.map(item => {
    return (
      <Card
        id={item.id}
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        unit={item.unit}
        deleteItem={deleteItem}
      />
    )
  })

  return (
    <ul className="items-container">
      {listItems}
    </ul>
  )
}

export default Items