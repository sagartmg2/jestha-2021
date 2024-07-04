import React from 'react'
let todos = [
    {
        title:"html",
        status:true
    },
    {
        title:"css",
        status:true
    },
    {
        title:"js",
        status:true
    },
    {
        title:"react",
        status:false
    },
    
]

export default function Todos() {
  return (
    <div>
        <h1>Todos</h1>
        html(true)
        css ✔
        react ❌
    </div>
  )
}
