//find average oof , a and b , b and c, a and a


 function onePlusAvg(x,y) {
    // return 1 + (x+y)/2;
    return Math.round(1 + (x+y)/2);

 }
let a = 3;
let b = 5;
let c = 20;

console.log("Avg of a and b", onePlusAvg(a,b));
console.log("Avg of b and c", onePlusAvg(b,c));
console.log("Avg of c and a ", onePlusAvg(c,a ));
// =====================================arrow func ==================
const hello = () => {
 console.log("hello all")
}
hello();

const sum = (a,b) =>{
 console.log("sum of a and b", a+b)
}

sum(3,4)