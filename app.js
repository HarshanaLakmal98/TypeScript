"use strict";
// crate a variable using alias
let userName = 'Lakmal';
console.log("User Name is : " + userName);
let userId = "001";
console.log(`User Id is : ${userId}`);
userId = 1;
console.log(`User Id is : ${userId}`);
// create object using alias
const user = {
    userName: 'Lakmal',
    userId: '001'
};
console.log(user);
const userObject = {
    name: 'Lakmal',
    userId: '001',
};
console.log(userObject);
userObject.userId = 34;
console.log(userObject);
const lakmal = {
    firstName: 'Harshana',
    lastname: 'Lakmal',
    age: 25,
    married: false
};
