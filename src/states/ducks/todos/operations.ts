import { Dispatch } from "redux"
import actions from "./actions"

const addTodo = (text: string) => (dispatch: Dispatch) => {
  return dispatch(actions.addTodo(text))
}

const setVisibilityFilter = (filter: string) => (dispatch: Dispatch) => {
  console.log(filter)
  return dispatch(actions.setVisibilityFilter(filter))
}

const toggleTodo = (id: string) => (dispatch: Dispatch) => {
  return dispatch(actions.toggleTodo(id))
}

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
