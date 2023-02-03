// exercise
// create alias and interface for mobile phone

// crate mobile object using alias
type brand =string;
type year = number;
type model = number | string;

const mobile:{
   brand:brand,
   year:year,
   model:model
}={
   brand:'Huawei',
   year:2017,
   model:'Y6 Pro'
}
console.log(mobile)

// crate mobile object with interface
interface mobile{
   brand:string,
   year:number,
   model: number | string
}

const phone:mobile ={
   brand:'Huawei',
   year:2017,
   model:'Y6 Pro'
}
console.log(phone)

// extend interface
interface modifyPhone extends mobile{
   condition: string
}

const mobilePhone:modifyPhone={
   brand:'Huawei',
   year:2017,
   model:'Y6 Pro',
   condition:'brand new'
  
}
console.log(mobilePhone)
