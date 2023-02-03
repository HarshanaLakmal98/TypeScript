// Functions
// crate basic function
function addTwoNumber(num1: number,num2: number){
   return num1 + num2;
}
console.log(addTwoNumber(2,3))

// Crate arrow function
const addNumber =(n1: number,n2: number)=>{
   return n1+n2;
}
console.log(`Add 1 to 9 result is : ${addNumber(1,9)}`)

const subNumber =() :void=>{
   console.log("void keyword")
   // return 8-3;
}
console.log(subNumber())


// add optional parameters to the function
function optionalParameter(a: number , b: number , c?:number | string){
console.log(a+b)
}
optionalParameter(8,2)

// set default value to parameter
const multipleNumber = (a: number, b: number, c: number =12)=>{
   console.log(a*b)
   console.log(c)
}
multipleNumber(8,4,78)