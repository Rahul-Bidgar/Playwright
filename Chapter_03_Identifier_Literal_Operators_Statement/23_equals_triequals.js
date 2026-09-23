// ==, ===, = 

let a = 5;
//console.log(5 = 5);

//`==` (Loose Equality) compares values **after type coercion** — JavaScript tries to convert both sides to the same type before comparing.




//`===` (Strict Equality) compares values **without any conversion** — both the value AND the type must match.




console.log(5 == "5");
console.log(5 === "5");  // number, string 

console.log(null == undefined); // special rule, they only equal each other)
console.log(null === undefined);

console.log(5 == 5.0);
console.log(5 === 5.0);
console.log(5 === 5.01);