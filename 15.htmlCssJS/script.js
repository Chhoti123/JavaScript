// console.log(console)
// console.error("errkt")
// console.assert("assert")
// console.info("Information")
// console.warn('warning')
// console.time("a")
// // undefined
// console.timeEnd("a")
// // VM549:1 a: 5697.136962890625 ms
// alert("Hello");
// let a = prompt("write value of a ! ", "55")
// // let a = prompt("write value of a ! ")
// // document.write(a)

// let write = confirm("do you want to confirm");
// if(write){
// document.write(a)
// }
// else{
// document.write("pls allow me to write")
// }


const prompt = require("prompt-sync")();

let age  = prompt("Enter a age")
age = Number.parseInt(age)

const ageDrive =(age)=>{
    return age>18?true:false;
} 
if(ageDrive(age)){
    console.log("you can drive!")
}

else{
    console.log("You can not drive")
}

