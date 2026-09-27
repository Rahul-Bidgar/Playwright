//this is an example of using switch(true) for range-based conditions.

let testscore = 65;

switch (true) {

    case (testscore >= 95):
        console.log("Outstanding — Top performer");
        break;

    case (testscore >= 85):
        console.log("Excellent — Above expectations");
        break;

    case (testscore >= 70):
        console.log("Good — Meets expectations");
        break;

    case (testscore >= 50):
        console.log("Needs Improvement");
        break;

    default:
        console.log("Unsatisfactory — Requires training");
}
