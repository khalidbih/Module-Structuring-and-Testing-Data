// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// The error happens because cityOfBirth is used before it is declared,
// Variables declared with const cannot be accessed before their declaration.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
