const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("1 becomes '1st'", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("2 becomes '2nd'", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("3 becomes '3rd'", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("4 becomes '4th'", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

test("11, 12, 13 and 111, 112, 113 all become 'th' endings", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

test("21, 22, 23 and 101, 102, 103 get correct 'st', 'nd', 'rd' endings", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

test("5, 10, 24, 100 all end with 'th'", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(24)).toEqual("24th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});