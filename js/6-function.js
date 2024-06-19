/* 
    let firstNumber = 10
    let secondNumber = 2
    let result = firstNumber + secondNumber
    console.log("the sum of " + firstNumber + " and " + secondNumber + " is " + result)

    let thirdNumber = 4
    let fourthNumber = 10
    let secondResult = thirdNumber + fourthNumber
    console.log("the sum of " + thirdNumber + " and " + fourthNumber + " is " + secondNumber)

    let fithNumber = 10
    let sixthNumber = 20
    let thridResult = fithNumber + sixthNumber
    console.log("the sum of " + fithNumber + " and " + sixthNumber + " is " + thridResult)
 */

function sum(firstNumber, secondNumber) {
  // let firstNumber = 1, let seonNumber = 5
  let result = firstNumber + secondNumber
  // console.log("the sum of " + firstNumber + " and " + secondNumber + " is " + result)

  /* template literal or strig literal */
  console.log(`${firstNumber} + ${secondNumber} = ${result}`)
}

sum(100, 50)
sum(1, 5)
sum(1, 50)
sum(1, 15)
sum(21, 5)
sum(12, 5)

let users = [
  {
    name: "sita",
    phone: 972341234,
    addres: "abc",
  },
  {
    name: "ram",
    phone: 97234234,
    addres: "ijk",
  },
  {
    name: "hari",
    phone: 972341234,
    addres: "abc",
  },
]

console.log(users[0].name+"'s phone number is " + users[0].phone)


/* 
    console.log(users[0].name + "'s phone is " + users[0].phone)
    console.log(users[1].name + "'s phone is " + users[1].phone)
    console.log(`${users[2].name}'s phone is ${users[2].phone}`)
*/

function printUserInfo(index) {
  console.log(`${users[index].name}'s phone is ${users[index].phone}`)
}

printUserInfo(0)
printUserInfo(1)
printUserInfo(2)


function displayUserInfo(user) {  
  console.log(user.name + "'s phone is " + user.phone)
}

displayUserInfo(users[0])
displayUserInfo(users[1])
displayUserInfo(users[2])
displayUserInfo({ name: "ramm", phone: "989999999" })
displayUserInfo({
  name: "sita",
  phone: 972341234,
  addres: "abc",
})


let genders = ["male", "female", "others"]

/* TODO: print random gender from above genders */
genders.length // 3
Math.random() // 0 to 1 eg. 0.1, 0.9
Math.floor  // 1.2 => 1


let randomIndex = 0 // todo: randomize this index between 0 , 1 or 2
console.log(genders[randomIndex]);

let religions =  ["hindu","buddhist","christian","muslim"] 











