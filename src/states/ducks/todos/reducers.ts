import { combineReducers } from "redux"
import { getType } from "typesafe-actions"
import { PayloadAction } from "typesafe-actions/dist/types"

import actions from "./actions"
import CONSTANTS from "./constants"
import { Todo } from "./models"

const todo = (state: any, action: PayloadAction<string, any>) => {
  switch (action.type) {
    case getType(actions.addTodo):
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      }
    case getType(actions.toggleTodo):
      if (state.id !== action.payload) {
        return state
      }

      return {
        ...state,
        completed: !state.completed,
      }
    default:
      return state
  }
}

const todos = (state: Todo[] = [], action: PayloadAction<string, Todo[]>) => {
  switch (action.type) {
    case getType(actions.addTodo):
      return [...state, todo(undefined, action)]
    case getType(actions.toggleTodo):
      return state.map((t: any) => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state: string = CONSTANTS.SHOW_ALL, action: PayloadAction<string, string>) => {
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
