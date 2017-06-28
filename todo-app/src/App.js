import React, { Component } from 'react'

import TodoList from './views/containers/TodoList'

import './App.css'

class App extends Component {
  render () {
    console.log(this.props.history)
    return (
      <div className='App'>
        <h1>My Todo List</h1>
        <hr />
        <TodoList />
      </div>
    )
  }
}

export default App
