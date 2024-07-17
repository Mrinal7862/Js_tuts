const name = 'Mrinal';

const repcount = 50;

//Back-tick methods 
console.log(`My name is ${name} and my rank is ${repcount} out of ${repcount}`)

const gameNew = new String('Mrinal_devnath');

console.log(gameNew.length)

console.log(gameNew.__proto__);

console.log(gameNew.toUpperCase())

console.log(gameNew.charAt(2));

console.log(gameNew.indexOf('r'))


//Sub string

const newString = gameNew.substring(0, 5)

console.log(newString)

//Slicing 

const anotherString = gameNew.slice(-14, 3)

console.log(anotherString)

//Trim 

const newStr = "       Ramesh               "

console.log(newStr)
console.log(newStr.trim())


//replace

const url = 'https://google.com'

console.log(url)
console.log(url.replace('.com', 'com.'))

//Include 

console.log(url.includes('google'))

//split

console.log(url.split('//'))