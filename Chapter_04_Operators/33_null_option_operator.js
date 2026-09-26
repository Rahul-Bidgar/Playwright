let amul = null;
let val = amul ?? "nandani milk";
let val2 = null ?? "default";   // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.

val = "which milk? -> " + val;
console.log(val)
// very useful in test data handling.


let derimilk = null;
let val3 = derimilk ?? "Kitkat";
let val4 = null ?? "Default";

val = "which catubarry -->"+ val4;
console.log(val);

