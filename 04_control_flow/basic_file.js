//operators
// = : Assignment
// < : less than
// <=: less than and equal to 
// == : comparison
// != : Not equal
// === : strict comparison also checks the  type

// Conditional 

// if

// const userLoggedIn = true;
// const temperature = 41;

// if(temperature < 50){ //{} These are the scopes
//     console.log(`The given temperature ${temperature} is lesser than 50`)
// }
// else{
//     console.log(`The given temperature ${temperature} is greater than 50`);
// }


// // Implicit scope

// const bank = 2000;
                                                // => Kabhi bhi nahi karna hai
// if(bank<20000) console.log("test"),
// console.log("test2");   


//Nesting 

// const balance = 1000;

// if(balance <= 1000){
//     if(balance < 500){
//         console.log("It is less than 500");
//     }
//     else if (balance < 750){
//         console.log("less than 750");
//     }
//     else{
//         console.log("Okay everything is accepted.");
//     }
// }
// else{
//     console.log("The balance is smaller than the given value.")
// }

// const userLoggedIn =  true;
// const debtCart = true;
// const loggedInfromGoogle = false;
// const loggedInfromEmail = true;

// if (userLoggedIn && debtCart ){
//     console.log("you can buy this course")
// } 

// if(loggedInfromEmail || loggedInfromGoogle){
//     console.log("Sign-up successfull")
// }