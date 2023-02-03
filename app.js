"use strict";
// any type
let age;
age = 12;
console.log(age);
age = '12';
console.log(age);
age = false;
console.log(age);
age = {
    name: 'lakmal'
};
console.log(age);
// ===============any type for array===============
let lakmal = [];
lakmal = ['harshana', 25, false];
console.log(lakmal);
// ==============any type for object==============
let harshana;
// assign value to object
harshana = {
    name: 'harshana',
    age: 25
};
console.log(harshana);
harshana = {
    name: false,
    age: '25'
};
console.log(harshana);
// create any variable
let userId;
// assign string value
userId = '0001';
console.log(`Assign string value : ${userId}`);
// assign number value
userId = 1;
console.log(`Assign Number value : ${userId}`);
// assign number array 
userId = [1, 2, 3];
console.log(`Assign Number array : ${userId}`);
// assign string array
userId = ['1', '2', '3'];
console.log(`Assign string array : ${userId}`);
// assign mixed array
userId = ['1', 2, '3'];
console.log(`Assign Mixed array : ${userId}`);
// assign object
userId = {
    name: 'Lakmal',
    id: 1,
    leader: false
};
console.log(`Assign object : ${userId}`);
console.log(`Assign object : ${userId.name}`);
console.log(userId);
