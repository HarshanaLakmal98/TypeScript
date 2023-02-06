// Class
class User{
   // define data type
   fname:string;
   lname:string;
   age:number;
   
   constructor(fname:string, lname:string, age: number){
      this.fname = fname;
      this.lname = lname;
      this.age = age;
   }
   // create method
   fullName():string{
      return `Full Name is : ${this.fname} ${this.lname}`
   }
}
// crate userOne object using User class
const userOne = new User('Harshana','Lakmal',25);
console.log(userOne);
userOne.fullName()