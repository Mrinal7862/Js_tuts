const user = {
    username: "Mrinal", 
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this)
    }
}

// user.welcomeMessege()

// user.username = "Ramesh"

// user.welcomeMessege()

console.log(this)

//lekin web page par alag tarike se kaam karega 


// function caffee(){
//     let username = "Mrinal";
//     console.log(this.username);
// }

// caffee()
const coffee = function()  {
    let username = "Mrinal"
    console.log(this)
}

coffee()

const caffee = () => {
    let username = "Mrinal"
    console.log(this)
}

caffee()

//Arrow functions

//Explicit return  
const addTwo = (num1, num2) => {
    return num1 + num2
}

//Implicit return 

const two = (num1, num2) => (num1 + num2) //Used mostly in React
 
