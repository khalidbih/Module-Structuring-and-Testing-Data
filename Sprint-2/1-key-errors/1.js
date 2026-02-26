// Predict and explain first...
// The code will give an error because `decimalNumber` is declared twice, 
// once as the function parameter, and again with `const` inside the function.

// Why will an error occur when this program runs?
// =============> write your prediction here
// The error occurs because `decimalNumber` has already been declared.
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
// const decimalNumber = 0.5;
// const percentage = `${decimalNumber * 100}%`;

// return percentage;
// }
// console.log(decimalNumber);

// =============> write your explanation here
// When I run the code, it gives a SyntaxError saying that, `decimalNumber` has already been declared.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100}%`;
  return percentage
}
console.log(convertToPercentage(0.5));