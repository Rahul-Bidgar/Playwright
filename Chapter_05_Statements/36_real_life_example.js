let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("You are not logged in!!")
}

let isloggedin = true;
let userrole = "Editor";

if(isloggedin){
    if(userrole == "Admin"){
        console.log("Admin can do all the things")

    }else if( userrole =="Editor"){
        console.log("Welcome Editor, You have a edit and view permission")
    }else if ( userrole =="Viewer"){
        console.log("Welcome Viewer, You have a view permission only")
    }else
        console.log("you dont have a permission")
}else(
    console.log("you cant loggedin")
)





