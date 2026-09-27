

// Q:In QA automation, where is switch most useful? 

// A:HTTP status code handling, test environment URL mapping, browser-specific logic,
//  test severity classification, and command-line argument parsing.

let statusCode = 200;
switch(statusCode){
    case 200:
        console.log("success");
        break;
        case 404:
            console.log("page not found");
            break;
            case 500: 
            console.log("server error");
            break;
            default:
                console.log("status code not match")

}


//test environment URL mapping

let environment = "QA";
switch (environment) {
    case "Dev":
        console.log("https://dev.example.com");
        break;
    case "QA":
        console.log("https://qa.example.com");
        break;
    case "Preproduction":
        console.log("https://preprod.example.com");
        break;
    case "Staging":
        console.log("https://staging.example.com");
        break;
    case "Production":
        console.log("https://www.example.com");
        break;
    default:
        console.log("Unknown environment");
}

// browser-specific logic

let browser = "chrome";
switch(browser){
    case "firefox":
        console.log("test execution on firfox browser");
        break;
    case "Edge":
        console.log("test execution on Edge browser");
        break;
    case "chrome":
        console.log("Test execution on chrome browser");
        break;
    case "opera":
        console.log("Test execution on opera browser");
        break;
    default:
        console.log("browser not found")
}


// Command-line argument parsing
// Run: node Chapter_06_Switch-statement/45_switch_realexample.js --env QA
//      node Chapter_06_Switch-statement/45_switch_realexample.js --browser chrome
//      node Chapter_06_Switch-statement/45_switch_realexample.js --help

const [option, value] = process.argv.slice(2);

switch (option) {
    case "--env":
        switch (value) {
            case "Dev":
                console.log("Running tests against https://dev.example.com");
                break;
            case "QA":
                console.log("Running tests against https://qa.example.com");
                break;
            case "Preproduction":
                console.log("Running tests against https://preprod.example.com");
                break;
            case "Staging":
                console.log("Running tests against https://staging.example.com");
                break;
            case "Production":
                console.log("Running tests against https://www.example.com");
                break;
            default:
                console.log("Unknown or missing environment. Use Dev, QA, Preproduction, Staging, or Production.");
        }
        break;
    case "--browser":
        switch (value) {
            case "chrome":
            case "firefox":
            case "edge":
                console.log(`Running tests in ${value}`);
                break;
            default:
                console.log("Unknown or missing browser. Use chrome, firefox, or edge.");
        }
        break;
    case "--help":
        console.log("Usage:");
        console.log("  node 45_switch_realexample.js --env <Dev|QA|Preproduction|Staging|Production>");
        console.log("  node 45_switch_realexample.js --browser <chrome|firefox|edge>");
        break;
    default:
        console.log("Unknown option. Use --help to see available options.");
}

//test severity classification

let severity = "high";
switch (severity) {
    case "critical":
        console.log("Stop the release: critical issue");
        break;
    case "high":
        console.log("Fix before release: high-priority issue");
        break;
    case "medium":
        console.log("Schedule a fix: medium-priority issue");
        break;
    case "low":
        console.log("Fix when possible: low-priority issue");
        break;
    default:
        console.log("Unknown severity");
}

