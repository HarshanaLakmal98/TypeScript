"use strict";
// Class
class User {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    // create method
    fullName() {
        return `Full Name is : ${this.fname} ${this.lname}`;
    }
}
// crate userOne object using User class
const userOne = new User('Harshana', 'Lakmal', 25);
console.log(userOne);
userOne.fullName();
