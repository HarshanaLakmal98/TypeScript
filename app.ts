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
userOne.fullName();

// crate car class
class Car {
   name:string;
   brand:string;
   year:number;
   constructor(name: string, brand: string, year: number){
      this.name = name;
      this.brand = brand;
      this.year= year;
   }
   details(){
      return `Name is: ${this.name} ${this.brand} and made In ${this.year}`
   }
};
// create carOne object
const carOne = new Car ('M 20', 'Honda',2022);
console.log(carOne.brand)
console.log(carOne.details())

