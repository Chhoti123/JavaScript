const prompt = require("prompt-sync")();
let a = prompt("what's your age? ");
console.log(typeof a); //this a would be always a string

//now convert this string into number
//  a = Number.parseInt(a);
//  if(a>0){
//     console.log("This is valid age");
//  }
//  else{
//  console.log("This is not valid age");
//  }
//  console.log(typeof a);

a = Number.parseInt(a);
if (a < 0) {
  console.log("This is invalid age");
} else if (a < 9) {
  console.log("you are a kid you cant drive a car");
} else if (a > 9 && a >= 9) {
  console.log("you are not a kid you can drive a car");
} else {
  console.log("no number");
}
