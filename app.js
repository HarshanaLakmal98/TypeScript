"use strict";
// Functions
// crate basic function
function addTwoNumber(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumber(2, 3));
// Crate arrow function
const addNumber = (n1, n2) => {
    return n1 + n2;
};
console.log(`Add 1 to 9 result is : ${addNumber(1, 9)}`);
const subNumber = () => {
    console.log("void keyword");
    // return 8-3;
};
console.log(subNumber());
// add optional parameters to the function
function optionalParameter(a, b, c) {
    console.log(a + b);
}
optionalParameter(8, 2);
// set default value to parameter
const multipleNumber = (a, b, c = 12) => {
    console.log(a * b);
    console.log(c);
};
multipleNumber(8, 4, 78);
