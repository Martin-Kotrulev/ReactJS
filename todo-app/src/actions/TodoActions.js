import dispatcher from '../dispatcher/dispatcher'

export const CREATE_TODO = 'CREATE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export const TodoActions = {
  createTodo: (title) => {
    dispatcher.dispatch({
      type: CREATE_TODO,
      title
    })
  },
  completeTodo: (id) => {
    dispatcher.dispatch({
      type: COMPLETE_TODO,
      id
    })
  }
}
