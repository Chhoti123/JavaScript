let a = "Shweta";   //double quotes
// console.log(a)
console.log(a.length)

let b = 'chhoti';
console.log(b) //single quotes

//template literals
let girl1 = "shweta";
let girl2 = "lakshmi";
console.log(`${girl1} and ${girl2} are friends`)

//Escape sequence characters
// want to print ban\ana
// console.log('bana\'na')
// let fruit = 'bana\'na'
let fruit = 'Banana'; //0 1 2 3 4 5 

//1.length
console.log("length of fruit is ", fruit.length)
//2.toUpperCase
console.log("length of fruit is ", fruit.toUpperCase())
//3.toLowerCase
console.log("length of fruit is ", fruit.toLowerCase())
// console.log("bana\"na")// inside double quotes we can use double quotes  and as well single quotes too
console.log('i want to talk to lakshmi\'s papa')
//4.slice
console.log("length of fruit is ", fruit.slice(2,5))
console.log("length of fruit is ", fruit.slice(2))
console.log("length of fruit is ", fruit.slice(-2))

// 5.replace
let name = "shweta chaudhary";
console.log(name.replace("shweta","chhoti"))

//6.concat
let firstName="shweta";
let secondName = "chau";
console.log(firstName.concat(" "+ secondName + "yes"))

//7.trim
let nametour = "                             shwetaSingh            "
console.log(nametour.trim())






