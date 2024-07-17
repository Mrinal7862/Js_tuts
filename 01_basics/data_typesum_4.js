// //Primitive data types => Inbuilt data types

// //There are 7 primitive data typer = Number, String, Boolean, Undefined, Null, bigInt, symbol

// const isLoggedIn = false; 
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123');

// const anotherId = Symbol('123')

// const compare = id === anotherId;

// const bigNumber = BigInt(3141541414741471141441698412698526852n);

// //Refrence Data types => exterior data types 

// //objects, Arrays, functions

// const heroes = ['Superman', 'Batman', 'Spiderman', 'Action kamen']

// let myObj = {
//     name: "Mrinal",
//     age: 19,
// }

// const myfunc = function (a,b) {
//     return a + b;
// }

// console.log(myfunc(2,3))

// ***********************************************Memory*****************************

//Stack (Primitive), Heap(Non-Primitive)
//Stack values are copied 
// Heap are the reference objects

let myName = "Mrinal"

let anotherName = myName

anotherName = "Devnath";

console.log(myName)
console.log(anotherName)


let user1 = {
    email: "User@google.com",
    upi: "user@ybl"
}

let user2 = user1;

user1.email = "Mrinal@gmail.com"

console.log(user1)
console.log(user2)
