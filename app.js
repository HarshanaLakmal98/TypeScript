// TypeScript Object
// =====================create object with data type=====================
// const lakmal:{
//    name:string;
//    age:number;
//    country:string;
//    married:boolean;
// } ={
//    name:"Lakmal",
//    age:25,
//    country:"Sri Lanka",
//    married:false,
// }
// console.log(lakmal);
// =================create object with out define data type=================
// const person ={
//    fname:"Harshana",
//    lname:"Lakmal",
//    age:25,
//    married:false,
//    country:"Sri Lanka",
// }
// console.log(person)
// ========== Change some value with different data type =========
// person.age = "25"; // will show some error message
// ============add new key value to object============
// person.weight = "80Kg"; // will show an error message
// ********* Solution for add new key value to object*************
// define object with data type and assign value after defining object
var John = {
    fname: 'john',
    lname: 'doe',
    age: 32,
    country: 'USA'
};
John.weight = '67kg';
John.married = true;
console.log(John);
// *****************Add value after declaring object *****************
var car = {};
// add key value to car object
car.brand = 'Totota';
car.year = 2017;
car.color = 'red';
car.condition = 'brand new';
console.log(car);
