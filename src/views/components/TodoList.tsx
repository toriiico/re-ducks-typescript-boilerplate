import * as React from "react"

import { Todo } from "../../states/ducks/todos/models"
import TodoComponent from "./Todo"

interface Props extends React.Props<{}> {
  todos: Todo[]
  onTodoClick: Function
}

const FComponent: React.FC<Props> = (props: Props) => {
  const { todos, onTodoClick } = props

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoComponent key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  )
}

export default FComponent
