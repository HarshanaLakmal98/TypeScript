//============== define variable ==============
// name
let firstName = "Lakmal";
let lastName:string = "senewirathne";

// age
let age:number =25;

// ============ get type of variable ============
let firstNametype = typeof(firstName);
let agetype = typeof(age);

// access DOM element
// name
let firstNameContainer = document.querySelector('.firstName');
let lastNameContainer = document.querySelector('.lastName');
let firstNameTypeContainer = document.querySelector('.firstName-type');
// age
let ageContainer = document.querySelector('.age');
let ageTypeContainer = document.querySelector('.age-type');

// ===========display value===========
// name 
firstNameContainer.innerHTML=firstName;
lastNameContainer.innerHTML=lastName;
firstNameTypeContainer.innerHTML=agetype;
// age 
ageContainer.innerHTML=age;
ageTypeContainer.innerHTML=agetype;