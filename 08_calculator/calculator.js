// const add = function(...theArgs) {
// 	let result= 0;
//   for(let n of theArgs) {
//     result += +n;
//   }
//   return result;
// };
const add = function(a,b) {return Number(a)+Number(b)};

// const subtract = function(...theArgs) {
//   return Math.abs(theArgs[0]-theArgs[1])
// };
const subtract = function(a,b) {return Math.abs(Number(a) - Number(b))};

// const sum = function(theArgs) {
// 	let result = 0;
//   for(let i = 0; i < theArgs.length; i++) {
//     result += Number(theArgs[i]);
//   }
//   return result;
// };
const sum = function(theArgs) {return theArgs.reduce((result, current) => result+current, 0)}

const multiply = function(...theArgs) {
  let result = 1;
  for(let n of theArgs) {
    result *= +n;
  }
  return result;
};

// const power = function(...theArgs) {
// 	if (theArgs[1] === 0) return 1;
//   let result = 1;
//   for (let i = 0; i < theArgs[1]; i++) {
//     result *= theArgs[0];
//   }
//   return result;
// };
const power = function(a,b) {return Math.pow(a,b)}

const factorial = function(number) {
	if (number === 0) return 1;
  return number*factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
