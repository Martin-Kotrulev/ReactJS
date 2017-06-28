import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TodoActions } from '../../actions/TodoActions'

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool.isRequired
  }

  completeTodo = () => {
    TodoActions.completeTodo(this.props.id)
  }

  render () {
    const { title, completed } = this.props
    return (
      <li>
        {title} - {completed ? 'DONE' 
          : <button 
              onClick={this.completeTodo}>PENDING</button>}
      </li>
    )
  }
}
