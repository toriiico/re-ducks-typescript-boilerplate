import * as React from "react"

interface Props extends React.Props<{}> {
  onClick: Function
  completed: boolean
  text: string
}

const FComponent: React.FC<Props> = (props: Props) => {
  const { onClick, completed, text } = props

  return (
    <li
      onClick={() => onClick()}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  )
}

export default FComponent
