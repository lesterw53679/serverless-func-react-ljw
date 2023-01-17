import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

//the app element is where we will inject all of our code
// this is where we will setup the react router dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
