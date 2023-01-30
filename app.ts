// define arrays
const names: string []=[];

// add/push values to names array
names.push('Lakmal');
names.push('Sunil');
names.push('John');
names.push('Saman');
names.push('Sanduni');

// delete value
// names.pop();
names.unshift("kamal");
names.pop()
names.push('Sherin')

for (const key of names) {
   console.log(key);
} 
let arrayContent:string = document.querySelector('.array-content');
arrayContent.innerHTML=names;