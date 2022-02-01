import React from 'react'
import './Card.css'

const Card = ({ id, name, quantity, unit }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <li className="card">
      <p><b>{capitalize(name)}</b>: {quantity} {unit}</p>
    </li>
  )
}

export default Card