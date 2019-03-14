import * as React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"

import * as serviceWorker from "./serviceWorker"
import configureStore from "./states/store"
import App from "./views"

const reduxStore = configureStore()

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root") as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
