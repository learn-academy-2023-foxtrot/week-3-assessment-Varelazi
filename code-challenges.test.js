// ASSESSMENT 3: Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

//Jest Testing: 
// describe("fibSequence", () => {
//   it("Returns an array that is the length of the given input. It adds the numbers inside the array, but in Fibonacci sequence", () => {
//     expect(fibSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

//Psuedocode
//Function Name: fibSequence 
//Input: Number
//Output: An array with the length of the input number. 
//Process: Turn given input into the length of the array. Once we have the length we will need to have 1 as the first value, 1 as the second value to add to 2. 2 as the third value to add to three and so on. An if statement to allow only numbers bigger than 2 to be added as the length of the array. If statement to see if number inputed is going to be greater than two, this will be the length of the array we are making. Make an array using Array(). A for loop to add numbers into array. Add logic inside for loop to make Fibonacci sequence work. 

// const fibSequence = (num) => {
//   if(num > 2){
//     let arrayLength = Array(num)
//     let startFibArray = [1,1]
//     //Stuck on trying to make the logic of the for loop work. Make the fibonacci logic.
//     for (let i = 2; i < arrayLength.length; i++) {
//       // [1 + 1 + 2 + 3 + 5 + 8]
//       startFibArray[i] = startFibArray[i-2]+startFibArray[i-1]
//      }
//     //Was able to add numbers into empty array by moving return out of the for loop. Kept adding it into for loop which would stop the loop after the one time.
//     return startFibArray
//   }
// }
// console.log(fibSequence(fibonacciLength1))
// console.log(fibSequence(fibonacciLength2))
//Cannot figure out the logic for the life of me.
//Had to get some help to figure out the logic inside the for loop. 


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

//Jest Testing:
// describe("leastToGreatest", () => {
//   it("Returns an array with the values sorted from least to greatest study minutes", () =>{
//     expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

// Pseudo code:
//Function Name: leastToGreatest
//Input: Array with objects/key: value
//Output: An array with JUST the values and it being ordered from small number to big number. 
//Process: .sort() to organize each number from lowest to greatest. Object.value() to get the value of the object that is being given. Use the function (a,b) => a-b which will sort the numbers in ascending order even if there is a (100) triple digit number. 

// const leastToGreatest = (object) => {
//   const var1 = Object.values(object)
//   Holds each array as: no key just value
//   console.log(var1)
//   const var2 = var1.sort((a,b) => a-b)
//   return var2
// }
//Code sorts the numbers, but only issue is that 100 is on the second index instead of being last. 
// console.log(leastToGreatest(studyMinutesWeek1))
// console.log(leastToGreatest(studyMinutesWeek2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

//Jest Testing
// describe("accumulatingSum", () => {
//   it("Returns the accumulating sum of the array. If an empty array, then it should return an empty array.", () => {
//     expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//     expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//     expect(accumulatingSum(accountTransactions3)).toEqual([])
//   })
// })

// Pseudo code:
//Function Name: accumulatingSum
//Input: Array of numbers
//Output: Array of accumulated sum of the numbers inside.
//Process: .map() to create a new array with the given information. 

const accumulatingSum = (arr) => {
    let addSum = 0
    return arr.map((value) => addSum += value)
    //Not understanding how addSum += value works. Could you explain it. Please and thank you
}
console.log(accumulatingSum(accountTransactions1))

//Feeling a bit disappointed that I couldn't solve these problems by myself. Had to get help from others. 
