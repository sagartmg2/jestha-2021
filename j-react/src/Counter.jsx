import React, { useState } from "react";

/* 
    hooks: functions having use 

    function useState(initalValue){
        // code ...


        return [initialValue,mutatorFunction]
    }

*/


export default function Counter() {
  //   let value = 100
  let [value, setValue] = useState(100)

  function increment() {
    setValue(value+1)
    console.log(value) 
  }

  console.log("re-render")
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}
