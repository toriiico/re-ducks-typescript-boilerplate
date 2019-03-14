import { createStandardAction } from "typesafe-actions"

import { AddTodoAction } from "./models"

let nextTodoId = 0

export const addTodo = createStandardAction("ADD_TODO").map(
  (text: string): AddTodoAction => {
    nextTodoId += 1
    return {
      payload: {
        id: nextTodoId,
        text,
      },
    }
  }
)

export const setVisibilityFilter = createStandardAction("SET_VISIBILITY_FILTER")<string>()

export const toggleTodo = createStandardAction("TOGGLE_TODO")<string>()

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
