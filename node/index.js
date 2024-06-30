/* global objects 
    console.log
    setTimout
    __filename
    __dirname
    modules
    require
*/

/* node modules
     core
     third party  eg: bcrypt
     local
*/

console.log("connected: node > ide.js")
// document.getElementsByTagName("h1")[0].style.color = "Red"
console.log(__filename)
console.log(__dirname)

let dbUsers = []

const bcrypt = require("bcrypt")
const saltRounds = 10

function signup(username, password) {
  bcrypt.hash(password, 10, function (err, hash) {
    // Store hash in your password DB.
    console.log("signup",hash)
    dbUsers.push({
      username,
      password: hash
    })
  })
}

signup("ram", "secret")
signup("shyam", "secret")
signup("sita", "secret")

console.log(dbUsers)
