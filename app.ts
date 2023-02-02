// any type
let age :any;

age = 12;
console.log(age)
age = '12';
console.log(age)
age = false;
console.log(age)
age = {
   name:'lakmal'
}
console.log(age)

// ===============any type for array===============
let lakmal: any[]=[];

lakmal=['harshana',25,false]
console.log(lakmal)

// ==============any type for object==============
let harshana:{name: any, age: any}

// assign value to object
harshana={
   name:'harshana',
   age:25
}
console.log(harshana);
harshana = {
   name: false,
   age: '25'
}
console.log(harshana);