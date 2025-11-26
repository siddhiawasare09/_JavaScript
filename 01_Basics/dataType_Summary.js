//primitive 
//7 types: String, Number, Boolean, null, undefined , Symbol, BigInt
//Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);


//Reference 
//Array, Objects, functions
// actually return type or data type of each non primitive or reference is Object but for function it is function object
const heros = ["shaktiman", "nagraj", "doga"]//Array

let obj ={
    name: "Siddhi",
    age: 21,
} //objects which are in key value pair

const myFunction=function(){
 console.log("Hello World");
 
} //function

console.log(typeof myFunction );
