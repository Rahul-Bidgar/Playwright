// **Types of Literal**

// 1. Integers - Decimal -  42,0,-7
// 2. Hex Integer - 0xFF
// 3. Binary - 0b1010
// 4. Octal - 0o77
// 5. Float -  3.14, 0.05
// 6. Scientific Numbers - 2.5e6, 1.2e-3
// 7. String 
//     1. 'hello'
//     2. "hello"

// 8. boolean 
//     1. true, false

// 9. null ->  absence of the value 
// 10. undefined -> not yet assigned.
// 11. BigInt -> 98765432123456
// 12. Object -> { " key" : "value"} 
// 13. Array -> [1,4,3,2,42]


// numeric Literals
let a =10;
let negetive_value = -100;
let zero = 0;
let count = 42;

//Hex Integer - 0xFF

let h = 0xFF;
let color_hex =0xFF0000;
console.log(color_hex)

//octal integer 

let octal = 0o77;
let pi = 3.14159;
 
console.log (octal);

// // Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";

//Templete literal = Backticks are especially useful when you need variables inside a string.

let first_name = "Rahul";
let full_name = `Hi, ${first_name} Bidgar`;
console.log(full_name);

let math = `2+2 =${2+2}`;
console.log(math); 

// I want to store path of the file.
let path = "C:\\user\\rahul\\file.txt";
// Single slash is not allowed. We have to use double slash. 
console.log(path);



// ---> // - URLs
// ---> \\ - Path

let Address = "https://google.com/#login";
console.log(Address);


// String literal edge cases
let empty = "";                          // empty string (falsy!)
let space = " ";                         // single space (truthy!)
let zero1 = "0";                          // string zero (truthy!)

console.log(empty);
console.log(space);
console.log(zero1);




let isLoggedIn = true;
let hasPermission = false;

