// define arrays
var names = [];
// add/push values to names array
names.push('Lakmal');
names.push('Sunil');
names.push('John');
names.push('Saman');
names.push('Sanduni');
// delete value
// names.pop();
names.unshift("kamal");
names.pop();
names.push('Sherin');
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var key = names_1[_i];
    console.log(key);
}
var arrayContent = document.querySelector('.array-content');
arrayContent.innerHTML = names;
