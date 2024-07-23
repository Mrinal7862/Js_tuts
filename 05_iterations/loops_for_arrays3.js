const coding = ["js", "ruby", "Java", "python", "cpp"]

// coding.forEach(function(i){
//     console.log(i)
// })


// coding.forEach((iterators) => {console.log(iterators)})


function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },

    {
        languageName: "Python",
        languageFileName: "py",
    },

    {
        languageName: "C-Plus-Plus",
        languageFileName: "cpp",
    }
]


myCoding.forEach((items) =>{
    console.log(items.languageName);
})
