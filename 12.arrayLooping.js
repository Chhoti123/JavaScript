// let num1 = [12,13,14,24,85];
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }


//arrayFrom  -> it basically converts from other data type to array 
// let name = "shweta" 
// console.log(typeof name)
// let num = Array.from(name)
// console.log(typeof num)
// console.log(num)


// //for of
// let num1 = [12,13,14,24,85];
// for(let i of num1){
//     console.log(i)
// }

// //for in
// let num2 = [12,13,14,24,85];
// for(let i in num1){
//     console.log(num2[i])
// }

//forEach
// num.forEach((element) =>{
//     console.log(element*element)
// })

//map
// let num1 = [12,13,14,24,85];
// let num2 = num1.map((value)=>{
//     console.log(value)
//     return value + 1; //[ 13, 14, 15, 25, 86 ]
//     // return value;  [ 12, 13, 14, 24, 85 ]

// })
// console.log(num2)

let num1 = [12,13,14,24,85];
let num2 = num1.map((value, index, array)=>{
    console.log(value, index, array)
    return value + 1; //[ 13, 14, 15, 25, 86 ]
    // return value;  [ 12, 13, 14, 24, 85 ]

})
console.log(num2)
//map use krte hai jb nya array bnana hota hai
//foreach use krte h jb ek operation krna hota h element k existing array pr