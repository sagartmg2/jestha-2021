let user = {
  name: "sita",
  paidStatus: false,
  hasScholarship: true,
  gender: "male",
}

/* code here .. */
/* 
    output:
    either 
    ram can give exam 
    or
    ram cant give exam 
*/


if (user.paidStatus) {
  console.log(`${user.name} can give exam`)
} else {
  if (user.hasScholarship) {
    console.log(`${user.name} can give exam`)
  } else {
    console.log(`${user.name} cant give exam`)
  }
}


/* operator
  arthematic operator
  
  + -   *  /  
  modulours(%)  gives remainder

  ++ count   // pre icrement
  count ++   // post increment
  --


  comparision opertors 
   < 
   >
   <=
   >=
   ==   // equality operator

*/

console.log(10 / 3) // 3.33333
console.log(10 % 3) // 1
console.log(10 < 3) //  false
console.log(10 > 3) //  true
console.log(10 > 10)
console.log(10 >= 10)
console.log(10 < 10)
console.log(10 <= 10)

console.log("sita" == "sita")
console.log("Sita" == "sita")
console.log("male " == "male")
console.log("female" == "female")


let count = 0
count = count + 1
console.log(count); // 1

count += 1 // count = count + 1

console.log(count); // 2

count++ // count = count + 1

console.log(count); // 3




let number = 100
double(++number)

let input = 100
double(input++)