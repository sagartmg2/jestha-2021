/* data types

        string
        number
        boolean
        undefined
        null

    collections
        array
        object
*/
let colour = {
  name: "red",
  hex: "#FF0000",
  rgbValue: "rgb(255,0,0)", // this can be improved.
  rgbValue: {
    red: 255,
    green: 0,
    blue: 234234234234,
  },
  Name: "REDDDDDDD",
}

console.log("colour.Name", colour.Name)
colour.Name = "RED"
console.log("colour.Name", colour.Name)

console.log("colour.rgbValue.blue", colour.rgbValue.blue)
console.log("colour.rgbValue.blue", colour.rgbValue.blue)
colour.rgbValue.blue = 0

// let users = ["ram","sita"]

let users = [
  {
    name: "sita",
    phone: 972341234,
    address: {
      temporary: {
        district: "kathamdnu",
        ward: -10, // 1. convert this to 10 via code.
        // streetName:'abc' 2. cadd streetName via code
      },
      peramanent: {
        district: "jhapa",
        ward: 1,
      },
    },
  },
  {
    name: "ram",
    phone: 97234234,
    address: {
      temporary: {
        district: "gulmi",
        ward: 10,
      },
      peramanent: {
        district: "jhapa",
        ward: 1,
      },
    },
  },
  {
    name: "hari",
    phone: 972341234,
    address: {
      temporary: {
        district: "chitwan",
        ward: 1,
      },
      peramanent: {
        district: "jhapa",
        ward: 1,
      },
    },
  },
]

users[0].address.peramanent.streetName = "abc street"


let course = {
    name:"mern",
    duration:"3 months",
}

console.log("course.cost",course.cost);
course.cost = "20000"
console.log("course.cost",course.cost);

