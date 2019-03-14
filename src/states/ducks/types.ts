import { TodosState } from "./todos/models"

// NOTE: if add 'other' ducks, add 'otherState' properties.
export interface StateAll {
  todosState: TodosState
}
