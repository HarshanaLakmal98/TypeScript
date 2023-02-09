// create object using module(in module we use separate ts folder and export and import each file)
// ================Import class ==================
import { Person } from './src/person.js';
// create object using person class
const lakmal = new Person('Lakmal', 25, false);
console.log(lakmal);
