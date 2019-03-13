import * as React from "react"

import Todo from "./Todo"

interface TodoProps {
  id: number
  completed: boolean
  text: string
}

interface MainProps extends React.Props<{}> {
  todos: TodoProps[]
  onTodoClick: Function
}

const TodoList = (props: MainProps) => {
  const { todos, onTodoClick } = props

  return (
    <ul>
      {todos.map((todo: TodoProps) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  )
}

export default TodoList
