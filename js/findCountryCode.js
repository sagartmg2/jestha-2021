let countries = [
  {
    code: "mm",
    name: "Myanmar",
    path: "burma",
  },
  {
    code: "na",
    name: "Namibia",
    path: "namibia",
  },
  {
    code: "nr",
    name: "Nauru",
    path: "nauru",
  },
  {
    code: "np",
    name: "Nepal",
    path: "nepal",
  },
  {
    code: "nl",
    name: "Netherlands",
    path: "netherlands",
  },
  {
    code: "an",
    name: "Netherlands Antilles",
    path: "netherlandsantilles",
  },
]

/* 
    find the cods of a specific country 

    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

function findCountryCode(countryName) {
  /* check for first country
        if name matched
            return success
        else check for anoother and apply same process
    */

  for (let index = 0; index < countries.length; index++) {
    let countryObj = countries[index]
    if (countryObj.name == countryName) {
      return countryObj.code
    }
  }

  return "not found"
}

// let nepalcode = findCountryCode("Nepal")
// let nepalcode = findCountryCode("nepal")
// let nepalcode = findCountryCode("Nepal ")
let nepalcode = findCountryCode("NEPAL")

/* string functions
    "".toLowerCase()
    "".trim()
*/

console.log("Nepalcode", nepalcode)
console.log({ nepalcode: nepalcode })
console.log({ nepalcode })

let numbers = [1, 2, 3, 4, 5, 6]
let doubledNumbers = []

/*
        doubledNumbers[0] = numbers[0] * 2
        doubledNumbers[1] = numbers[1] * 2
        doubledNumbers[2] = numbers[2] * 2
        ...
        ..
        .
 */

/* code here */

doubledNumbers[0] = numbers[0] * 2
doubledNumbers[1] = numbers[1] * 2
doubledNumbers[2] = numbers[2] * 2
console.log(doubledNumbers) // [2,4,6]
doubledNumbers.push(numbers[3] * 2)
doubledNumbers.push(numbers[4] * 2)
console.log(doubledNumbers) // [2,4,6,8,10]

/* output
      doubledNumbers = [2, 4, 6, 8, 10, 12]
*/

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]

let users = []
/* code here */


console.log(users);

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


/* \

    sum(1,2)
    sum(1,2,3)
    sum(10,20,30,50,60,70)

    rest operator

*/