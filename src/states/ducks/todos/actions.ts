import { createStandardAction } from "typesafe-actions"

import { AddTodo } from "./models"

export const addTodo = createStandardAction("ADD_TODO")<AddTodo>()

export const setVisibilityFilter = createStandardAction("SET_VISIBILITY_FILTER")<string>()

export const toggleTodo = createStandardAction("TOGGLE_TODO")<string>()

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
