// ==========================================================
// alias
type name = string;
type userId = string | number;

// crate a variable using alias
let userName: name = 'Lakmal';
console.log("User Name is : "+userName);

let userId: userId = "001";
console.log(`User Id is : ${userId}`)

userId = 1;
console.log(`User Id is : ${userId}`)

// create object using alias
const user:{
   userName:name;
   userId:userId;
}={
   userName:'Lakmal',
   userId:'001'
}
console.log(user);

// =======================================================
// interface

// without interface keyword
type user = {
   name:string,
   userId:number|string
}

const userObject:user={
   name: 'Lakmal',
   userId:'001',
}
console.log(userObject);

userObject.userId=34;
console.log(userObject);

// with interface keyword
interface lakmal{
   firstName: string,
   lastname: string,
   age: number,
}
// extends interface
interface statusLakmal extends lakmal{
   married:boolean
}
const lakmal:statusLakmal={
   firstName:'Harshana',
   lastname:'Lakmal',
   age:25,
   married:false
}
