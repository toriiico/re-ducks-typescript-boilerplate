import * as React from "react"

import AddTodo from "../../components/AddTodo"
import FilterList from "../../components/FilterList"
import TodoList from "../../components/TodoList"

interface Props extends React.Props<{}> {
  // AddTodo
  todos: any
  onTodoClick: (id: string) => void
  // TodoList
  addTodo: (text: string) => void
  // FilterList
  active: boolean
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const FComponent: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <h2>Todo App</h2>
      <AddTodo {...props} />
      <TodoList {...props} />
      <FilterList {...props} />
    </React.Fragment>
  )
}

export default FComponent
