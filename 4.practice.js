//1.create a variable type string and try to add  a number  to it
let a = "shweta";
let b = 6;
console.log(a + b);

//2.use type of operator in last question
console.log(typeof (a+b));

//3.create a const object in js can you change it to hold a number later
// const obj ={
//     shweta:"chaudhary",
//     isPrincipal:true
// }

// obj = 54;


//4. try to add new key to above question
const obj ={
    shweta:"chaudhary",
    isPrincipal:true
}

obj['chhoti'] = "developer";
console.log(obj);
//obj = 45 like this we can not write

//shweta:"chaudhary",  => shweta(key) double inverted me rhe ya na koi issue ni hai but value inverted me rhna chhaiye