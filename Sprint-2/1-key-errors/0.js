// Predict and explain first...
//  =============> write your prediction here
// It will give an error because the variable `str`, is declared twice inside the same function,
// It is already a parameter, and then it is redeclared using `let`.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
// }

// =============> write your explanation here
// The error happens because 'str' is written two times, first, it is the function parameter.
// Then, it is declared again using 'let', javaScript does not allow declaring the same variable twice, inside the same function.
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("Code"));