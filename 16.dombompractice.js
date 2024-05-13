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