let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 functions, lines are 4-5-10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is coming from line 5, because there wasn't a comma between argument in replaceAll(",", "")).

// c) Identify all the lines that are variable reassignment statements
// the lines that variable reassignment statements are 4 and 5.

// d) Identify all the lines that are variable declarations
// The variable declaration lines are 1-2-7-8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Converts the string "10,000" into the number 10000 by removing commas so math can be done.
