/* bom like click on insta button pr click kre to fb button pr redirect ho jaye...fb button pr click krne pr wtsapp like this.
so we can say alert, prompt are bom methods*/ 
console.log(window)
// console.log(document)
// console.log(document.body)
// document.body.style.background = "green"
 


//============practice==================WS======

const prompt = require('prompt-sync')();

let age  = prompt("Enter a age ")
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