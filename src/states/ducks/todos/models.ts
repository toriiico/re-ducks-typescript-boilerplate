export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodosState {
  todos: Todo[]
  visibilityFilter: string
}

export interface AddTodo {
  id: number
  text: string
}
