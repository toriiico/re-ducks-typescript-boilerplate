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

import actions from "./actions"

let nextTodoId = 0

const addTodo = (text: string) => {
  const id = nextTodoId
  nextTodoId += 1

  return actions.addTodo({
    id,
    text,
  })
}

const setVisibilityFilter = (filter: string) => actions.setVisibilityFilter(filter)

const toggleTodo = (id: string) => actions.toggleTodo(id)

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
