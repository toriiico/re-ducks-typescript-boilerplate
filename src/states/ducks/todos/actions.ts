import { createStandardAction } from "typesafe-actions"

const ADD_TODO = "ADD_TODO"
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
const TOGGLE_TODO = "TOGGLE_TODO"

// TODO: uuidとかに変更してこいつどうにかする
let nextTodoId = 0

interface AddTodoProps {
  payload: {
    id: number
    text: string
  }
}

export const addTodo = createStandardAction(ADD_TODO).map(
  (text: string): AddTodoProps => {
    nextTodoId += 1
    return {
      payload: {
        id: nextTodoId,
        text,
      },
    }
  }
)

export const setVisibilityFilter = createStandardAction(SET_VISIBILITY_FILTER)<string>()

export const toggleTodo = createStandardAction(TOGGLE_TODO)<string>()

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
