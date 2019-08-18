import { createSelector, Selector } from "reselect"

import { StateAll } from "../types"
import CONSTANTS from "./constants"
import { Todo, TodosState } from "./models"

export const rootSelector: Selector<StateAll, TodosState> = (state: StateAll) => state.todos
export const visivilityFilterSelector: Selector<StateAll, string> = (state: StateAll) => state.todos.visibilityFilter

const getVisibleTodos = createSelector(
  rootSelector,
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
  visivilityFilterSelector,
  (filter: string) => filter
)

export default {
  getVisibleTodos,
  getVisibilityFilter,
}
