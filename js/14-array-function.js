/* asynchronous 
    - runs in background
    - donot block other following codes.

    Promise in js
*/

setTimeout(() => {
  console.log("do something 2")
}, 14000)

function sumOld(input1, input2) {
  return input1 + input2
}

const sum = (input1, input2) => {
  return input1 + input2
}

for (let i = 0; i < 100; i++) {
  console.log(i)
}

console.log(sum(12, 24))
console.log("after sum ", 1)
console.log("after sum ", 2)
console.log("after sum ", 3)

function doSomethingOld() {
  console.log("do something")
}
const doSomething = () => {
  console.log("do something")
}

/* asynchronous  */
setTimeout(doSomething, 4000)

/* array functions
        push
        pop
        
        forEach

*/
// let users = ["ram", "hari", "shayam"]

let users = [
  { name: "ram", age: 10 },
  { name: "hari", age: 20 },
  { name: "shyam", age: 18 },
  { name: "sita", age: 30 },
  { name: "gita", age: 40 },
]

let childrens = []
let adults = []

/* code here ... */

for (let index = 0; index < users.length; index++) {
  console.log(` ${users[index].name}'s age: ${users[index].age} `)
}

users.forEach((element) => {
  console.log(` ${element.name}'s age: ${element.age} `)
  if (element.age <= 18) {
    childrens.push(element)
  } else {
    adults.push(element)
  }
})

console.log(childrens)
console.log(adults)

let childs = users.filter((element) => {
  if (element.age <= 18) {
    return true
  }
})

let otherAdults = users.filter((element) => {
  if (element.age > 18) {
    return true
  }
})

console.log(childs)
console.log(otherAdults)

/* .map */
/* .find */

