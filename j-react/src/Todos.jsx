import React from "react"
let todos = [
  {
    title: "html",
    status: true,
    user: "ram",
  },
  {
    title: "css",
    status: true,
    user: "ram",
  },
  {
    title: "js",
    status: true,
    user: "ram",
  },
  {
    title: "react",
    status: false,
  },
]

let todoslist = { title: "react" }

export default function Todos() {
  return (
    <div>
      <h1>Todos</h1>
      {/* { JSON.stringify(todoslist) } */}
      <ul>
        {todos.map((el, index) => {
          return (
            <li key={index}>
              {el.title} ({el.status ? "true" : "false"}){" "}
            </li>
          )
        })}
      </ul>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
            <th>user</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el, index) => {
            return (
              <tr key={index}>
                <td>
                  {el.title} {el.user ? `( ${el.user})` : ""}{" "}
                </td>
                <td>{el.status ? "✔" : "❌"}</td>
                {/* <td>{el.user ? el.user: "-" }</td> */}
                <td>{el.user ? <span> {el.user}</span> : <span> -</span>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
