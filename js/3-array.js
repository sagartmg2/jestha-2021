/* 
    let course1 = "mern";
    let course2 = "QA";
    let course3 = "python";
    let course4 = "marketing";
 */

// let courses = "mern,qa,python,......"

let courses = ["mern", "qa", "python", "marketing"]

/* add machine learning in courses */

console.log("courses[4]", courses[4])
courses[4] = "marchine learning"
console.log("courses[4]", courses[4])

console.log(courses[3])
courses[3] = "digital marketing"
console.log(courses)

let color = "red"
let colorHexValue = "#FF0000"
let colrRGBValue = "rgb(255,0,0)"

let projectorBrand = "viewsonic"
let projectorColor = "white"
let projectorPrice = 50000
let projectorHeight = "15cm"
let projectorWidth = "15cm"

/* Object 
    syntax

    let <objName> = {
        <key> : <value>,
        <property: <value>,
        <attribute: <value>,
        <field: <value>,
    }
*/

let projector = {
  brand: "viewsoniic",
  color: "white",
  price: 50000,
  height: 15,
  width: 15,
  unit: "cm",
}

console.log(projector)

let course = {
  name: "mern",
  duration: "3months",
}

let colour = {
  name: "red",
  hex: "#FF0000",
  rgbValue: "rgb(255,0,0)",
}

let colors = [
  {
    name: "Reddddddddddd",  // fix this to red via code
    hexValue: "#FASF",
    rgbValue: "rgb(255,0,0)",
  },
  {
    name: "green",
    hexvalue: "#AFFASDF",
    rgbValue: "rgb(0,255,0)",
  },
]

/* code here... */

// let user = "ram"
let user = {
    name:"ram",
    phone:"98........"
}

console.log(user)

console.log("user.phone",user.phone)
user.phone = 9834252
console.log("user.phone",user.phone)
