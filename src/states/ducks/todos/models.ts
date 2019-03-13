export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodosState {
  todos: Todo[]
  visibilityFilter: string
}

export interface AddTodoAction {
  payload: {
    id: number
    text: string
  }
}
