import { createSelector } from "reselect"

import CONSTANTS from "./constants"
import { Todo, TodosState } from "./models"

const todosSelector = (state: TodosState) => state

const getVisibleTodos = createSelector(
  todosSelector,
  (state: TodosState) => {
    const todos = state.todos
    const filter = state.visibilityFilter

    switch (filter) {
      case CONSTANTS.SHOW_ALL:
        return todos
      case CONSTANTS.SHOW_COMPLETED:
        return todos.filter((todo: Todo) => todo.completed)
      case CONSTANTS.SHOW_ACTIVE:
        return todos.filter((todo: Todo) => !todo.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }
)

const getVisibilityFilter = createSelector(
  todosSelector,
  (state: TodosState) => {
    return state.visibilityFilter
  }
)

export default {
  getVisibleTodos,
  getVisibilityFilter,
}
