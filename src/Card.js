import React from 'react'
import './Card.css'

const Card = ({ id, name, quantity, unit, deleteItem }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  const toggleStrikeThrough = event => {
    event.target.parentNode.classList.toggle('done')
  }

  return (
    <li className="card">
      <p onClick={event => toggleStrikeThrough(event)}>
        <b>{capitalize(name)}</b>: {quantity} {unit}
      </p>
      <button className="delete" onClick={() => deleteItem(id)}>X</button>
    </li>
  )
}

export default Card