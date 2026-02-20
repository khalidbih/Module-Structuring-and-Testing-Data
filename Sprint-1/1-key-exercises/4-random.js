const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// num is a randomly generated whole number in the interval [1, 100], meaning it can be any number from 1 to 100. It is created by generating a random decimal,
// rounding it down, and shifting it to start at 1.
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// When I ran the program several times, num always produced a different whole number between 1 and 100,
// This shows that the program generates a new random number each time it runs.