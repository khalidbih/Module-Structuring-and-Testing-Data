// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});
test("should return true when absolute numerator is less than absolute denominator", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
test("should return true when numerator < denominator and denominator is negative", () => {
  expect(isProperFraction(4, -7)).toEqual(true);
});
test("should return true when numerator and denominator are both negative and numerator < denominator", () => {
  expect(isProperFraction(-4, -7)).toEqual(true);
});
test("should return true when numerator is zero and denominator is negative", () => {
  expect(isProperFraction(0, -5)).toEqual(true);
});
