let users = [
  { name: "ram", age: 10 },
  { name: "hari", age: 20 },
  { name: "shyam", age: 18 },
  { name: "sita", age: 30 },
  { name: "gita", age: 40 },
]

let adultsold = users.filter((element) => {
  if (element.age > 18) {
    return true
  }
})

// let adults = users.filter((element) =>{ return element.age> 18 ? true : false  })
let adults = users.filter((element) => (element.age > 18 ? true : false))

console.log({ adults })

function doubleold(input) {
  return input * 2
}

// const double = (input) =>{ return input * 2}
const double = (input) => input * 2

console.log(double(11))

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]

const fakeUsersOld = nepaliNames.map((el, index) => {
  return {
    name: el,
    email: el + "@gmail.com",
    email: `${el.toLowerCase()}@gmail.com`,
    passowrd: el + index,
  }
})

const fakeUsers = nepaliNames.map((el,index) => ({
    name: el,
    email: el + "@gmail.com",
    email: `${el.toLowerCase()}@gmail.com`,
    passowrd: el + index,
}))


/* fakeusers = [ {} ,{} ,{} ,{} ] */

console.log({ fakeUsers })
