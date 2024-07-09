import React, { useState } from "react"

export default function Theme() {
  const [theme, setTheme] = useState("light")

  const darkMode = () => {
    setTheme("dark")
  }

  const lightMode = () => {
    setTheme("light")
  }

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <p>current theme : {theme}</p>

      {/*
      
      {
        theme == "dark"
        &&
      <button onClick={lightMode}>light theme</button>
      }

      {
        theme !== "dark"
        &&
      <button onClick={darkMode}>dark theme</button>
      } */}

      { theme == "dark" ?  
      <button onClick={lightMode}>light theme</button>
       :
        <button onClick={darkMode}>dark theme</button>
        }

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
    </div>
  )
}
