import React, {Component} from 'react'
import './App.css';
import Items from './Items'
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        {id: 1, name: 'onion', quantity: 2, unit: 'whole'},
        {id: 2, name: 'eggs', quantity: 1, unit: 'dozen'},
        {id: 3, name: 'milk', quantity: 1, unit: 'gallon'},
        {id: 4, name: 'garlic', quantity: 1, unit: 'head'},
        {id: 5, name: 'broccoli', quantity: 2, unit: 'head'},
        {id: 6, name: 'chicken breast', quantity: 2, unit: 'breast'}
      ]
    }
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: filteredItems })
  }

  addItem = newItem => {
    this.setState({ items: [...this.state.items, newItem] })
  }

  render() {
    return(
      <main>
        <h1>Grocery List</h1>
        <Form addItem={this.addItem} />
        { !this.state.items.length && <h2>There are currently no items on the list</h2>}
        <Items items={this.state.items} deleteItem={this.deleteItem} />
      </main>
    )
  }
}

export default App;
