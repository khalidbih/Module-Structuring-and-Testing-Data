const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 declarations lines 1-3-4-6-7 and 9.

// b) How many function calls are there?
// 1 function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// it gives the number of seconds left after counting all full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// the total number of complete minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// represents the hours,minutes,seconds of the movie.better name for the variable can be (movieTime).

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code won’t work for all values of movieLength. If it’s negative, the result doesn’t make sense because time cannot be negative.