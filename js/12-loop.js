/* 

    sum(1,2)
    double(12)
    getRandomValue(genders)
    getRandomValue(religions)

*/

function findMultiplication(params) {
  let { number, startFrom, endAt } = params
  console.log(`find mulitplication of ${number} from ${startFrom} to ${endAt} `)

  /*
    console.log("5 * 1 = 5");
    console.log("5 * 2 = 10");
    console.log("5 * 3 = 15");
    console.log("5 * 3 = 15");
    console.log("5 * 3 = 15");
 */

  for (let forDigit = startFrom; forDigit <= endAt; forDigit++) {
    console.log(`${number} x ${forDigit} = ${number * forDigit}`)
  }
}

findMultiplication({
  number: 5,
  startFrom: 1,
  endAt: 5,
})

findMultiplication({
  number: 10,
  startFrom: 10,
  endAt: 20,
})

/* 
     5 x 1 = 5
     5 x 2 = 10
     ..
     ..
     5 x 5 = 25
     

*/

/* sum(1,2,3,4,5) */
