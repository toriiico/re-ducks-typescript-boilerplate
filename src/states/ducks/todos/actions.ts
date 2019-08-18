import { createStandardAction } from "typesafe-actions"

import { TodosState } from "./models"

export const addTodo = createStandardAction("ADD_TODO")<TodosState["todos"]>()
export const toggleTodo = createStandardAction("TOGGLE_TODO")<TodosState["todos"]>()

export const setVisibilityFilter = createStandardAction("SET_VISIBILITY_FILTER")<TodosState["visibilityFilter"]>()

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
