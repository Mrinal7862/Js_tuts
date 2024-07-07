// Singleton
 

//Object Literals 

const mySym = Symbol("Key1")
const mySym2 = Symbol("Key1")

const jsUser = {
    name: "Mrinal",
    mySym : "This is my key 1",
    [mySym2]: "my key 2", //whether the key is symbol but it is converted to string but if we put the symbols in the square brackets it converts to the symbol 
    "age": 19,
    location : "varanasi",
    email : "Mirnal@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Tuesday"]
}
//First way
console.log(jsUser.name)

//Second way
console.log(jsUser['lastLoginDays'])
console.log(jsUser['age'])
console.log(typeof jsUser.mySym) 
console.log(typeof jsUser.mySym2) 

//freeze 
jsUser.email = "Mirnal@chatgpt.com";
// Object.freeze(jsUser);

jsUser.email = "mrinal@microsoft.com";

console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user;");
}

jsUser.greetingTwo = function(){
    console.log(`hello js User ${this.name}`)
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())

console.log(jsUser.greetingTwo())