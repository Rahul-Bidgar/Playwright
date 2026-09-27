let age = 18;

let is_rahul_will_go_to_goa = age >= 18 ? "yes, lets go Goa!" : "No, you are minor, you cant";
console.log(is_rahul_will_go_to_goa);

//Ternary = condition ? "true resul" : "false result";

// Mostly not more use in QA automation

let status1 = "active";
let msg = status1 === "active" ? "user is active"
:status1 === "inactive" ? " User is inactive"
:status1 === "banned" ? " User is banned"
: "Unknown status";
console.log(msg);

     