const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
console.log(cardNumber.toString().slice(-4));

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// the code won’t work because cardNumber is a number, and .slice() only works on strings or arrays.
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// Convert cardNumber to a string first, then use .slice(-4) to get the last 4 digits
