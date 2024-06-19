/* variable */
/* data types
    primitive datatyps
        string
        number
        boolean 
        undefined // js only
        null

    non-primitive data types // collections 
        array
*/
/* let vs const */

let color = "Red"
const role = "vistor"
// role = "admin"

let screenSize
console.log("screenSize", screenSize)
screenSize = "lrge"
/* code here to change lrge to large */
screenSize = "large"
console.log("screenSize", screenSize)

function fetchProducts() {
  let data = null
  /* make api call 
        if successful:
            data = "products data"
    
    */
}

// let fruits = "apple" ,"orange"
// let fruits = "apple, orange" // wrong

let fruit1 = "apple"
let fruit2 = "orange"
let fruit3 = "kiwi"
let fruit4 = "banana"
let count = 4

/* 
    array 
        - collection of multiple values/elements
        - always have index starting with 0
        - collection of similar datatypes

    syntax
    let <arrayName> = [  <element>,<element>,<element> ]
                            0th      1st        2nd      
   
    eg:
    let fruits = ["apple", "orgne", "kiwi", "banana"]
                0th index    1st      2nd      3rd
*/

let fruits = ["apple", "orgne", "kiwi", "banana"]
console.log("fruits", fruits)

/* code here to change orgne to orange
    fruits = "orange"  // wrong 
*/

console.log("preve fruits[1]", fruits[1])
fruits[1] = "ORANGE"
console.log("after fruits[1]", fruits[1])

let statuses = [true, false, false, true]
let evenNumbers = [2, 4, 6, 8, 10, "twelve"] // donot mix datatypes in array
/* code here 
    todo: change twelve to 12
*/

console.log("before", evenNumbers[5])
evenNumbers[5] = 12
console.log("after", evenNumbers[5])
console.log(evenNumbers)

/*
    let user1 = "ram"
    let user2 = "sita"
    let user3 = "gita"

    let users = [user1, user2, user3, "shyam", "hari"] 

*/

let users = ["ram", "sita", "gita"] 

/* 
    todo 1: we need name as well as phone number of each user.
    2: add shyam at last todo 
*/




