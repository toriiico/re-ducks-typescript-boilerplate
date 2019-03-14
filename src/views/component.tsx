import * as React from "react"
import { Route } from "react-router"
import { BrowserRouter, Link } from "react-router-dom"

import { Routes } from "./routers"

interface Props extends React.Props<{}> {
  title: string
}

const FComponent: React.FC<Props> = (props: Props) => {
  const { title } = props

  const LinkList: React.FC = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo App</Link>
      </li>
    </ul>
  )

  return (
    <BrowserRouter>
      <div>
        <header>{title}</header>
        <LinkList />
        <main>
          <Route path="/" component={Routes} />

          {/* <Route component={NoMatch}/> */}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default FComponent
