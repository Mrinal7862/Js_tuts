const num = 400;

const balance = new Number(122.29292929);

console.log(balance);

console.log(balance.toFixed(3))

const otherNumber = 23.8896

console.log(otherNumber.toPrecision()) 

const hundreads = 10000000;

console.log(hundreads.toLocaleString('en-IN'));

//Maths

console.log(Math)

console.log(Math.abs(-9));
console.log(Math.ceil(3.1));
console.log(Math.round(3.9))
console.log(Math.min(3,4,2,1,5,8))
console.log(Math.max(2,3,4,5,5))

//Math random
console.log(Math.random().toFixed(2)) // Takes number from 0 to 1;

console.log((Math.random() * 10).toFixed(2) + 1) 

console.log(Math.floor(Math.random() * 10) + 1) //It will round the minimum value 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//It will throw the number between 10 and 20;