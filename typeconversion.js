// show all the typecasting in javascript

// In JavaScript, typecasting or type conversion can occur implicitly or explicitly. Here are the various ways typecasting can happen in JavaScript:

// Implicit Type Conversion: This happens automatically by JavaScript when performing operations between different types.
// javascript

// Example of implicit type conversion
// let num = 10; // Number
// let str = "5"; // String
// let result = num + str; // The number 10 is implicitly converted to a string and concatenated with "5"
// console.log(result); // Output: "105"


// Explicit Type Conversion: This is when you intentionally convert one data type to another using built-in functions or operators.a.
//  a.String Conversion:

// let num = 10;
// let str = String(num); // Using String() function
// let str2 = num.toString(); // Using toString() method

// b. Number Conversion:

// let str = "10";
// let num = Number(str); // Using Number() function
// let num2 = +"10"; // Using unary plus operator

// c. Integer Conversion:

// let num = parseInt("10.5"); // Parse integer from string

// d. Float Conversion:

// let num = parseFloat("10.5"); // Parse float from string
// e. Boolean Conversion:

// let bool = Boolean("hello"); // Any non-empty string converts to true
// f. Type Coercion: This is the process of converting value from one type to another (such as string to number) when comparing different types.

// // Example of type coercion
// console.log(5 + "5"); // Output: "55", number 5 is coerced to a string
// console.log(5 - "2"); // Output: 3, string "2" is coerced to a number

// g.Using Unary Plus Operator (+): This is a quick way to convert a variable to a number.

// let str = "10";
// let num = +str;
// Using Template Literals: When using template literals, variables are implicitly converted to strings.

// let num = 10;
// let str = `The number is ${num}`; // num is implicitly converted to a string