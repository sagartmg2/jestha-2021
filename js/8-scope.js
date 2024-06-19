/* global variable */
let name = "ram"
let age = 12
let number = 100


function doSomething() {
  let number = 1111 // since we used let keyword, this is now a block scope variable, only available inside dosomething function
  age = 33 // since we haven use let keyword, it updates the above global age variable
  console.log("number inside", number)
  console.log("age inside", age)
}


doSomething()
console.log("number outside", number)
console.log(" age outside", age)

let input = 11111111

function double(input) {  // let input = 100
  /* output is a block scope variable */
  let output = input * 2
  console.log("output", output)
  console.log("name", name)
}

double(100)

function triple(input){ // let input = 11
    let output = input * 3
    console.log(`triple of ${input} is ${output}`);
}


triple(11)
console.log(output)
