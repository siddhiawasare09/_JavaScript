let score = 33
let age = "20"
let age2 ="20abc"

console.log(typeof score);
console.log(typeof (score));

let ageInNumber = Number(age);
let age2InNumber = Number(age2);
console.log(typeof ageInNumber);
console.log(typeof age);
console.log(age2InNumber); // NaN(not a number)

// when we convert "33" into number then it will easily convert
//"33abc" => NaN
//true => 1 and false => 0

let isLoggedIn = 1
let isLoggedIn2= 0
let isLoggedIn3 = ""
let isLoggedIn4 = "Siddhi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true and 0 => false
//"" => false
//"Siddhi" = > true

//********************* Operations *********************** */

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2 * 2);
// console.log(2**3);//2 to the power 3
// console.log(2/3);

let str1 = "Hello"
let str2 = "Siddhi"

let str3 = str1 + str2

console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1"+2+2);
console.log(1+2+"2");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounter2 = 9
++gameCounter;
console.log(gameCounter);























