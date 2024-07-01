// const bcrypt = require("bcrypt")
import bcrypt from "bcrypt"


function login(email, password) {
  /* request validtion */

  /* email  check  */

  /* password check */

  /* error */

  /* token  */

  console.log("login")
}

const saltRounds = 10
let dbUsers = []


function signup(username, password) {
  /* check user validation
  
  
  
  */
  /* 
  
 database validtion 
  
 */
  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(hash)
    dbUsers.push({
      username,
      password,
    })
  })

  /* send user response
  
  
  
  */

  /* handl error
  
  
  
  
  
  */
}

/* default export  */
// module.exports = signup

export default signup

