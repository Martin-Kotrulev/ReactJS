import React, { Component } from 'react'

import Todo from '../containers/Todo'
import TodoStore from '../../stores/TodoStore'
import AddTodoForm from './AddTodoForm'

export default class TodoList extends Component {
  state = {
    todos: []
  }

  constructor () {
    super ()

    TodoStore.on('change', () => {
      this.getAllTodos()
    })
  }

  componentDidMount () {
    this.getAllTodos()
  }

  getAllTodos = () => {
    TodoStore
      .getAll()
      .then(todos => this.setState({ todos }))
  }

  render () {
    const { todos } = this.state

    const todoElements = todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))

    return (
      <div>
        <ul>{todoElements}</ul>
        <AddTodoForm />
      </div>
    )
  }
}