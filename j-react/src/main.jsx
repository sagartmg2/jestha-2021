import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Todos from "./Todos"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Todos />
    <App />
  </React.StrictMode>
)
