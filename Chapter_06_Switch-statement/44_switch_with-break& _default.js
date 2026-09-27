
// Q: Does switch use `==` or `===`?

// **A:** switch uses **strict comparison (===)**. 


// Q: When should I use switch instead of if/else? 
// A: Use switch when comparing a SINGLE variable against many fixed values (status codes, commands, roles). 
// Use if/else when conditions involve ranges, multiple variables, or complex logic.




//let day = 1;
let day = 10;
switch (day){
    case 0: 
    console.log("its a sunday, 'Rest day'")
    break;
    case 1: 
    console.log("Its a monday, 'sprint planning day'")
    break;
    case 2:
    console.log("Its a tuesday, 'Development day'")
    break;
    case 3:
    console.log("Its a Wensday, 'Its a code review day'")
    break;
    case 4: 
    console.log("Its a Thusday, 'Its a testing day'")
    break;
    case 5: 
    console.log("Its a friday, 'Deployment and Retro day'")
    break;
    case 6: 
    console.log("Its a saturday,'rest and movie day")
    break;
    default:
        console.log("Invalid day")

}