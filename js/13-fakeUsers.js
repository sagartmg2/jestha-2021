/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
let users = []

/* 
    users[0] = { name: "arrav" }
    users[1] = { name: "arraya" } 
*/
/* 
    users.push({ name: "arrav" })
    users.push({ name: "aaray" }) 
*/

for (let index = 0; index < nepaliNames.length; index++) {
  let name = nepaliNames[index]
  //   users[index] = {
  //     name: name,
  //     email: `${name}@gmail.com`,
  //     password: `${name.toLowerCase()}${index}`,
  //   }

  users.push({
    name: name,
    email: `${name}@gmail.com`,
    password: `${name.toLowerCase()}${index}`,
  })
}

console.log(users)

function sum(num1, num2, ...rest) {
  let output = 0
  console.log({ rest })
  /* calculateion */
  return output
}

// console.log(sum(100, 200, 3, 4, 5, 6, 7, 8))
// console.log(sum(50,10))

let dashboard = {
  total: 100,
  expired: 24,
  out_of_stock: 20,
}

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________




You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"]

function convertEngDigitToNepali(input) {
  // (int) 45
  let output = ""

  input = input.toString() // "45"
  let inputArray = input.split("") // ["4","5"]

  for (let index = 0; index < inputArray.length; index++) {
    let number = inputArray[index]
    output = output + nepali_digits[number]
  }

  return output
}

console.log(convertEngDigitToNepali(45))

dashboard = {
  total: convertEngDigitToNepali(100),
  expired: convertEngDigitToNepali(45),
  out_of_stock: convertEngDigitToNepali(29),
}

console.log(dashboard)

/* arrow function */
function doubleOld(input) {
  return input * 2
}

const double = (input) => {
  return input * 2
}
let number = 1000
console.log(double(number))
console.log(double(400))

/* asnynchorouns, timer,

callback function
     a function passed as an arguement to another function

*/

const showPopup = () => {
  console.log("show puppu")
}

// setTimeout(showPopup(), 6000) //  setTimeout(undefined, 6000)  // wrong 
setTimeout(showPopup, 6000) //  setTimeout(undefined, 6000) 

setTimeout(() =>{
    console.log("do somehting");
},2000)

console.log("After popup");