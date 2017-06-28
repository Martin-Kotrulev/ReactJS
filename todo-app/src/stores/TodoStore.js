import { EventEmitter } from 'events'

import dispatcher from '../dispatcher/dispatcher'
import { CREATE_TODO, COMPLETE_TODO } from '../actions/TodoActions'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.state = {
      todos: [
        { id: 1, title: 'Go shipping', completed: false },
        { id: 2, title: 'Go walking', completed: false }
      ]
    }
  }

  createTodo = (title) => {
    const id = this.state.todos.length + 1
    this.state.todos.push({
      id,
      title,
      completed: false
    })

    this.emit('change')
  }

  completeTodo = (id) => {
    this.state.todos.find(todo => todo.id === id).completed = true

    this.emit('change')
  }

  getAll = () => {
    return new Promise((resolve, reject) => {
      resolve(this.state.todos.slice(0))
    })
  }

  handleAction = (action) => {
    console.log('handle action', action)
    switch (action.type) {
      case CREATE_TODO:
        this.createTodo(action.title)
        break
      case COMPLETE_TODO:
        this.completeTodo(action.id)
        break
      default:
        break
    }
  }
}

let todoStore = new TodoStore()

dispatcher.register(todoStore.handleAction)

export default todoStore