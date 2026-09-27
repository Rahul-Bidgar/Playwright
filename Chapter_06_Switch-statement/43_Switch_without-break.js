

// **Q:** What happens if you forget the `break` statement? 

// A:The code "falls through" and executes ALL subsequent cases until it hits a `break` or the switch ends.
// This is the #1 switch bug. Always include break unless fall-through is intentional (and add a `// fall-through` comment).

let day = 0;
switch (day){
    case 0: 
    console.log("its a sunday, 'Rest day'")
    case 1: 
    console.log("Its a monday, 'sprint planning day'")
    case 2:
    console.log("Its a tuesday, 'Development day'")
    case 3:
        console.log("Its a Wensday, 'Its a code review day'")
        case 4: 
        console.log("Its a Thusday, 'Its a testing day'")
        case 5: 
        console.log("Its a friday, 'Deployment and Retro day'")
        case 6: 
        console.log("Its a saturday,'rest and movie day")
        default:
        console.log("Invalid day")

}