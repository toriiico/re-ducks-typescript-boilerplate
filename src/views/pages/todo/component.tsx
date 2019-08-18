import * as React from "react"

import AddTodo from "../../components/AddTodo"
import FilterList from "../../components/FilterList"
import TodoList from "../../components/TodoList"
import { Todo } from "../../../states/ducks/todos/models"

interface Props extends React.Props<{}> {
  // AddTodo
  addTodo: (text: string) => void
  // TodoList
  todos: Todo[]
  onTodoClick: (id: number) => void
  // FilterList
  active: boolean
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const Component: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <h2>Todo App</h2>
      <AddTodo {...props} />
      <TodoList {...props} />
      <FilterList {...props} />
    </React.Fragment>
  )
}

export default Component
