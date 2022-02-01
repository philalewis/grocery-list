import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quantity: '',
      unit: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addItem = event => {
    event.preventDefault()
    const newItem = {
      id: Date.now(),
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit
    }

    this.props.addItem(newItem)
    this.setState({ name: '', quantity: 0, unit: '' })
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          placeholder="item"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input 
          type="number"
          placeholder="amount"
          name="quantity"
          value={this.state.quantity}
          onChange={event => this.handleChange(event)}
        />

        <input 
          type="text"
          placeholder="unit"
          name="unit"
          value={this.state.unit}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.addItem(event)}>ADD</button>
      </form>
    )
  }
}

export default Form