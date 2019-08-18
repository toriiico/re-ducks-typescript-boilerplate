import * as React from "react"

interface Props extends React.Props<{}> {
  onClick: () => void
  completed: boolean
  text: string
}

const Component: React.FC<Props> = (props: Props) => {
  const { onClick, completed, text } = props

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  )
}

export default Component
