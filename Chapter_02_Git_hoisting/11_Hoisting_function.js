// Step 1 - Defination of functions
// function getUserStatus(){
//     // var status_code = undefined; - not shown to you.
//     console.log(status_code);
//     var status_code = "Active";
//     console.log(status_code);

// 

// Step 2 - Calling of the functions
// getUserStatus();

//step 1: defination of function

function getuserstatus(){
    console.log(statuscode);
    var statuscode = "Active";
    console.log(statuscode);
}

// Step 2 - Calling of the functions
getuserstatus();


function getdata(){
    console.log(data)
    var data = "true";
    console.log(data);

}
getdata();


// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.