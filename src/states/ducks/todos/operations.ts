/**
 * NOTE: If dispatch other operations example
 *
 * const myOperation = () => (dispatch: Dispatch) => {  // 1. declare dispatch arg.
 *   dispatch(otherDucksOperations.otherOperation())    // 2. declare other operation with dispatch.
 *   return dispatch(actions.myAction())                // 3. add dispatch existed action.
 * }
 *
 * NOTE: If call selector example
 *
 * const myOperation = () => (dispatch: Dispatch, getState: () => StateAll) => {
 *   const state = getState()
 *   const data = myOrOtherSelector.getData(state)
 *   // some process...
 *   return dispatch(actions.myAction(processData))
 * }
 *
 */

import { Dispatch } from "redux"

import { todosSelectors } from "."
import { StateAll } from "../types"
import actions from "./actions"
import { Todo } from "./models"

let nextTodoId = 0

const addTodo = (text: string) => (dispatch: Dispatch, getState: () => StateAll) => {
  const todos = todosSelectors.getTodos(getState())

  const id = nextTodoId
  nextTodoId += 1

  return dispatch(
    actions.addTodo([
      ...todos,
      {
        id,
        text,
        completed: false,
      },
    ])
  )
}

const toggleTodo = (id: number) => (dispatch: Dispatch, getState: () => StateAll) => {
  const todos = todosSelectors.getTodos(getState())

  const toggledTodos = todos.map((todo: Todo) => {
    if (todo.id !== id) return todo

    return {
      ...todo,
      completed: !todo.completed,
    }
  })

  return dispatch(actions.toggleTodo(toggledTodos))
}

const setVisibilityFilter = (filter: string) => actions.setVisibilityFilter(filter)

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
