// Predict and explain first...

// =============> write your prediction here
// When multiply(10, 32) runs, it prints 320, But the function does not return anything.


// function multiply(a, b) {
// console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply prints the result but does not return anything, so using it in a template string shows undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b)
}

console.log(multiply(10, 32));
