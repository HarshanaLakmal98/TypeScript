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
// crate car class
class Car {
    constructor(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    details() {
        return `Name is: ${this.name} ${this.brand} and made In ${this.year}`;
    }
}
;
// create carOne object
const carOne = new Car('M 20', 'Honda', 2022);
const carTwo = new Car('zbr', 'Toyota', 2023);
console.log(carOne.brand);
console.log(carOne.details());
// add class object ot an array
const cars = [];
cars.push(carOne);
cars.push(carTwo);
console.log(cars);
