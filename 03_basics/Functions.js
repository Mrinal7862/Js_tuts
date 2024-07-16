

function sayMyName(){
    console.log("M");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("L");
}

// sayMyName

function addTwoNumbers(a, b){
    console.log(a + b)
}

addTwoNumbers(32, null)


function loginUserMessege(username){
    if(username === undefined){
        return "Please enter the username."
    }

    else{
        
        return `${username} just logged in`

    }
}

console.log(loginUserMessege("Mrinal"))
console.log(loginUserMessege())