// //Object Literal 
// const user = {
//     username: "Mrinal", 
//     loginCount: 8, 
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database.");
//         // return this.loginCount
//         console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())


function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    return this
}

const oneUser = new User("Mrinal", 29, true)

//new keyword creates an empty object, if we don't use this the values will be overwritten

const secondUser = new User("Hitesh", 30, false)

console.log(oneUser)
console.log(secondUser)