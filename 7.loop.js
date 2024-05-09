// print some of natural number
const prompt = require("prompt-sync")()
/*let sum = 0;
let num = prompt("Enter a number ");
num = parseInt(num)
for(let i = 0; i<num ; i++){
 sum = sum + (i+1)
 console.log((i+1), '+');
}
console.log(sum);
*/

// print some of factorial number
/*let num = prompt("Enter a number ");
let fact = 1;
num = parseInt(num)
for(let i = 1; i<num; i++){
    fact = fact * (i+1);
}
console.log(fact);
*/


// while loop
/*let num = prompt("Enter a number ");
num = Number.parseInt(num);
let i = 0;
while(i<=num){
  console.log(i)
  i++;
}
*/

//do while loop
let num = prompt("Enter a number ");
num = Number.parseInt(num);
let i = 0;
do{
  console.log(i)
  i++;
}while(i<=num)