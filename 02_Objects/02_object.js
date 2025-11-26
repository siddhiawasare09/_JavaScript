//const instaUser = new Object()//singleton object
const instaUser ={}// non-singleton object
 instaUser.id ="123abc"
 instaUser.name = "John"
 instaUser.isLoggedIn = false

//console.log(instaUser);

//nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "siddhi",
            lastname:"awasare"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

//when values comes from database
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
     {
        id: 2,
        email: "s2@gmail.com"
    },
     {
        id: 3,
        email: "s3@gmail.com"
    },
     {
        id: 4,
        email: "s4@gmail.com"
    }
]
users[1].email
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));







