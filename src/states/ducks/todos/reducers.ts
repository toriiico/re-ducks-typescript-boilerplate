import { combineReducers } from "redux"
import { getType } from "typesafe-actions"

import { PayloadAction } from "typesafe-actions/dist/types"
import actions from "./actions"
import CONSTANTS from "./constants"
/* State shape
state: {
  todos: [],
  visibilityFilter: SHOW_ALL
}
*/

// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
const todo = (state: any, action: PayloadAction<any, any>) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      }
    case "TOGGLE_TODO":
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

// TODO: return any をどうにかする
const todos = (state: any = [], action: PayloadAction<any, any>): any => {
  console.log(action)
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)]
    case getType(actions.toggleTodo):
      return state.map((t: any) => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state = CONSTANTS.SHOW_ALL, action: PayloadAction<any, any>) => {
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
