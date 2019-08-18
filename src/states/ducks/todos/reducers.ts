import { combineReducers } from "redux"
import { getType } from "typesafe-actions"
import { PayloadAction } from "typesafe-actions/dist/types"

import actions from "./actions"
import { VISIBILITY_FILTER } from "./constants"
import { Todo } from "./models"

const todos = (state: Todo[] = [], action: PayloadAction<string, Todo[]>) => {
  switch (action.type) {
    case getType(actions.addTodo):
    case getType(actions.toggleTodo):
      return action.payload
    default:
      return state
  }
}

const visibilityFilter = (state: string = VISIBILITY_FILTER.SHOW_ALL, action: PayloadAction<string, string>) => {
  switch (action.type) {
    case getType(actions.setVisibilityFilter):
      return action.payload
    default:
      return state
  }
}

const todosReducer = combineReducers({
  todos,
  visibilityFilter,
})

export default todosReducer
