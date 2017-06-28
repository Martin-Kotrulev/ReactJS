import React, { Component } from 'react'
import { TodoActions } from '../../actions/TodoActions'

export default class AddTodoForm extends Component {
  constructor () {
    super()

    this.state = {
      title: ''
    }
  }

  createTodo = () => {
    TodoActions.createTodo(this.state.title)
    this.setState({ title: ''})
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  render () {
    return (
      <div>
        <input 
          type='text'
          ref='title'
          value={this.state.title}
          onChange={this.handleChange}/>
        <button onClick={this.createTodo}>Add</button>
      </div>
    )
  }
}