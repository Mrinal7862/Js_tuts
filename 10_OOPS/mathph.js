// const decriptor = console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

// console.log(decriptor)

// console.log(Math.PI);
// // Math.PI = 5;

const codex = {
    name: 'Java',
    price: 3000,
    isAvailable: true,
    orderIt : function(){
        console.log(`Is it equal to the function or not.`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(codex, "name"))

// Object.defineProperty(codex, 'name', {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(codex, "name"))


// for (const [key, value] of codex) {
//     console.log(`${key}:${value}`)
// }

for (const [key, value] of Object.entries(codex)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
}