import * as React from "react"

interface MainProps extends React.Props<{}> {
  onClick: Function
  completed: boolean
  text: string
}

const Todo = (props: MainProps) => {
  const { onClick, completed, text } = props

  return (
    <li
      onClick={() => {
        console.log("クリック")
        return onClick()
      }}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  )
}

export default Todo
