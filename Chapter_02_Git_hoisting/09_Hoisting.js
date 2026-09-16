//# **Hoisting & Temporal Dead Zone (TDZ)**
//**What is Hoisting** ?

//Hoisting is JavaScript's default behavior of moving variable and function DECLARATIONS -
// to the top of their containing scope during the compilation phase, BEFORE the code is actually executed

// console.log(a);
// var a = "Rahul";
// console.log(a);

// ---- Phase 1: Memory Creation ----
// var a  = undefined;
// var b  = undefined;

// ---- Phase 2: Execution ----
console.log(a); // undefind
//var a = "Rahul";
//console.log(a); // changed

// Hoisting does NOT physically move your code. 
// It is a mental model to understand how the JS engine handles declarations during compilation.