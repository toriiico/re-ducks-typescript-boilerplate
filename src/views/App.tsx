import * as React from "react"

import Footer from "./components/Footer"
import AddTodo from "./containers/AddTodo"
import VisibleTodoList from "./containers/VisibleTodoList"

const App = (props: any) => {
  return (
    <div className="App">
      <header>ここにAppHeader?</header>
      <p className="App-intro"> Todos </p>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
