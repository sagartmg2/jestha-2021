let users = [
  {
    name: "sita",
    phone: 972341234,
  },
  {
    name: "ram",
    phone: 97234234,
  },
  {
    name: "hari",
    phone: 972341234,
  },
]

let projector = {
  color: "white",
}
projector.price = 10000

let genders = ["male", "female", "others"]

/* TODO: print random gender from above genders */
genders.length // 3
Math.random() // 0 to 1 eg. 0.1, 0.9
Math.floor // 1.2 => 1

let randomGenderIndex = Math.floor(Math.random() * genders.length)
console.log(genders[randomGenderIndex])

let religions = ["hindu", "buddhist", "christian", "muslim"]
let ages = [10, 20, 30, 40, 50]
let randomReligionIndex = Math.floor(Math.random() * religions.length)
console.log(religions[randomGenderIndex])

/* 
users[0].religion = religions[Math.floor(Math.random() * religions.length)]
users[1].religion = religions[Math.floor(Math.random() * religions.length)]
users[2].religion = religions[Math.floor(Math.random() * religions.length)]
 */
function assignRandomReligion(index) {
  users[index].religion = religions[Math.floor(Math.random() * religions.length)]
}

// assignRandomReligion(0)
// assignRandomReligion(1)
// assignRandomReligion(2)

/*  
    users[0].age = Math.floor(Math.random() * 100)
    users[1].age = Math.floor(Math.random() * 100)
    users[2].age = Math.floor(Math.random() * 100)
 */

function assignRandomAge(index) {
  users[index].age = Math.floor(Math.random() * 100)
}

// assignRandomAge(0)
// assignRandomAge(1)
// assignRandomAge(2)



function getRandomValue(arr) {
  let value = arr[Math.floor(Math.random() * arr.length)]
  return value;
  console.log("random value", value) 
}

// getRandomValue(genders)
// getRandomValue(religions)

function assignAgeAndReligion(index) {
  // users[index].religion = religions[Math.floor(Math.random() * religions.length)]
  // users[index].age = ages[Math.floor(Math.random() * ages.length)]
  // users[index].gender = genders[Math.floor(Math.random() * genders.length)]

  users[index].religion = getRandomValue(religions)
  users[index].age = getRandomValue(ages)
  users[index].gender = getRandomValue(genders)
}

assignAgeAndReligion(0)
assignAgeAndReligion(1)
assignAgeAndReligion(2)



console.log(users)

console.log(typeof "ext")
console.log(Math.random())
// console.log(assignAgeAndReligion(0))

function double(input) {
  let output = input * 2
  return output
}

let doubledValue = double(11)
console.log(doubledValue)
console.log(double(12))

console.log(sum(12, 12))
