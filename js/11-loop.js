let users = ["ram", "shyam", "hari", "gita"]
/* 
    console.log(`in index ${0} , ${users[0]}`)
    console.log(`in index ${1} , ${users[1]}`)
    console.log(`in index ${2} , ${users[2]}`)
 */

for (let index = 0; index < users.length; index++) {
  console.log(`in index ${index} , ${users[index]}`)
}


let persons = [
  { name: "ram", age: 10, gender: "male" },
  { name: "shyam", age: 20, gender: "male" },
  { name: "hari", age: 15, gender: "male" },
  { name: "gita", age: 30, gender: "female" },
]

/* 
  mr ram's age is 10
  mr shyam's age is 20
  mr hari's age is 15
  mrs gita's age is 30
*/

/* 

        for (let index = 0; index < persons.length; index++) {
        let person = persons[index]
        if (person.gender == "male") {
            console.log(` Mr.${person.name}'s age is ${person.age}`)
        } else {
            console.log(` Mrs.${person.name}'s age is ${person.age}`)
        }
        } 
  
*/

for (let index = 0; index < persons.length; index++) {
  let person = persons[index]
  let { name, age, gender } = person  // object destructuring

  /* 
        let genderPrefix = ""

        if(person.gender == "male"){
            genderPrefix = "Mr"
        } else{
            genderPrefix = "Mrs"
        }
*/

  /* 

        let genderPrefix = person.gender == "male" ? "Mr." : "Mrs."
        console.log(`${genderPrefix}${person.name}'s age is ${person.age}`)

    */

//   console.log(`${person.gender == "male" ? "Mr." : "Mrs."}${person.name}'s age is ${person.age}`)
  console.log(`${gender == "male" ? "Mr." : "Mrs."} ${name}'s age is ${age}`)
}


/* research: ternary operator */
/* object destructuring */

/* nested loops : cart items */




findMultiplication({
    number:5,
    startFrom:1,
    endAt:5
})

/* 
     5 x 1 = 5
     5 x 2 = 10
     ..
     ..
     5 x 5 = 25
     

*/


findMultiplication({
    number:10,
    startFrom:5,
    endAt:10
})


/* 
     10 x 5 = 10
     10 x 5 = 60
     ..
     ..
     ..
     10 x 10 = 100


*/




