const Npromise = new Promise(function(resolve, reject){

    //Do an async tasks
    //DB calls, cryptography, network 
    setTimeout(()=> {
        console.log("Async task is completed ");
        resolve()
    }, 1000);
}) 

Npromise.then(()=>{
    console.log("Promise has been runned successfully!!")
})

//Step two

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async taks 2.")
        resolve()
    }, 2000)
}).then(()=>{
    console.log("Async two is resolved.")
})


//step Three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 3: ")
        resolve({username: "mrinal", email: "Mrinal@something.com"})
    }, 3000)
})

promiseThree.then(function(three){
    console.log(three)
})


// step four 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let err = false;
        if(!err){
            resolve({username: "Mrinal", email: "mrinal@something.com"})
        }else{
            reject('ERRO Something went wrong')
        }
    }, 4000)
})

const userName = promiseFour.then((user)=>{
    console.log(user)
    return user.username
})

.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("The promise is either resolved or either rejected")
})

// console.log(userName) This will execute an error 


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let err = true;
        if (!err){
            console.log({username: "Javascript", password: "123"})
        } else{
            reject("Error: JS went wrong")
        }
    }, 5000);
}) 

// async-Await
//remember promises are the objects

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


//next-class

async function  getAllUsers(params) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    }catch(err){
        console.log("Error: ", err)
    }
}

// getAllUsers()

fetch("https://api.github.com/users/Mrinal7862")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})