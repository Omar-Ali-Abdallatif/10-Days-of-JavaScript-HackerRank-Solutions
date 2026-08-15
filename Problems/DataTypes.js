/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/

const firstIneteger = 4;
const firstDecimal = 4.8;
const firstString = "HackerRank";
const secondString = "is the best place to learn and practice coding!"

let sumOfIntegers = firstIneteger + firstDecimal;
console.log(parseInt(sumOfIntegers));

let sumOfDecimal = Math.floor(firstDecimal) + firstDecimal;
console.log(sumOfDecimal)

let concatenatString = firstString + " " + secondString;
console.log(concatenatString)