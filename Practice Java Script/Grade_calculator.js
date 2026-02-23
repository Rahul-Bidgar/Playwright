//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: 0-59

let a = 95;
if (a >=90 && a <=100){ 
    console.log("A");
}
else if (a >=80 && a<=89 ) {
    console.log("B");
}
else if(a >=70 && a<=79 ) {
    console.log("c");
}
else if(a >=60 && a<=69 ) {
    console.log("D");
}
else if(a >=0 && a<=59 ) {
    console.log("F");
}
else {
    console.log("Invalid score");
}
