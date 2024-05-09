//1. use logical operator to find age of person lies in between 10 and 20.
const prompt = require("prompt-sync")()
/*let age = prompt("Enter a age")
if(age > 10 && age <20){
    console.log("age is in  between 10 and 20")
}
else{
    console.log("age is not in  between 10 and 20")
}
*/

//2.use switch case
/*const prompt = require("prompt-sync")();
let age = prompt("Enter a age ");
age = parseInt(age)
switch (age) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
break;
  case 14:
    console.log("Your age is 14");
break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("not a special age")
}
*/
// 3. write a program that find number is divisible by 2 and 3
// let age = prompt("Enter a number ")
// age = parseInt(age)
// if(age%2==0 && age%3==0){
//     console.log("Age is divisible by 2 and 3 both" )
// }
// else
// {
//     console.log("not divisible by 2,3")
// }

//3. write a program that find number is divisible by 2 or 3
// let age = prompt("Enter a number ")
// age = parseInt(age)
// if(age%2==0 ){
//     console.log("Age is divisible by 2 " )
// }
// else if(age%3==0)
// {
//     console.log("Age is divisible by 3")
// }
// else{
//     console.log("no number than 2 AND 3")
// }

// 4. use ternory operator
let age = prompt("Enter a number ")
age = parseInt(age)
console.log(age > 18 ? "You can drive" :"You can  not drive");