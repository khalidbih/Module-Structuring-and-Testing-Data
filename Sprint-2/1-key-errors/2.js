
// Predict and explain first BEFORE you run any code...
// Function parameters must be variables, not numbers.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code will give a SyntaxError because `3` is not a valid parameter name.

//function square(3) {
   // return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error happens because `3` is used as a parameter name.
// Parameters must be variable names, not numbers.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(number) {
    return number * number;
}
console.log(square(3));


