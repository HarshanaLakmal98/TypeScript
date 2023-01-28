//============== define variable ==============
// name
var firstName = "Lakmal";
var lastName = "senewirathne";
// age
var age = 25;
// ============ get type of variable ============
var firstNametype = typeof (firstName);
var agetype = typeof (age);
// access DOM element
// name
var firstNameContainer = document.querySelector('.firstName');
var lastNameContainer = document.querySelector('.lastName');
var firstNameTypeContainer = document.querySelector('.firstName-type');
// age
var ageContainer = document.querySelector('.age');
var ageTypeContainer = document.querySelector('.age-type');
// ===========display value===========
// name 
firstNameContainer.innerHTML = firstName;
lastNameContainer.innerHTML = lastName;
firstNameTypeContainer.innerHTML = agetype;
// age 
ageContainer.innerHTML = age;
ageTypeContainer.innerHTML = agetype;
