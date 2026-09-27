
//If multiple case values should produce the same result, group them together and put the common code after the cases.

let browser = "Safari";

switch(browser) {
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("chromium browser");
        break;
    case "Firebox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed"); ;
}
