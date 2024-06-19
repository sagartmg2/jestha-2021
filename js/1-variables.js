greeting = "Namaste"

/*  
    variable
    simily a keyword which can store some values
*/

console.log(greeting, "ram")
console.log(greeting, "sita")
console.log(greeting, "hari")
console.log(greeting, "krishna")

age = 20
price = 10.5
console.log("age", age)
console.log("price", price)

/* varaiable naming convention */
userVerificationStatus = true // camelCase
user_verification_status = true // snake_case
console.log(userVerificationStatus)
console.log(user_verification_status)

firstName = "hari"
lastName = "bdr"
fullName = firstName + " " + lastName
console.log("fullname is ", fullName)

/* data types 
    text  - string
    number
        - integer
        - float / dobule / 
    true/false  - Boolean

*/

var color = "Red" // donot use var
let size = "md"
const PI = 3.145

/*
    declartion and initialzaion
    var vs let vs const 
*/

var count // declaration
var count = 100 // declartion and initalization
var count = 200 // declartion and re-initalization
var count = 300 // declartion and re-initalization

console.log("count", count)

let media = "facebook" // declation and initialization
// let media = "facebook" // error:  cannot reclare variable already made using let
media = "whatsapp" // re-initialization
media = "youtube" // re-initialization

let port
port = 8000
port = 3000
console.log(port)

let length
let width = 10
console.log("length", length) // undefined // specific to js only
console.log("wdith", width)

/* scope
    var is global variable

    let and const are block scope variable
*/

age = 100
