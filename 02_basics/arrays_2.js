const marvelHeroes = ['Thor', 'Iron-man', 'Spider-man', 'Black widow']
const DC_heroes = ['Batman', 'Superman', 'Green lantern']

// DC_heroes.push(marvelHeroes)

// console.log(DC_heroes)

// const newar = marvelHeroes.concat(DC_heroes);

// console.log(newar)

//Spread operators /* ... *\

// const all_new_heroes = [...marvelHeroes, ...DC_heroes]

// console.log(all_new_heroes)

// const another_array = [1, 2, 3,[4,5,6], 7, [6,7, [4, 5]]]

// const real_another_array = another_array.flat()

// console.log(real_another_array)

console.log(Array.isArray("Mrinal"))
console.log(Array.from("Mrinal"))

console.log(Array.from({name: "Mirnal"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
  