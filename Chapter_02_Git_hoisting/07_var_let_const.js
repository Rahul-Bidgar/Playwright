// var, let, const

// var - Function Scoped
 var a = 10; // Global Scope
console.log(a);

 // Defination of the function
 function printhello(){
    console.log("Good Morning");
    var a = 20;
    console.log(a);
    if (true){
        var a=25;
        console.log(a);
    }
    console.log("Final value of a:", a);

 }

 //Calling of the function 
 printhello();

// var also allows re-declaration:
 var a = 10;
 var a = 20; // No error, re-declaration is allowed

 console.log(a);



 //Let- Blocked scoped
let b = 10;
console.log("B->",b);

// Defination of the function

function printhello01(){
    let b= 20;
    console.log("B1->",b);
if(true){
    let b=25;
    console.log("B2->",b);

}
console.log("Final value of b:",b);
}


//calling of function
printhello01();

// let does NOT allow re-declaration in the same scope
//let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
 //let a = 10;  
 
 
let a = 10;
a = 20;
console.log(a); //expected =20

var nn = "Pramod";
let nn = "Pramod"; // Error: Identifier 'nn' has already been declared


const pi = 3.14; // Constant variable
console.log(pi);
pi = 3.14159; // Error: Assignment to constant variable
