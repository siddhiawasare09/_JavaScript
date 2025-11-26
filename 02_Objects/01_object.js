//objects are declared in two ways one is by literal and second is by constructor
//singleton makes through constructor not by literal
//Object.create

//object literals

const mySym = Symbol("Key1");
const JsUser = {
    name : "Siddhi",
    age: 21,
    location: "Sangli",
    email: "siddhi@gmail.com",
    isLoggedIn: false,
    [mySym] : "myKey"

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "siddhi@google.com"
//Object.freeze(JsUser)//used this method because no one can change the value of email
JsUser.email = "siddhi@microsoft.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello js user");
    
}
console.log(JsUser.greetings);






