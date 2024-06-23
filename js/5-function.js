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

console.log(users[0].name + "'s phone is " + users[0].phone)
console.log(users[1].name + "'s phone is " + users[1].phone)
console.log(users[2].name + "'s phone is " + users[2].phone)

// printUserInfo(0)
// printUserInfo(1)
// printUserInfo(2)
// printUserInfo(3)

/* research: template literal / string literal  */

/* 
  1,2
  4, 5
  10,20
  10,50


  output: 

  1 + 2 = 3
  4 + 5 = 9
  .
  .

*/

/* 

  block comment: alt + shfit + a 

  console.log(" 5 + 2 = 7 ");
  console.log(" 4 + 10 = 14 ");
  console.log(" 10 + 20 = 30 ");
  console.log(" 40 + 50 = 90 ");
  console.log(" 40 + 60 = 100 ");
 */

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

function calculateSum(firstInput, secondInput) {
  let result = firstInput + secondInput
  // console.log("the sum of " + firstInput + " and " + secondInput + " is " + result)
  console.log(firstInput + " + " + secondInput + " = " + result)
}

calculateSum(10, 20)
calculateSum(222, 333)
calculateSum(2, 33)

/* 
  console.log("the double of 2 is 4");
  console.log("the double of 3 is 6");
  console.log("the double of 9 is 18");
  console.log("the double of 6 is 12"); 
*/

function calculateDouble(input) {
  // console.log("the double of", input, "is", input * 2)
  console.log(input, "x 2 =", input * 2)
}

/* executing or calling  a function  */
calculateDouble(2)
calculateDouble(3)
calculateDouble(9)
calculateDouble(6)
calculateDouble(100)
calculateDouble(200)



/* research : return in function */