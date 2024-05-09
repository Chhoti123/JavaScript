// 1.Implicit typecasting
// let num = 5;
// let str = "10";
// let res = num + str;
// console.log(res);

// 1Explicit typecasting

// 1.String conversion
// let num = 10;
// console.log(typeof num);
// // let str = num.toString();
// let str = String(num)
// console.log(typeof str);

// b. Number Conversion
// let str = "10";
// console.log(typeof str)
// // let num = Number(str)
// let num = +"str"
// console.log(typeof num)


// c. Integer Conversion:
// let str = "10";
// console.log(typeof str)
// let num = parseInt(str)
// console.log(typeof num)

// d. Float Conversion:
// let str = "10";
// console.log(typeof str)
// let floatt = parseFloat(str)
// console.log(typeof floatt)

//Float typecasting always shows number as type of whether that is integer or float

// // // Example of type coercion
// console.log(5 + "5"); // Output: "55", number 5 is coerced to a string
// console.log(5 - "2"); // Output: 3, string "2" is coerced to a number

// g.Using Unary Plus Operator (+): This is a quick way to convert a variable to a number.
// let str = "10";
// let num = +str;
// console.log( typeof num)

// Using Template Literals: When using template literals, variables are implicitly converted to strings.
let num = 10;
console.log( typeof num)
 let str = `The number is ${num}`;
console.log( typeof str)
console.log(  str)