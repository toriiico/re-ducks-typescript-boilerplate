import * as React from "react"

interface Props extends React.Props<{}> {
  title: string
}

const FComponent: React.FC<Props> = (props: Props) => {
  const { title } = props

  return (
    <React.Fragment>
      <h2>Home</h2>
      <div>Please click 'Todo App' link.</div>
    </React.Fragment>
  )
}

export default FComponent
