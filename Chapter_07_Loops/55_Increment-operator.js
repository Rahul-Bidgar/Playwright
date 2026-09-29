
// ++a = increment first, then use the new value
let a = 10;
let b = ++a;
console.log(a);
console.log(b);

//Exp table
//EXP line | A | B
    //  1     |10| NA
    //  2     |11|11
    //  3     |11
    //  4     |11


let c = 10;
console.log(c++ + c);

// // A+B -> 
// A ->c++ (  ExpA - 10, c-> 11 )
// // + 
// // B -> 11, c -> 11 ,  
// // Exp A. + ExpB -> 10 + 11

//Exp table
//EXP line | C | EXP
    //   14   |10 |NA
    //   15   |10 | 11

let a1 = 10;
console.log(a1++ + ++a1);
console.log(a1);

// a1++ --> Exp A-10 & a1 --> 11
// +
// ++a1 --> Exp B- 12 $ a1 --> 12
//EXP A + EXP B = 10 +12 =22
// a1 = 12


let a3 = 10;
console.log(++a3 + ++a3);
console.log(a3);




let a4 = 10;
// let r = a--;
let r2 = --a4;
// console.log(r);
console.log(r2);