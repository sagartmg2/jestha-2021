/* logical operators
        AND  &&    // gives true value if all the conditions must be true
        OR   ||    // gives true value any one fo the given conditions can be true
*/

let user = {
  name: "sita",
  paidStatus: true,
  hasScholarship: false,
  hasMetAttandence: false,
  gender: "others",
  email: "sita@sita.com",
  password: "password",
}

function login(email, password) {
  if (user.email == email && user.password == password) {
    console.log("can login")
  } else {
    console.log("cant login")
  }
}

login("sita@sita.com", "password")

let genderPrefix = "Mr."
if (user.gender == "female") {
  genderPrefix = "Mrs."
} else if (user.gender == "others") {
  genderPrefix = "Mr./Mrs."
}

/* TERNARY OPERATOR */

/* 
        if (user.paidStatus) {
        console.log(`${genderPrefix}${user.name} can give exam`)
        } else {
        if (user.hasScholarship) {
            console.log(`${genderPrefix}${user.name} can give exam`)
        } else {
            console.log(`${genderPrefix}${user.name} cant give exam`)
        }
        }


        if (user.paidStatus) {
        console.log(`${genderPrefix}${user.name} can give exam`)
        } else if (user.hasScholarship) {
        console.log(`${genderPrefix}${user.name} can give exam`)
        } else {
        console.log(`${genderPrefix}${user.name} cant give exam`)
        }

 */

if ((user.paidStatus || user.hasScholarship) && user.hasMetAttandence) {
  console.log(`${genderPrefix}${user.name} can give exam`)
} else {
  console.log(`${genderPrefix}${user.name} cant give exam`)
}

/* false values in js */



