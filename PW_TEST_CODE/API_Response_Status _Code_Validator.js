//As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.

//- 200 → "PASS - OK: Request successful"
//- 201 → "PASS - Created: Resource created successfully"
//- 301 → "WARNING - Moved Permanently: URL has changed"
//- 400 → "FAIL - Bad Request: Check request payload"
//- 401 → "FAIL - Unauthorized: Check auth token"
//- 403 → "FAIL - Forbidden: Insufficient permissions"
//- 404 → "FAIL - Not Found: Check endpoint URL"
//- 500 → "FAIL - Internal Server Error: Backend issue"
//- Any other → "UNKNOWN - Unhandled status code"
